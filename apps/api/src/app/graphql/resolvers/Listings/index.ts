import { IResolvers } from '@graphql-tools/utils'
import { ObjectId } from 'mongodb'
import { Database, Listing } from '../../../libs/types'

export const listingsResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray()
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      })

      if (!deleteRes.value) {
        throw new Error('Failed to delete listing')
      }

      return deleteRes.value
    },
  },
  Listing: {
    id: (listing: Listing) => listing._id.toString(),
  },
}
