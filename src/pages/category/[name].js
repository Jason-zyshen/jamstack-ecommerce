import Head from 'next/head'
import ListItem from '../../components/ListItem'
import { titleIfy, slugify } from '../../utils/helpers'
import fetchCategories from '../../utils/categoryProvider'
import inventoryForCategory from '../../utils/inventoryForCategory'
import CartLink from '../../components/CartLink'

const Category = (props) => {
  const { inventory, title } = props
  return (
    <>
      {/* <CartLink /> */}
      <Head>
        <title>BeJewel Design - {title}</title>
        <meta name="description" content={`BeJewel Design - ${title}`} />
        <meta property="og:title" content={`BeJewel Design - ${title}`} key="title" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="max-w-fw flex flex-col w-full">
          <div className="pt-4 sm:pt-10 pb-8">
            <h1 className="text-5xl font-light">{titleIfy(title)}</h1>
          </div>

          <div>
            <div className="flex flex-1 flex-wrap flex-row">
              {
                inventory.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      link={`/product/${slugify(item.name)}`}
                      title={item.name}
                      price={item.price}
                      imageSrc={item.images[0].url}
                    />
                  )
                })
              }
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const categories = await fetchCategories()
  // console.log(categories)
  const paths = categories.map(category => {
    return { params: { name: slugify(category.name) }}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  // console.log(params.name)
  const category = params.name.replace(/-/g," ")
  const categories = await fetchCategories()
  const inventory = categories.find(item => slugify(item.name) === slugify(category)).products
  // console.log(inventory)
  return {
    props: {
      inventory,
      title: category
    },
    revalidate: 10
  }
}

export default Category