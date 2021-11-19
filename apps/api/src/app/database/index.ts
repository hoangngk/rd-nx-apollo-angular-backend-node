import { MongoClient } from 'mongodb';
import { Database } from '../libs/types';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/tinyhouse?retryWrites=true&w=majority`;

export const connectDb = async (): Promise<Database> => {
  const client = await MongoClient.connect(url);
  const db = client.db(process.env.DB_NAME);

  return {
    listings: db.collection('test_listings'),
  };
};
