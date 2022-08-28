import express from 'express'

const viewEngine = (app : any) => {
   app.use(express.static('./src/public'))
   app.set('view engine' , 'ejs')
   app.set('views' , './src/views')
}

export default viewEngine