import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

import {
  Container,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material"

const Home = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [paginationConfig, setPaginationConfig] = useState({
    total: 0,
    limit: 0,
    skip: 0,
  })

  useEffect(() => {
    fetchProducts(page - 1)
      .then(data => {
        setPaginationConfig({
          total: data.total,
          limit: data.limit,
          skip: data.skip,
        })
        setProducts(data.products)
      })
  }, [page])

  const handlePagination = (event, value) => {
    setPage(value)
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 3, px: 3, py: 5 }}>
        
        <Typography variant='h5' gutterBottom>
          Product List
        </Typography>

        {/* {JSON.stringify(products)} */}

        <TableContainer component={Paper}>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map(product => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>S/ {product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <img src={product.thumbnail} width={120} height={80} />
                    </TableCell>
                    <TableCell>
                      Actions
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>

          </Table>
        </TableContainer>

        <Pagination
          sx={{ mt: 2 }}
          count={Math.ceil(paginationConfig.total / paginationConfig.limit)}
          page={page}
          onChange={handlePagination}
        />
        Page: {page}
      </Paper>
    </Container>
  )
}

export default Home