import { connectToDatabase } from "./_connector";

function Error(errMessage = 'Oops something went wrong', errCode = 500) {
  this.errorMessage = errMessage;
  this.errorCode = errCode;
}

export default async (req, res) => {
  // const db = await connectToDatabase();

  if (req.body !== '' && !!req.body.link) {
    // const entry = await db.db('master').collection('links').insertOne({ link: req.body.link });
    // const shortUrl = `${process.env.VERCEL_URL}/r/${entry.insertedId}` ;
    // need a database to store the original url and and send that back.
    res.statusCode = 201;
    return res.json({ short_link: 'https://abc.com' });
  }

  res.statusCode = 409;
  res.json(new Error('No link found', 110001))
}

