let axios = require("axios");

let getWeather = async function(req, res) {
    try {
        let country = req.query.q;
        let appId = req.query.appid;
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`,
        };
        let result = await axios(options);
        // console.log(result)
        let data = result.data;
        res.status(200).send({ msg: data, status: true });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

const sortthecities = async(req, res) => {
    try {
        const appId = req.body.appid;
        const cities = req.body.cities;
        const temperaturecity = [];
        for (let i = 0; i < cities.length; i++) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appId}`,
            };
            let result = await axios(options);
            temperaturecity.push({ city: cities[i], temp: result.data.main.temp });
        }
        temperaturecity.sort((a, b) => a.temp - b.temp);
        res.status(200).send(temperaturecity);
    } catch (error) {
        res.status(500).json(error);
    }
};

let getBydistrictid = async function(req, res) {
    try {
        let districtId = req.query.district_id;
        let date = req.query.date;
        console.log(`query params are: ${districtId} ${date}`);
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
        };
        let result = await axios(options);
        // console.log(result.data)
        res.status(200).send({ msg: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

let getmemes = async function(req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`,
        };
        let result = await axios(options);
        // console.log(result)
        let data = result.data;
        res.status(200).send({ msg: data, status: true });
    } catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message });
    }
};

let postmeme = async function(req, res) {
    try {
        let template_id = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password;
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        };
        let result = await axios(options);
        let data = result.data;
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
};

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body;

        console.log(`body is : ${blahhh} `);
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh,
        };

        let result = await axios(options);
        console.log(result.data);
        res.status(200).send({ msg: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

module.exports.getWeather = getWeather;
module.exports.getmemes = getmemes;
module.exports.getBydistrictid = getBydistrictid;
module.exports.sortthecities = sortthecities;
module.exports.postmeme = postmeme;
module.exports.getOtp = getOtp;