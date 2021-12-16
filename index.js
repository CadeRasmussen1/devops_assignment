const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'dcc80e7db4a74c5b93ef7f0593ae25b9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
app.use('/js', express.static(path.join(__dirname, "public/main.js")))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

app.get('/main.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public/main.js'))
    rollbar.info('main.js file served successfully.')
})

app.get('/error', (req,res) => {
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
        rollbar.error('error test')
      }
      res.sendStatus(400)
})
app.get('/warning', (req,res) => {
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error, 'warning error');
        rollbar.warning('warning')
        
      }
})
app.get('/critical', (req,res) => {
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error, 'critical error');
        rollbar.critical('critical')
        
      }
})


app.use(rollbar.errorHandler())
const port = process.env.PORT || 4545

app.listen(port, () => console.log(`on port ${port}`))