import { connectDb } from '../app/database'
import { listings } from './listings'

const seed = async () => {
  try {
    console.log('[seed] is running... ')
    const db = await connectDb()

    for (const list of listings) {
      await db.listings.insertOne(list)
    }

    console.log('[seed] success ')
  } catch (error) {
    throw console.error(error);
  }
}

seed()
