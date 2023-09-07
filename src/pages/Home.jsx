import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
  }, [])

  return (
    <Container maxWidth="md">
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, px: 3, py: 5 }}>
        
        <Typography variant='h5' gutterBottom>
          Product List
        </Typography>

        {JSON.stringify(products)}

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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>iPhone 9</TableCell>
                <TableCell>S/ 549.00</TableCell>
                <TableCell>94</TableCell>
                <TableCell>Smarthphones</TableCell>
                <TableCell>
                  <img src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} width={120} />
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>
    </Container>
  )
}

export default Home