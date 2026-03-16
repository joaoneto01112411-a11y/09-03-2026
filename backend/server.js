const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola4'
});

//CRIAR ROTA PARA SALVAR ALUNO
app.post("/salvar",(req, res)=> {
    let nome = req.body.Nome;
    let idade = req.body.Idade;
    let sql = 'INSERT INTO alunos(Nome, Idade) VALUES (?, ?)';
    conexao.query(sql, [Nome, Iade], (erro, resultado) => {
        if (erro) {
            console.log(erro);
        }else{
            res.send("Aluno salvo com sucesso")
        }
    });
})