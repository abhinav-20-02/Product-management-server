const jsonServer = require('json-server')
const serverApp = jsonServer.create()
const routes = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const PORT = process.env.PORT || 3000;

serverApp.use(middleware)
serverApp.use(routes)

serverApp.listen(PORT, (err) => {
    console.log("server running At:", PORT)
    if (err) console.log(err)
})
