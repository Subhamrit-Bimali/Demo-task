import express, { Request, Response } from "express";
const {
  getPatients,
  createPatient,
  deletePatient,
  updatePatient,
  getPatient,
} = require("./controller/patientController");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("<h1>Demo Task CRUD API</h1>");
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ response: err.message });
  }
});

router.get("/api/get-patients", async (req: Request, res: Response) => {
  try {
    const data = await getPatients();
    res.status(200).json({ response: data });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ response: err.message });
  }
});

router.post("/api/create-patient", async (req: Request, res: Response) => {
  try {
    const data = await createPatient(req.body);
    res.status(200).json({
      response: { message: "Patient created Successfully", data: data },
    });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ response: err.message });
  }
});
router.delete(
  "/api/delete-patient/:patientId",
  async (req: Request, res: Response) => {
    try {
      const data = await deletePatient(req.params.patientId);
      res.status(200).json({
        response: { message: "Patient deleted Successfully", data: data },
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({ response: err.message });
    }
  }
);
router.put(
  "/api/update-patient/:patientId",
  async (req: Request, res: Response) => {
    try {
      const patientData = req.body;

      const { patientId } = req.params;
      console.log(patientData, patientId, "asdasdasd");
      const data = await updatePatient(patientId, patientData);
      res.status(200).json({
        response: { message: "Patient updated Successfully", data: data },
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({ response: err.message });
    }
  }
);
router.get("/api/get-patient", async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const { patientId } = req.query;
    const data = await getPatient(patientId);
    res.status(200).json({
      response: data,
    });
  } catch (err: any) {
    console.log(err);
    res.status(400).json({ response: err.message });
  }
});

export { router };
