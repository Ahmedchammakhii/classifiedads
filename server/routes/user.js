const express= require("express") ; 
const router = express.Router()
const {usergetController,useraddController,usergetoneController,userupdateController,userdeleteController,usergetpostsController}=require('../controllers/user')

router.get("/",usergetController)
router.post("/",useraddController)
router.put("/:id",userupdateController)
router.delete("/:id",userdeleteController)
router.get("/:id",usergetpostsController)
router.get("/one/:id",usergetoneController)
module.exports=router ; 