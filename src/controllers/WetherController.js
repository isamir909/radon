let axios = require("axios");
const { get } = require("mongoose");

let lundonWether = async function (req, res) {
    try {
        let city = req.query.q;
        let option = {
            method: "get",
            url: ` http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da5ed95f881c4c5011281e43cc0a8902`,
        };
        let result = await axios(option);

        let data = result.data;

        let temp = data.main.temp_max;

        res.status(200).send({ city: city, temp: temp });
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

let getsortedTemp = async function (req, res) {
    try {
        let city = [
            "Bengaluru",
            "Mumbai",
            "Delhi",
            "Kolkata",
            "Chennai",
            "London",
            "Moscow",
        ];

        let a = [];
        for (let i = 0; i < city.length; i++) {
            let option = {
                method: "get",
                url: ` http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=da5ed95f881c4c5011281e43cc0a8902`,
            };

            let result = await axios(option);
            // console.log(result);
            let tempdata = result.data.main.temp_max;
            let citydata = result.data.name;

            let final = { city: citydata, temp: tempdata };
            a.push(final);
        }

        // console.log(a)
        let sorted = a.sort(function (x, y) {
            return x.temp - y.temp;
        });
        // console.log(sorted)

        res.status(200).send({ data: sorted });
    } catch (error) {
        res.status(500).send({ err: error.message });
    }
};

module.exports.lundonWether = lundonWether;
module.exports.getsortedTemp = getsortedTemp;
