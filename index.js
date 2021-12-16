const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'dcc80e7db4a74c5b93ef7f0593ae25b9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const express = require('express')
const path = require('path')

const app = express()


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`on port ${port}`))