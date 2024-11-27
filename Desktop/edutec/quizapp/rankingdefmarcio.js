function calculateRanking() {

    const scores = [
      { nome: 'Miguel', nota: 8 },
      { nome: 'Moto', nota: 6 }, 
      { nome: 'Brian', nota: 9 }
    ];

    nota.sort((a, b) => b.nota - a.nota);
  
    console.log("Ranking:");
    nota.forEach((player, index) => {
      console.log(`${index + 1}º Lugar: ${player.nome} - ${player.nota} pontos`);
    });
  }
  
  calculateRanking();

  const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',    // Host do MySQL
    user: 'root',         // Usuário do MySQL
    password: 'sua_senha',// Senha do MySQL
    database: 'nome_do_banco' // Nome do banco de dados
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão com o banco de dados estabelecida!');
});

module.exports = connection;

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add-ranking', (req, res) => {
    const { usuario, pontuacao } = req.body;

    if (!usuario || !pontuacao) {
        return res.status(400).json({ error: 'Usuário e pontuação são obrigatórios!' });
    }

    const query = 'INSERT INTO ranking (usuario, pontuacao) VALUES (?, ?)';
    db.query(query, [usuario, pontuacao], (err, results) => {
        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).json({ error: 'Erro ao salvar os dados.' });
        }

        res.status(200).json({ message: 'Ranking adicionado com sucesso!', id: results.insertId });
    });
});
app.get('/get-ranking', (req, res) => {
    const query = 'SELECT * FROM ranking ORDER BY pontuacao DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao consultar o banco:', err);
            return res.status(500).json({ error: 'Erro ao obter os dados.' });
        }

        res.status(200).json(results);
    });
});

app.listen(port, () => {
    console.log(Servidor rodando em http: localhost:${port});
});

const enviarRanking = async (usuario, pontuacao) => {
  try {
      const response = await fetch('http://localhost:3000/add-ranking', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ usuario, pontuacao }),
      });

      const data = await response.json();
      console.log(data.message);
  } catch (error) {
      console.error('Erro ao enviar ranking:', error);
  }
};

enviarRanking('Player1', 100);

const obterRanking = async () => {
  try {
      const response = await fetch('http://localhost:3000/get-ranking');
      const ranking = await response.json();

      console.log(ranking);
  } catch (error) {
      console.error('Erro ao obter ranking:', error);
  }
};

obterRanking();
  