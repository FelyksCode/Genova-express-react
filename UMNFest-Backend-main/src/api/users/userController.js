const User = require("../../models/User");
const Race = require("../../models/Race");
const RaceDetails = require("../../models/RaceDetail");
const Team = require("../../models/Team");

exports.registerUsersToRace = async (req, res) => {
  const { team_name, line_id, users } = req.body;
  const race_id = req.params.race_id;
  try {
    const race = await RaceDetails.findById(race_id);
    if (!race) {
      return res.status(404).json({ error: true, message: 'Race not found' });
    }

    if(users.length != race.race_members) {
      return res.status(200).json({ error: true, message: 'Wrong members length, must be '+race.race_members });
    }

    const raceLength = await Race.countDocuments({race_id: race_id})
    if(raceLength >= race.race_limit_teams) {
      return res.status(200).json({ error: true, message: 'Race closed, already '+raceLength+' teams.' });
    }

    var i =0;

    for (const userData of users) {
      const { email, name, nim } = userData;
      let user = await User.findOne({ $or: [{ nim }, { email }] });
      if(req.files[`users[${i}][ktm]`] == undefined) {
        return res.status(200).json({
          error: true,
          message: `Users ${name} has no KTM file.`,
        });
      }
      if (user && user.team_id != "") {
          return res.status(409).json({ error: true, message: `User already register some race: ${user.name} (Cannot register anything more because already register some race)` });
      }
      i++;
    }


    let team = await Team.findOne({ team_name });
    if (!team) {
      team = new Team({ team_name, line_id });
      try {
        await team.save();
      } catch (error) {
        return res.status(500).json({
          error: true,
          message: error.message,
        });
      }
    } else {
      return res.status(200).json({
        error: true,
        message: "Team Name is already registered, use another.",
      });
    }
    

    var i = 0;
    for (const userData of users) {
      const { name, email, nim, game_id } = userData;
      const ktmPath = req.files[`users[${i}][ktm]`][0].path;
      let user = await User.findOne({ $or: [{ nim }, { email }] });

      if (!user) {
        user = new User({ name, email, nim, ktm: ktmPath, team_id: team._id, game_id: game_id });
        await user.save();
      }

      i++
    }

    const addToRace = new Race({ team_id: team._id, race_id });
    await addToRace.save();

    return res.status(200).json({
      error: false,
      message: "All users have been successfully registered to the race and team.",
      data: { race: {race_id, race_name: race.race_name}, team: {team_id: team._id, team_name: team.team_name, team_line_id: team.line_id}, members: users },
    });

  } catch (error) {
    console.error("Error during registration process", error);
    return res.status(500).json({ error: true, message: error.message });
  }
};

