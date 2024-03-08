const raceService = require('../race/raceService');
const User = require("../../models/User");
const Race = require("../../models/Race");
const RaceDetails = require("../../models/RaceDetail");

exports.registerUserToRace = async (req, res) => {
    const { race_id } = req.params;
    const { name, email, nim } = req.body;
    const ktm = req.file ? req.file.path : null;
  
    try {
      const race = await RaceDetails.findById(race_id);
      if (!race) {
        return res.status(200).json({ error: true, message: 'Race not found' })
      }
  
      let user = await User.findOne({ $or: [{ nim }, { email }] });
      const isRegistered = await Race.findOne({ race_id, user_id: user ? user._id : null });
      if (isRegistered) {
        return res.status(409).json({ error: true, message: 'User already joined the race' });
      }
  
      if (!user) {
        user = new User({ name, email, nim, ktm });
        await user.save();
      }
  
      const addToRace = new Race({ user_id: user._id, race_id });
      await addToRace.save();
  
      return res.status(200).json({
        error: false, 
        message: "Join successfully", 
        data: { race_id, race_name: race.race_name, user_id: user._id }
      });
  
    } catch (error) {
      console.error("Try-catch on registration", error);
      return res.status(500).json({ error: true, message: error.message });
    }
  };
  