
import { CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductTable from "./ProductTable"
import OrderTable from "./OrderTable"
import CreateProductForm from "./CreateProductForm"
import CustommerTable from "./CustommerTable"
import AdminDashboard from './AdminDashboard';



const menu = [
    { name: "Dashborad", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
    { name: "AddProduct", path: "/admin/product/create", icon: <DashboardIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (

        <Box
            sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid blue",
                height: "100%"
            }}
        >
            {/* {isLargeScreen && <Toolbar />} */}
            <>
                <List>
                    {menu.map((item, index) => <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {/* {index % 2 === 0 ? <ArchiveIcon /> : <MailOutlineIcon />} */}
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.name}</ListItemText>
                        </ListItemButton>
                    </ListItem>)}
                </List>
            </>

            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <div>
            <div className='flex h-[100vh]'>
                <CssBaseline />

                <div className='w-[15%] border border-r-gray-300 h-full'>
                    {drawer}
                </div>

                <div className='w-[85%]'>
                    <Routes>

                        <Route path='/' element={<AdminDashboard />}></Route>

                        <Route path='/product/create' element={<CreateProductForm />}></Route>

                        <Route path='/products' element={<ProductTable />}></Route>

                        <Route path='/orders' element={<OrderTable />}></Route>

                        <Route path='/customers' element={<CustommerTable />}></Route>

                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin
