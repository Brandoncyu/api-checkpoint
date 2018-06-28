const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
app.use(morgan('dev'))
app.use(bodyParser.json())

const port = process.env.PORT || 8000

app.use((req, res, next)){
  const status = 404
  const message = `Count not ${req.method} ${req.url}`

  next({status, message})
}

app.use((err, req, res, next){
  console.log(err)
  const errorMessage = {}

  errorMessage.status = err.status || 500
  errorMessage.message = err.message || 'Something went wrong'

  if(process.env.NODE_ENV !== 'production'){
    errorMessage.stack = err.stack
  }

  res.status(errorMessage.status).send(errorMessage)
}



const listener = () => console.log(`listening on port ${port}`)
app.use(port, listener)
