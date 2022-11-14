const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/currentdata/weather", CowinController.getWeather)
router.get("/sortthetemperature", CowinController.sortthecities)
router.get("/getmemes", CowinController.getmemes)
router.get("/cowin/getBydistrictid", CowinController.getBydistrictid)

router.post("/postmeme", CowinController.postmeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;