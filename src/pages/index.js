import Head from 'next/head'
import { DisplaySmall, DisplayMedium } from '../components'
import DisplayLarge from '../components/heroComponents/DisplayLarge'
import { titleIfy, slugify } from '../utils/helpers'
import fetchCollections from '../utils/collectionProvider'
import CartLink from '../components/CartLink'

const Home = ({ collections = []}) => {
  const banner = collections.find(item => item.name === 'Banner').products
  const trending = collections.find(item => item.name === 'Trending').products
  // console.log(trending)

  return (
    <>
      {/* <CartLink /> */}
      <div className="w-full">
        <Head>
          <title>BeJewel Design</title>
          <meta name="description" content="BeJewel Design Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js." />
          <meta property="og:title" content="BeJewel Design" key="title" />
        </Head>
        <DisplayLarge
          imageSrc={banner[0].images[0].url}
          title={banner[0].name}
          link={`/product/${slugify(banner[0].name)}`}
          price={banner[0].price}
          category={banner[0].categories[0].name}
        />
      </div>
      <div className="
        lg:my-8 lg:grid-cols-2
        grid-cols-1
        grid gap-4 my-4 
      ">
      {
        banner.slice(1,3).map((item) => {
          return (
            <DisplayMedium
              imageSrc={item.images[0].url}
              title={titleIfy(item.name)}
              link={`/product/${slugify(item.name)}`}
            />
          )
        })
      }
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">Find the perfect piece or accessory to finish off your favorite room in the house.</p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
      {
        trending.slice(0,4).map((item) => {
          return (
            <DisplaySmall
              imageSrc={item.images[0].url}
              title={titleIfy(item.name)}
              link={`/product/${slugify(item.name)}`}
            />
          )
        })
      }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const collections = await fetchCollections()
  // console.log(collections)
  
  return {
    props: {
      collections: collections,
    }
  }
}

export default Home