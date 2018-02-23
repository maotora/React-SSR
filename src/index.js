import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/create-store'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    
    const store = createStore()

    //- After some logic to get initial store before rendering.

    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log('listening at 3000')
})
