const porta = 3003
const express = require('express')
const  app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')
const { get } = require('lodash')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos', (req, res, next) =>{
    console.log('MIddleware 1..')
    next()})
app.get('/produtos', (req, res, next) =>{
  // res.send({nome: 'Notebook lenovo T440p', preco: 1799.00}) // converter para JSON
  res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id', (req, res, next) =>{
     res.send(bancoDeDados.getProduto(req.params.id))
})
get.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.boby.nome,
       preco: req.boby.preco
    })
    res.send(produto) // JSON
})
app.listen(porta, ()=> {
   console.log(`Seu Notebook Lenovo T440p está sendo enviado desse de já agradecemos pela sua compra.. espero que goste ${porta}`)
})
