const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
const Property = require("./models/Property");
const Investor = require("./models/Investor");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  dbName: "properties",
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submitProperty", async (req, res) => {
  console.log("Hit");
  const newProperty = new Property(req.body);
  await newProperty.save(); // add email functionality
  res.json({ message: "Property submitted successfully" });
});

app.post("/submitUser", async (req, res) => {
  console.log("Hit submit user");
  const newInvestor = new Investor(req.body);
  await newInvestor.save();
  res.json({ message: "User Added Successfully" });
});

app.get("/getProperties", async (req, res) => {
  console.log("Hit Get");
  const properties = await Property.find({});
  res.json({ properties });
});

app.listen(PORT, () => {
  console.log(`App is running at PORT ${PORT}`);
});
