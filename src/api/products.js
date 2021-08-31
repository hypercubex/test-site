
import products from '../../content/products.json'

const handler = (req, res) => {
  res.status(200).json(products)
}

export default handler
