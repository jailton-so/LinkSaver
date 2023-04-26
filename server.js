const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    if(req.url === '/'){
        const indexHtml = fs.readFileSync('./webpage/index.html', 'utf8')
        res.writeHead(200)
        res.end(indexHtml)
    }
    if(req.url === '/webpage/style.css') {
        const styleCSS = fs.readFileSync('./webpage/style.css', 'utf8')
        res.writeHead(200)
        res.end(styleCSS)
    }

})
server.listen(3000, () => {console.log('Server runing on port 3000')})

