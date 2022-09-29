import { getStaticPaths as getCategoriesPaths } from '../category/[name]'
// import { getStaticPaths as getProductsPaths } from '../product'

export default async function handler(req, res) {
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    try {
      const categoriesPaths = await getCategoriesPaths()
      const revalidateCategoriesPaths = categoriesPaths.map((path) =>
          res.unstable_revalidate(`/category/${path.params.slug}`)
      );

      // run revalidation in parallel
      await Promise.all([res.unstable_revalidate('/category/'), ...revalidateCategoriesPaths]);

      // await res.revalidate('/category/t-shirt')
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }