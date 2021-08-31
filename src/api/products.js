
import products from '../../content/products.json'

const handler = (req, res) => {
  console.log(req.query)
  const {
    name,
    p_min: minPrice,
    p_max: maxPrice,
    c: category,
    page,
    page_size: pageSize
  } = req.query
  
  res.status(200).json(products)
}

export default handler
