import { connectToDatabase } from "./_connector";
console.log('Connecting to DB')
export default async (req, res) => {
  await connectToDatabase();
  console.log('Connected to DB successfully')
  res.status(200).json({ name: 'Connected to DB successfully. everything working fine!' })
}