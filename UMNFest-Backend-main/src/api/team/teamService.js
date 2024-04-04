const Team = require("../../models/Team")
const teamController = require("./teamController")
const Race = require("../../models/Race")
const RaceDetail = require("../../models/RaceDetail")
const User = require("../../models/User")
const fs = require("fs");

exports.confirmPayment = async function (req, res) {
    const team_id = req.params.id;
    const paymentFilePath = req.file ? req.file.path : null;
    if(paymentFilePath == null) {
        return res.status(200).json({error: true, message: "Payment File is null."})
    }
    try {
        var checkTeam = await Team.findById(team_id);
        if(!checkTeam) {
            return res.status(200).json({error: true, message: "Team not found"})
        }

        if(checkTeam.paymentProof != undefined) {
            fs.existsSync(checkTeam.paymentProof) ? fs.unlinkSync(checkTeam.paymentProof) : '';
        }

        var updateTeam = await Team.findByIdAndUpdate(team_id, {paymentProof: paymentFilePath})
        if(updateTeam) {
            const races = await Race.find({ team_id });

            const raceDetails = await Promise.all(
                races.map(async (race) => {
                    const raceDetail = await RaceDetail.findById(race.race_id);
                    return {
                        _id: race.race_id,
                        race_name: raceDetail.race_name,
                        race_description: raceDetail.race_description,
                    };
                })
            );
    
            const userFind = await User.find({team_id})

            const responseData = {
                error: false,
                message: "Payment proof updated.",
                data: {
                    team_id: team_id,
                    team_name: updateTeam.team_name,
                    line_id: updateTeam.line_id,
                    paymentProof: paymentFilePath,
                    members: userFind,
                    races: {...raceDetails[0]},
                },
            };

            return res.status(200).json(responseData)
        } else {
            return res.status(200).json({error: true, message: "Failed to update payment proof: "+updateTeam})
        }
    } catch(e) {
        return res.status(500).json({error: true, message: "Something error: "+e.message})
    }
}