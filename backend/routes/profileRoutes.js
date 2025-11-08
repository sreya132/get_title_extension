// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// POST /api/profiles
router.post("/", async (req, res) => {
  try {
    const { name, url, about, bio, location, followerCount, connectionCount } = req.body;

    if (!name || !url) {
      return res.status(400).json({ error: "Name and URL are required." });
    }

    const profile = await Profile.create({
      name,
      url,
      about,
      bio,
      location,
      followerCount,
      connectionCount,
    });

    res.status(201).json(profile);
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
