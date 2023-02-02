const db = require("../database-mysql/index")
module.exports = {
    adsgetController : async function (req,res) {
            try {
                const posts = await db.selectposts()
                res.send(posts[0])
            }
            catch (e) {
                res.send(e);
            }
        
        },
        adsaddController : async function (req,res) { 
            try {
                const posts = await db.insertposts(req.body)
                res.send(posts[0])
            }
            catch (e) {
                res.send(e);
            }
        },
         adsadddelete : async function (req,res) { 
                try {
                    const posts = await db.deletepost(req.params.id)
                    res.send(posts[0])
                }
                catch (e) {
                    res.send(e);
                }
        
        },
        adsgetinfo : async function (req,res) {
            try {
                const post = await db.getpostdet(req.params.id)
                res.send(post[0])
            }
            catch (e) {
                res.send(e);
            }

          },
          adsgetallCat : async function (req,res) {
            try {
                const categ = await db.getallCat()
                res.send(categ[0])
            }
            catch (e) {
                res.send(e);
            }

          }




}