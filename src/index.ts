import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) { return console.log(err) }
    else return console.log('server is running on ${port}')
})