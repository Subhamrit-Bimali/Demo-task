import { Schema, model } from "mongoose";

type MedicationHistory = {
  date: Date;
  description: String;
};

enum Status {
  "admitted",
  "discharged",
}

export type PatientType = {
  name: String;
  patientId: String;
  DOB: Date;
  status: String;
  medicationHistory: [MedicationHistory];
  enrolledDate: Date;
};

const patientSchema = new Schema<PatientType>(
  {
    name: { type: String, required: true },
    patientId: { type: String, required: true, unique: true },
    DOB: { type: Date },
    status: { type: String, enum: Status },
    medicationHistory: {
      type: [{ date: Date, description: String }],
      required: true,
    },
    enrolledDate: { type: Date },
  },
  { strict: true }
);

export const Patient = model<PatientType>("Patient", patientSchema);
