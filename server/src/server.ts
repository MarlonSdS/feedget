import { prisma } from './prisma'
import express from 'express'
import { type } from 'os'
import nodemailer from 'nodemailer'
import { routes } from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () =>{
    console.log('The server is running')
})

