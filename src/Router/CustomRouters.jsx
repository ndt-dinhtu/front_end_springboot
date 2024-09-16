import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navigation from "../customer/components/Navigation/Nagivation"
import HomePage from "../customer/pages/HomePage/HomePage"
import Cart from "../customer/components/Cart/Cart"
import Product from "../customer/components/Product/Product"
import Footer from "../customer/components/Footer/Footer"
import ProductDetails from "../customer/components/ProductDetails/ProductDetails"
import Checkout from "../customer/components/Checkout/Checkout"
import Order from "../customer/components/Order/Order"
import OrderDetails from "../customer/components/Order/OrderDetails"
const CustomRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThre' element={< Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />} ></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />} ></Route>
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomRouters
