import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Product/Action'

const ProductTable = () => {
  const dispatch = useDispatch()
  const { products } = useSelector(store => store)
  console.log("product, ", products)
  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 9999999,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 100,
      stock: ""
    }

    dispatch(findProducts(data))

  }, [dispatch])


  return (
    <div className='p-5' >
      <Card className='mt-2'>
        <CardHeader title="All Product" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              < >
                <TableCell align='center'>ID</TableCell>
                <TableCell align='center'>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Catagori</TableCell>
                <TableCell align="left">Brand</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </>
            </TableHead>
            <TableBody>
              {products?.products?.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center"> <Avatar src={item.imageUrl} ></Avatar> </TableCell>
                  <TableCell component="th" scope="row"> {item.title} </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.brand}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left"> <Button>Delete</Button> </TableCell>

                </TableRow>

              ))}


            </TableBody>
          </Table>
        </TableContainer>
      </Card>


    </div>
  )
}

export default ProductTable
