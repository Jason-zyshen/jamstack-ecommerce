import { gql } from "@apollo/client";
import client from "../lib/apollo-client"

async function fetchCollections() {
  const { data } = await client.query({
    query: gql`
      query Collections {
        collections {
          name
          products {
            name
            price
            images {
              url
            }
            categories {
              name
            }
          }
        }
      }
    `,
  })

  const collections = data.collections
  // console.log(collections)
  
  return Promise.resolve(collections)
}

export default fetchCollections