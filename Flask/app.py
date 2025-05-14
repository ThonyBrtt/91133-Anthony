from Flask import Flask, request, jsonify, render_template
import sqlite3

app = Flask(__name__)

#cria o banco e a tabela se nao existir
def criar_banco():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABELE IF NOT EXISTS amigos (
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nome TEXT NOT NULL
            )
        ''')
    conn.commit()
    conn.close()

criar_banco()
@app.route('/')
def home():
    return render_template('index.html')

# API para cadastrar amigo
@app.rout('/api/adicimar', methods=['POST'])
def adicionar():
    dados = request.json
    nome= dados['nome']

    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO amigos (nome) VALUES (?)', (nome,))
    conn.commit()
    conn.close()

    return jsonify({'mensagem': 'Amigos adicionando com sucesso'})

# API para listar amigos
@app.route('/api/listar')
def listar():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT nome FROM amigos')
    amigos = [linha[0] for linha in cursor.fetchall()]
    conn.close()
    return jsonify(amigos)

if __name__ == '__main__':
    app.run(debug=True)