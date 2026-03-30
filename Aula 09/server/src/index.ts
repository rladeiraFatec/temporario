import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
// Rota GET para a raiz "/"
app.get('/', (req: Request, res: Response) => {
  res.send('Método HTTP GET')
})
// Rota GET para "/usuario/:id"
app.get('/usuario/:id', (req: Request, res: Response) => {
  const { id } = req.params
  res.send(`Usuário com ID: ${id}`)
})
// Rota com Query Parameters
app.get('/usuarios', (req: Request, res: Response) => {
  const { page, limit } = req.query
  res.send(`Página: ${page}, Limite: ${limit}`)
})
// Rota GET para "/teste"
app.get('/teste', (req: Request, res: Response) => {
  res.send('Método HTTP GET')
})
// Rota POST para "/teste"
app.post('/teste', (req: Request, res: Response) => {
  res.send('Método HTTP POST')
})
// Rota PUT para "/teste"
app.put('/teste', (req: Request, res: Response) => {
  res.send('Método HTTP PUT')
})
// Rota DELETE para "/teste"
app.delete('/teste', (req: Request, res: Response) => {
  res.send('Método HTTP DELETE')
})
// Rota com Body
app.post('/usuario', (req: Request, res: Response) => {
  const { nome, email } = req.body
  res.send(`Nome: ${nome}, Email: ${email}`)
})
