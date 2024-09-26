import React, { useEffect } from 'react';
import { getOrders } from '../../State/Admin/Order/Action';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, AvatarGroup, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderView = () => {
    const dispatch = useDispatch();
    const { adminOrder } = useSelector(store => store);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    console.log("admin order: ", adminOrder);

    return (
        <div>
            <Card className='mt-2'>
                <CardHeader title="All Orders" />
                <TableContainer component={Paper} className="overflow-x-auto"> {/* Thêm lớp này */}
                    <Table className="min-w-full" aria-label="simple table">
                        <TableHead>
                            <TableRow className="bg-gray-200">
                                <TableCell align="center">Id</TableCell>
                                <TableCell align='left'>Image</TableCell>
                                <TableCell align='left'>Title</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item) => (
                                <TableRow key={item.id} className="hover:bg-gray-100">
                                    <TableCell align="center">{item.id}</TableCell>
                                    <TableCell align="left">
                                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                                            {item.orderItems.map((orderItem) => (
                                                <Avatar key={orderItem.product.id} src={orderItem.product.imageUrl} />
                                            ))}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {item.orderItems.map((orderItem) => (
                                            <p key={orderItem.product.id}>{orderItem.product.title}</p>
                                        ))}
                                    </TableCell>
                                    <TableCell align="left">{item.totalPrice}</TableCell>
                                    <TableCell align="left">
                                        <span className={`text-white px-5 py-2 rounded-full ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                                            item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                                                item.orderStatus === "PLACED" ? "bg-[#02B290]" :
                                                    item.orderStatus === "PENDING" ? "bg-gray-500" :
                                                        "bg-red-500"
                                            }`}>
                                            {item.orderStatus}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    );
}

export default OrderView;
