const bodyParser = require('body-parser')
const { query, response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()
const port = 3004
const path = require('path')
const pool = require('./dbconnection')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/',(req,res) => {
    res.send('hello world!')
})
app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
})

app.get('/', (request,response) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.get('/testdb', async (request,response) => {
    let res = await pool.query('select * from public.todoList')
    console.log(res);
    response.json({ info: 'Node.js, Express, and Postgres API'})

})

app.post('/todo/create', async (request,response) => {
    let res = await pool.query('select * from public.todoList')
    response.json({ todo: res.rows
    })
})

app.post('/create', async (request,response) => {
    let res = await pool.query('INSERT INTO public.todoList (id, task, done) VALUES($1, $2, $3)', [4, 'Task 3', false]
    )
    console.log(res);
    res.send('Created')
})

    app.post('/created', async (request,response) => {
    let res = await pool.query('INSERT INTO public.todoList (id, task, done) VALUES($1, $2, $3)', [request.body.id, request.body.task, request.body.done])
    console.log(response);
    response.send('Created')
})
    app.put('/update', async (request,response) => {
    let res = await pool.query('UPDATE public.todoList SET task = $1 WHERE id = $2', [request.body.task, request.body.id])
    console.log(response);
    response.send('updated')
})
    app.delete('/delete', async (request,response) => {
    let res = await pool.query('DELETE FROM public.todoList WHERE id = $1', [request.body.id])
    console.log(response);
    response.send('DELETED')
})
    app.get('/get', async (request,response) => {
    let res = await pool.query('select * from public.todoList')
    console.log(response);
    response.send('GET')
})
