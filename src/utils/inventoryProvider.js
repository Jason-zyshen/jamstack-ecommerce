import { gql } from "@apollo/client";
import client from "../lib/apollo-client"



/*
Inventory items should adhere to the following schema:
type Product {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
  brand: String
  sku: ID
}
*/

async function fetchInventory () {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          name
          price
          description
          images {
            url
          }
          categories{
            name
          }
          createdBy {
            name
          }
        }
      }
    `,
  })
  const inventory = data.products

  return Promise.resolve(inventory)
}

export {
  fetchInventory //, inventory as staticInventory
}