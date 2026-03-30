import express from 'express'
import { Pool } from 'pg'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()
const port = 3001

app.use(cors())

// Configuração da conexão com o banco usando seu .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: 'database', // Nome do serviço no docker-compose
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

app.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1',
    )
    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Erro ao conectar no banco' })
  }
})

app.get('/:concurso', async (req, res) => {
  const { concurso } = req.params
  try {
    const result = await pool.query(
      'SELECT * FROM megasena WHERE concurso = $1',
      [concurso],
    )
    if (result.rows.length > 0) {
      res.json(result.rows[0])
    } else {
      res
        .status(404)
        .json({ error: `Não existem dados do concurso ${concurso}` })
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar concurso' })
  }
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
