module.exports = {
    home(req, res) {
        // 暂时把obj当成从数据库MySQL中读取的数据：Model层
        let obj = {
            name: "万光花",
            age: 18,
            sex: "女"
        }
        res.end(JSON.stringify(obj))
    },
    login(req, res) {
        res.end("登录页面")
    }
}