/*Configurações do servidor*/
//carregar o modúlo express
const express = require('express')
const { default: mongoose } = require('mongoose')

//executar o mudulo express
const app = express()

//definir a pasta dos arquivos ejs
app.set('views','./')

//criar uma instancia local
app.listen(3050, ()=>{
    console.log("servidor local em http://localhost:3050")
})
/*Configurações do servidor - Fim - */

/*Configuração do banco de dados -ínicio
importar o módulo mongoose*/
//Configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:wi123@fiaptecnico.5oane.mongodb.net/?retryWrites=true&w=majority')
}
/*Configuração do banco de dados - Fim*/

/*Rota para a requisição*/
app.get('/', (req, res)=>{
    //res.send('Funcionando😉😢😜👀✨🤔')
    res.render('index.ejs',{nome:"Alunos Belezura", turma:"2EMIA", disciplina:"LP2"})
})