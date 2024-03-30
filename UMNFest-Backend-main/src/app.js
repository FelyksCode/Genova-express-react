require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const RaceDetail = require("./models/RaceDetail");
const fs = require("fs");

// Note: Nambah CORS
const cors = require("cors"); // Require CORS

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required");
}

const port = process.env.PORT || 3000; // default

// Penambahan, ntar origin nyesuain client-nya dari mana
app.use(cors({ origin: "http://localhost:3000" })); // Enable CORS for all routes

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

connectDB(MONGODB_URI).then(() => {
  firstStart();
});

app.get("/", (req, res) => {
  res.json({
    error: false,
    message: "UMNFest API",
    docs: "https://elements.getpostman.com/redirect?entityId=33191415-b1a4909c-0b6d-4c0b-a65c-ea0e640f9935&entityType=collection",
  });
});

const apiRoutes = require("./api/");
app.use("/", apiRoutes);

app.listen(port, () => {
  console.log(`UMNFest API Listening at http://localhost:${port}`);
});

function firstStart() {
  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }
  if (!fs.existsSync("public/uploads")) {
    fs.mkdirSync("public/uploads");
  }
  var publicFolders = ["ktm", "gallery", "news"];
  publicFolders.forEach((name) => {
    if (!fs.existsSync(`public/uploads/${name}`)) {
      fs.mkdirSync(`public/uploads/${name}`);
    }
  });
  RaceDetail.estimatedDocumentCount()
    .then((count) => {
      const raceNames = [
        "Unveiling",
        "E-Ulympic",
        "Ulympic",
        "U-Care",
        "Unify",
      ];
      const raceDescription = [
        "Lomba Unveiling adalah...",
        "Lomba E-ulympic adalah...",
        "Lomba Ulympic adalah...",
        "Lomba U-Care adalah...",
        "Lomba Unify adalah",
      ];
      if (count === 0 || count != raceNames.length) {
        var i = 0;
        raceNames.forEach((raceName) => {
          new RaceDetail({
            race_name: raceName,
            race_description: raceDescription[i],
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
}
