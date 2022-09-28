import { gql } from "@apollo/client";
import client from "../lib/apollo-client"

async function fetchCategories() {
  const { data } = await client.query({
    query: gql`
      query Categories {
        categories {
          name
          products {
            name
            price
            images {
              url
            }
          }
        }
      }
    `,
  })
  const categories = data.categories
  // console.log(categories)
  
  return Promise.resolve(categories)
}

export default fetchCategories