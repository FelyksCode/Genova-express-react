const Team = require("../../models/Team")
const Race = require("../../models/Race");
const RaceDetail = require("../../models/RaceDetail");
const Users = require("../../models/User")

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json({ error: false, teams: teams });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getTeamById = async (req, res) => {
    try {
        const { id } = req.params;

        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({ error: true, message: 'Team not found' });
        }

        const races = await Race.find({ team_id: id });

        const raceDetails = await Promise.all(
            races.map(async (race) => {
                const raceDetail = await RaceDetail.findById(race.race_id);
                return {
                    _id: id,
                    race_name: raceDetail.race_name,
                    race_description: raceDetail.race_description,
                };
            })
        );

        const userFind = await Users.find({team_id: id})

        const responseData = {
            error: false,
            data: {
                team_id: team._id,
                team_name: team.team_name,
                members: userFind,
                line_id: team.line_id,
                races: {...raceDetails[0]},
            },
        };

        return res.status(200).json(responseData);
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message });
    }
};

exports.createTeam = async (req, res) => {
    try {
        const { team_name, line_id } = req.body;
        const paymentProof = req.file ? req.file.path.replace("public/", "") : null;

        const team = new Team({
            team_name,
            line_id,
            paymentProof
        });

        await team.save();

        return res.status(201).json({ error: false, message: "Team registered successfully", data: team });
    } catch (error) {
        return res.status(500).json({ error: true, message: error.message });
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body);
        if (!team) {
            return res.status(404).send('Team not found');
        }
        res.json(team);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) {
            return res.status(404).send('Team not found');
        }
        res.send('Team deleted');
    } catch (err) {
        res.status(500).send(err.message);
    }
};


exports.getTeamByLineId = async (lineId) => {
    const team = await Team.findOne({ line_id: lineId });
    return team;
};
