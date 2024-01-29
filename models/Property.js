const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  typeOfApartment: {
    type: String,
    required: true,
  },
  noOfRooms: {
    type: String,
    required: true,
  },
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
  totalPrice: {
    type: Number,
    required: true,
  },
  areaInSqFt: {
    type: Number,
    required: true,
  },
  annualizedReturn: {
    type: Number,
    required: true,
  },
  annualizedAppreciation: {
    type: Number,
    required: true,
  },
  projectGrossYield: {
    type: Number,
    required: true,
  },
  projectNetYield: {
    type: Number,
    required: true,
  },
  tokens: {
    type: Number,
    required: true,
  },
  tokenSymbol: {
    type: String,
    required: true,
  },
  preferredCurrency: {
    type: String,
    required: true,
  },
  typeOfFinancialReturn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Property", propertySchema);
