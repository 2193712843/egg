let http = require("http")
let url = require("url")
let fs = require("./js/router2")
const router2 = require("./js/router2")

http.createServer((req, res) => {
    if (req.url != "/favicon.ico") {

        res.setHeader("Access-Control-Allow-Origin", "*"); //cors跨域处理
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })//处理乱码
        let path = url.parse(req.url).pathname;
        // controller层，控制请求执行的函数
        if (path === "/") {
            router2["home"](req, res);
        } else {
            router2[path.substring(1)](req, res)
        }

    }

}).listen(8080)
console.log("server is running at 8080....")