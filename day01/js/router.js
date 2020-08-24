let fs=require("fs")
function getData(path,res){
    fs.readFile(`./html/${path}.html`,(err,data)=>{
        if(err)console.log(err);
        res.end(data)
    })
}

module.exports = {
   
    home: function (req, res) {
       getData("home",res)
    },
    login: function (req, res) {
        // res.write("登录")
        getData("login",res)
    },
    register: function (req, res) {
        // res.write("注册")
        getData("register",res)
    }
}