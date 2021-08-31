import { MenuItem, RadioGroup, Select, TextField } from "@material-ui/core"
import { GridOverlay, DataGrid } from '@mui/x-data-grid'
import { useState } from "react"
import { useForm } from "react-hook-form"

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'categories',
    headerName: 'Categories',
    width: 450,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: false,
  },
]

const EmptyView = () => (
  <GridOverlay style={{ height: 50 }}>
    <div>No Products to show</div>
  </GridOverlay>
)

const SearchPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState()
  const [name, setName] = useState()
  const [minPrice, setMinPrice] = useState()
  const [maxPrice, setMaxPrice] = useState()
  const [nextPage, setNextPage] = useState(1)

  const loadProducts = async (formData) => { }

  return (
    <div>
      <title>Search</title>
      <h1>Let's Search Something</h1>
      <div>
        <p>
          In this page, you should be able to search via the search form below
          There are exactly 100 items can be searched
        </p>
        <p>
          Each of them should belong to at least 1 of 4 categories
          here is a sample of a valid product:
        </p>
        <table style={{ marginLeft: 30 }}>
          {Object.entries({
            "id": 1100,
            "categories": ["Category 1", "Category 2"],
            "name": "Product 100",
            "image": "https://picsum.photos/400?image=530",
            "inStock": true,
            "price": 381
          }).map(([k, v]) => (
            <tr>
              <td style={{ paddingRight: 15 }}>{k}</td>
              <td>{Array.isArray(v) ? v.join(', ') : String(v)}</td>
            </tr>
          ))}
        </table>
        <p>
          Please help to write tests:
          <ol>
            <li>search results should match selected criteria, e.g. if we selected Category 4, all products listed in the result should have "Category 4" in the categories field</li>
            <li>check if any data are strange/unexpected</li>
            <li>you are encouraged to check if the API is </li>
          </ol>
        </p>
      </div>
      <div>
        <form
          data-testid='search-form'
          onSubmit={handleSubmit(loadProducts)}>
          <div><TextField type='number' placeholder='product ID' /></div>
          <div>
            <TextField type='number' placeholder='min price' />
            <TextField type='number' placeholder='max price' />
          </div>
          <div>
            <TextField label="Category" select style={{ width: 200 }}>
              {Array(4).fill(0).map((_, i) => {
                const categoryVal = `Category ${i + 1}`
                return <MenuItem
                  key={categoryVal}
                  value={categoryVal}>{categoryVal}</MenuItem>
              })}
            </TextField>
          </div>
        </form>
        <DataGrid
          components={{
            NoRowsOverlay: EmptyView,
          }}
          style={{ marginTop: 20 }}
          rows={products}
          columns={columns}
          pageSize={10}
        />
      </div>
    </div >
  )
}

export default SearchPage
