import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    <Container maxWidth="md">
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, px: 3, py: 5 }}>
        
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
                      <img src={product.thumbnail} width={120} />
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
      </Paper>
    </Container>
  )
}

export default Home