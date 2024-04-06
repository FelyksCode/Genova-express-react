require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Race = require("./models/Race");
const RaceDetail = require("./models/RaceDetail");
const Admin = require("./models/Admin");
const Team = require("./models/Team")
const User = require("./models/User")
const fs = require("fs");
const bcrypt = require('bcrypt');
var cors = require('cors');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required");
}

const port = process.env.PORT || 3000; // default

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// e-ulympic: valo, dan ml
// ulympic: basket, futsal, badmin, volly
connectDB(MONGODB_URI).then(() => {
  firstStart();
});

app.get("/", (req, res) => {
  res.json({
    error: false,
    message: "UMNFest API",
    docs: "https://elements.getpostman.com/redirect?entityId=33191415-358fae32-39ac-4fbe-bfd2-56133f476d4c&entityType=collection",
  });
});

const apiRoutes = require("./api/");
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`UMNFest API Listening at http://localhost:${port}`);
});

async function firstStart() {
  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }
  if (!fs.existsSync("public/uploads")) {
    fs.mkdirSync("public/uploads");
  }
  var publicFolders = ["ktm", "gallery", "news", "proof"];
  publicFolders.forEach((name) => {
    if (!fs.existsSync(`public/uploads/${name}`)) {
      fs.mkdirSync(`public/uploads/${name}`);
    }
  });
  /**
   * e-ulympic: 
ml 6 ,max 32 team
valo 6, max 16 team

  *ulympic: 
badmin: (ganda campuran (2) , ganda putra (2)  tunggal putra (1), tunggal putri (1)) ,max 12 team/ 1 jenis
futsal (lagi nanya)
basket 7
volly 10
   */
  // await Team.collection.dropIndex("team_id_1")
  // const removeTeamIdIndex = async () => {
  //   try {
  //     await Team.collection.dropIndex('team_id_1');
  //     console.log('Index dropped successfully');
  //   } catch (error) {
  //     console.error('Error dropping index:', error.message);
  //   }
  // };
  // await removeTeamIdIndex()
  
  // await User.deleteMany()
  // await Team.deleteMany();
  //  await Race.deleteMany()
//  await RaceDetail.deleteMany()
  await RaceDetail.estimatedDocumentCount()
    .then((count) => {
      const raceNames = [
        "Unveiling",
        "E-Ulympic - Valorant",
        "E-Ulympic - Mobile Legends",
        "Ulympic - Badminton (Ganda Campuran)",
        "Ulympic - Badminton (Ganda Putra)",
        "Ulympic - Badminton (Tunggal Putra)",
        "Ulympic - Badminton (Tunggal Putri)",
        "Ulympic - Basket",
        "Ulympic - Futsal",
        "Ulympic - Volly",
        "U-Care",
        "Unify",
      ];
      const raceLimitTeams = [
        0,
        16,
        32,
        12,
        12,
        12,
        12,
        7,
        0,
        10,
        1
      ]
      const raceMemberCount = [
        0,
        6,
        6,
        2,
        2,
        1,
        1,
        0,
        10,
        14,
        6,
        0,
        0,
      ]
      if (count === 0 || count != raceNames.length) {
        var i = 0;
        raceNames.forEach((raceName) => {
          new RaceDetail({
            race_name: raceName,
            race_description: "Lomba "+ raceName,
            race_limit_teams: raceLimitTeams[i],
            race_members: raceMemberCount[i]
          })
            .save()
            .then(() => {
              console.log(`Added '${raceName}' into Race Details`);
            })
            .catch((err) => {
              console.log("Error adding race detail:", err);
            });
          i++;
        });
      }
    })
    .catch((err) => {
      console.log("Error checking race details count:", err);
    });

  Admin.estimatedDocumentCount().then((count) => {
    const adminList = [
      {
        email: "yarzcode@gmail.com",
        password: "HaloPassword!",
      },
      {
        email: "hehe@gmail.com",
        password: "howDoYouDo?",
      },
    ];
    const salt = bcrypt.genSaltSync(10);
    if (count == 0 || count < adminList) {
        adminList.forEach((user) => {
          const hash = bcrypt.hashSync(user.password, salt);
            new Admin({email: user.email, password: hash}).save()
            .then(() => {
                console.log(`${user.email} Added as admin!`)
            }).catch(e => {
                console.log(`${user.email} failed to add as admin!`)
            })
        })
    }
  });
}
