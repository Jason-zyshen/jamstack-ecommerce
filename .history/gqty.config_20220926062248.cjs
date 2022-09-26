/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
 import dotenv from 'dotenv'
 dotenv.config()

const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "https://api.spacex.land/graphql/",
    headers: {},
  },
  destination: "./gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
}

module.exports = config