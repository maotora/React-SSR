import 'babel-polyfill'
import express from 'express'
import Routes from './client/routes'
import { matchRoutes } from 'react-router-config'
import renderer from './helpers/renderer'
import createStore from './helpers/create-store'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    
    const store = createStore()

    const stuff = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null
    })

    Promise.all(stuff).then(() => {
        res.send(renderer(req, store))
    })

})

app.listen(3000, () => {
    console.log('listening at 3000')
})
