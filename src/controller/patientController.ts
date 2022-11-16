import { Patient } from "../model/patient";
import { PatientType } from "../model/patient";
async function getPatients() {
  try {
    const patients = await Patient.find({});
    return patients;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}

async function getPatient(patientId: String) {
  try {
    const patient = await Patient.findOne({ patientId });
    return patient;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}

async function createPatient(patientData: PatientType) {
  try {
    const patients = await Patient.create(patientData);
    return patients;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}

async function deletePatient(patientId: String) {
  try {
    const patient = await Patient.deleteOne({ patientId });
    if (!patient.deletedCount) {
      throw new Error("Patient Id not found");
    }
    return patient;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}

async function updatePatient(patientId: String, patientData: PatientType) {
  try {
    const patient = await Patient.findOneAndUpdate(
      { patientId: patientId },
      { $set: { ...patientData } },
      { new: true }
    );
    if (!patient?._id) {
      throw new Error("Patient Id not found");
    }
    return patient;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  getPatients,
  createPatient,
  getPatient,
  deletePatient,
  updatePatient,
};
