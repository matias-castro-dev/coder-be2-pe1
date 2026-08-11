import mongoose from "mongoose";

// Modelo base de Event, campos mínimos
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  capacity: { type: Number, required: true },
});

export const Event = mongoose.model("Event", eventSchema);
