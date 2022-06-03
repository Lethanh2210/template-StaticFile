let http = require('http');
let fs = require('fs');
let qs = require('qs');

let users = [];

let server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let data1 = qs.parse(data);
            let user = {
                name: data1.name,
                email: data1.email,
                phone: data1.phone,
                address: data1.address
            }
            users.push(user);
            console.log(users)
            return res.end('Register success!');
        })
        req.on('error', () => {
            console.log('error')
        })
    }
});

server.listen(8081, function () {
    console.log('server running at localhost:8081 ')
});