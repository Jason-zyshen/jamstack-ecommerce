/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
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

//https://api.spacex.land/graphql/
//https://api-us-east-1.hygraph.com/v2/cl8i28whi5f3z01t7h2h6g1i0/master