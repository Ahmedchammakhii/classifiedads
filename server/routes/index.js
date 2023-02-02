const express= require("express") ; 
const router = express.Router()
const userHandler = require("./user")
const adsHandler = require("./ads")
router.use("/users",userHandler)
router.use("/ads",adsHandler)
module.exports=router ; 