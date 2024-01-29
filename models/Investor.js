const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  tokenSymbol: {
    type: String,
    required: true,
  },
  noOfTokens: {
    type: Number,
    required: true,
  },
  preferredCurrency: {
    type: String,
    required: true,
  },
  propertyId: {
    type: mongoose.Schema.ObjectId,
  },
});

module.exports = mongoose.model("Investor", investorSchema);
