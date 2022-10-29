const PublisherModel = require("../models/publisherModel");
const createPublisher = async function(req, res) {

    let data = req.body
    let publisherdata = await PublisherModel.create(data)
    res.send({ datas: publisherdata })
}
module.exports.createPublisher = createPublisher;