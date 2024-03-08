const RaceDetails = require("../../models/RaceDetail");

exports.getAllRace = async (req, res) => {
    const race = await RaceDetails.find();
    if (!race) {
        return res.status(500).json({ error: true, message: "No data found" });
    }
    return res.status(200).json({ error: false, data: race });
}

exports.getRaceByID = async (req, res) => {
    try {
        const race = await RaceDetails.findById({ _id: req.params.id });
        if (!race) {
            return res.status(404).json({ error: true, message: "Race not found" });
        } else {
            return res.status(200).json({ error: false, data: race });
        }
    } catch(e) {
        return res.status(500).json({error: true, message: e.message})
    }
}