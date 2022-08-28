import express from 'express'
import { Request , Response } from 'express'

const router = express.Router()

const initWebRouter = (app:any) => {
    router.get('/' , (req : Request , res : Response) => {
        res.send('loc coc')
    })
    return app.use('/' , router)
}

export default initWebRouter

