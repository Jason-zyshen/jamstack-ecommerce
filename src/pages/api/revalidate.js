// Use host + /api/revalidate?secret=&path= to manually re-generate single page.

export default async function handler(req, res) {
    if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    try {
      const path = req.query.path
      console.log('revalidate: ' + path)
      await res.revalidate(path)
      return res.json({ revalidated: true })
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }
