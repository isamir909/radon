let axios = require("axios");
const { get } = require("mongoose");

//  Get all the memes
let memeList = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`,
        };
        let result = await axios(option);
        let data = result.data;
        res.status(200).send({ data: data });
    } catch (error) {
        res.status(500).res({ err: error.message });
    }
};

// post API to create meme

let createMeme = async function (req, res) {
    try {
        let password = req.query.password;
        let username = req.query.username;
        let text1 = req.query.text1;
        let text0 = req.query.text0;
        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        };
        result = await axios(option);

        res.status(200).send({ data: result.data });
    } catch (error) {
        res.status(500).res({ err: error.message });
    }
};

module.exports.memeList = memeList;
module.exports.createMeme = createMeme;
