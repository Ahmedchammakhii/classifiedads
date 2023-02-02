const express= require("express") ; 
const router = express.Router()
const {adsgetController,adsaddController,adsadddelete,adsgetinfo,adsgetallCat}=require('../controllers/ads')
router.get("/cat",adsgetallCat)
router.get("/",adsgetController)
router.post("/",adsaddController)
router.delete("/:id",adsadddelete)
router.get("/:id",adsgetinfo)

module.exports=router ; 