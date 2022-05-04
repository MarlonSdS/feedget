import express from 'express'

export const routes = express.Router()

//rota de envio de feedback
routes.post('/feedback', async (req, res) =>{
    const {type, coment, screenshot} = req.body
    const feedback = await prisma.feedback.create({
        data: {
            type: type,
            coment: coment,
            screenshot: screenshot
        }
    })

    return res.sendStatus(201).json({data: feedback})
})