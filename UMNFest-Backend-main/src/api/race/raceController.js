const RaceDetails = require("../../models/RaceDetail");
const Race = require("../../models/Race");
const User = require("../../models/User");
const Team = require("../../models/Team");

exports.getAllRace = async (req, res) => {
  const race = await RaceDetails.find();
  try {
    if (!race) {
      return res.status(500).json({ error: true, message: "No data found" });
    }

    var raceResponses = [];
    await Promise.all(race.map(async (races) => {
      const countTeamJoined = await Race.countDocuments({ race_id: races._id })
      raceResponses.push({
        race_id: races._id,
        race_name: races.race_name,
        race_description: races.race_description,
        race_members: races.race_members,
        race_limit_teams: races.race_limit_teams,
        race_team_registered: countTeamJoined
      })
      return Promise.resolve(true);
    }))

    const response = {
      error: false,
      data: [...raceResponses]
    }
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: true, message: "Internal Server Error" });

  }
};

exports.getRaceByID = async (req, res) => {
  try {
    const race = await RaceDetails.findById({ _id: req.params.id });
    if (!race) {
      return res.status(404).json({ error: true, message: "Race not found" });
    }

    const races = await Race.find({ race_id: req.params.id });
    const teamsRegistered = await Promise.all(
      races.map(async (race) => {
        const teams = await Team.find({ _id: race.team_id });
        return teams; 
      })
    );

    const team_registered = [].concat(...teamsRegistered);


    var response = {
      error: false,
      message: "Successfully get details of the race",
      data: {
        race: {
          race_id: race._id,
          race_name: race.race_name,
          race_description: race.race_description,
          race_members: race.race_members,
          race_limit_teams: race.race_limit_teams,
        },
        team_registered: team_registered
      }
    }

    return res.status(200).json({ response });
  } catch (e) {
    return res.status(500).json({ error: true, message: e.message });
  }
};
