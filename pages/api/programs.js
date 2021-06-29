import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const programs = await db.collection("programs").find({}).limit(20).toArray();
  res.json(programs);
};
