const db = require("../database-mysql/index")
module.exports = {

    usergetController : async function (req,res) {
        try {
            const users = await db.selectusers()
            res.send(users[0])
        }
        catch (e) {
            res.send(e);
        }
    
    },
    usergetoneController : async function (req,res) {
        try {
            const user = await db.selectoneuser(req.params.id)
            res.send(user[0])
        }
        catch (e) {
            res.send(e);
        }
    },
    useraddController : async function (req,res) {
        try {
            
            const users = await db.adduser(req.body)
            res.send(users[0])
        }
        catch (e) {
            res.send(e);
        }
    
    },
    userupdateController : async function (req,res) {
        try {
            const users =  await db.updateuser(req.params.id,req.body)
            res.send(users[0])
        }
        catch (e) {
            res.send(e)
        }
    },
    userdeleteController : async function (req,res) {
        try {
            const users =  await db.deleteuser(req.params.id)
            res.send(users[0])
        }
        catch (e) {
            res.send(e)
        }
    },
    usergetpostsController : async function (req,res) {
        try {
            const posts =  await db.getuserposts(req.params.id)
            res.send(posts[0])
        }
        catch (e) {
            res.send(e)
        }
    },





}