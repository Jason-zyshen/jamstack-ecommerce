import Head from 'next/head'
import { titleIfy , slugify } from '../utils/helpers'
import { DisplayMedium } from '../components'
import CartLink from '../components/CartLink'
import fetchCategories from '../utils/categoryProvider'


function Categories ({ categories = [] }) {
  return (
    <>
      <div className="w-full">
        {/* <CartLink /> */}
        <Head>
          <title>BeJewel Design - All Categories</title>
          <meta name="description" content={`BeJewel Design - All categories`} />
          <meta property="og:title" content="BeJewel Design - All Categories" key="title" />
        </Head>
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          <h1 className="text-5xl font-light">All categories</h1>
        </div>
        <div className="flex flex-col items-center">
          
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {
            categories.map((category, index) => (
              <DisplayMedium
                key={index}
                imageSrc={category.products[0].images[0].url}
                // subtitle={`${category.itemCount} items`}
                title={titleIfy(category.name)}
                link={`/category/${slugify(category.name)}`}
              />
            ))
          }
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const categories = await fetchCategories()
  // console.log(categories)
  return {
    props: {
      categories: categories
    },
    revalidate: 10
  }
}

export default Categories