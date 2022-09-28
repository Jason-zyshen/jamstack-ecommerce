import '../styles/globals.css'
import Layout from '../layouts/layout'
import fetchCategories from '../utils/categoryProvider'
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

function Ecommerce({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}

Ecommerce.getInitialProps = async () => {
  const fetchData = await fetchCategories()
  const categories = fetchData.map(c => c.name)
  return {
    categories
  }
}

export default Ecommerce