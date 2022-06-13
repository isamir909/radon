const middelware = function (req, res, next) {

    if (req.headers.isfreeappuser == null) {
        return res.send({ error: "request is missing a mandatory header" })
    }

    else {

        next();
    }

}
module.exports.middelware= middelware

