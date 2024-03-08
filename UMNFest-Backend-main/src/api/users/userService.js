const User = require('../../models/User');
const Race = require('../../models/Race');
const RaceDetail = require('../../models/RaceDetail');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({error: false, users: users});
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    const races = await Race.find({ user_id: id });

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

    const responseData = {
      error: false,
      data: {
        user_id: user._id,
        name: user.name,
        email: user.email,
        races_joined: raceDetails,
      },
    };

    return res.status(200).json(responseData);
  } catch (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, nim } = req.body;
    const ktm = req.file ? req.file.path : null;

    const user = new User({
      name,
      email,
      nim,
      ktm: ktm.replace("public/", "")
    });

    await user.save();

    return res.status(201).json({ error: false, message: "User registered successfully", data: user });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send('User deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getUserByNIM = async (nim) => {
  const user = await User.findOne({nim});
  return user;
};