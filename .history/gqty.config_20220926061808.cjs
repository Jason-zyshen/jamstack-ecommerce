/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
 import dotenv from 'dotenv'
 dotenv.config()

const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: process.env.SPACEX_URL,
    headers: {},
  },
  destination: "./gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
}

module.exports = config