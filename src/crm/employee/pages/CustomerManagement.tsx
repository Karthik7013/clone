// import { Box, Button, Divider, Grow, ListItem, ListItemText, Slide, Typography } from '@mui/material';
// import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
// import { GridColDef } from '@mui/x-data-grid';
// import React from 'react'
// import MessageBox from '../../../Framework/components/MessageBox';







// // Define the type for your row data
// interface CustomerRow {
//     id: number;
//     customer_i: string;
//     firstname: string;
//     lastname: string;
//     phone: string;
//     email: string;
//     dob: string;
//     gender: string;
//     address: string;
//     state: string;
//     city: string;
//     pincode: string;
//     country: string;
//     marital_status: string;
//     status: string;
//     created_at: string;
//     updated_at: string;
// }
// function ToolbarHeader(props: unknown) {
//     return (
//         <>
//             <GridToolbarContainer sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 1 }}>
//                 <Box>
//                     <Typography variant="h6">
//                         Customer Management
//                     </Typography>
//                     <Typography variant='caption' color={'text.secondary'}>Manage All Customer Details and add new Customer</Typography>
//                 </Box>
//                 <Box>
//                     <Button variant='contained' size='small'>New Customer</Button>
//                 </Box>
//             </GridToolbarContainer>
//             <Divider />
//         </>

//     );
// }


// const CustomerManagement = () => {
//     // Define columns with type
//     const columns: GridColDef[] = [
//         { field: 'customer_i', headerName: 'Customer ID', width: 150 },
//         { field: 'firstname', headerName: 'First Name', width: 150 },
//         { field: 'lastname', headerName: 'Last Name', width: 150 },
//         { field: 'phone', headerName: 'Phone', width: 150 },
//         { field: 'email', headerName: 'Email', width: 200 },
//         { field: 'dob', headerName: 'Date of Birth', width: 150 },
//         { field: 'gender', headerName: 'Gender', width: 100 },
//         { field: 'address', headerName: 'Address', width: 200 },
//         { field: 'state', headerName: 'State', width: 150 },
//         { field: 'city', headerName: 'City', width: 150 },
//         { field: 'pincode', headerName: 'Pincode', width: 100 },
//         { field: 'country', headerName: 'Country', width: 150 },
//         { field: 'marital_status', headerName: 'Marital Status', width: 150 },
//         { field: 'status', headerName: 'Status', width: 100 },
//         { field: 'created_at', headerName: 'Created At', width: 200 },
//         { field: 'updated_at', headerName: 'Updated At', width: 200 },
//     ];

//     const rows: CustomerRow[] = [
//         { id: 1, customer_i: 'C001', firstname: 'John', lastname: 'Doe', phone: '1234567890', email: 'john@example.com', dob: '1990-01-01', gender: 'Male', address: '123 Elm St', state: 'NY', city: 'New York', pincode: '10001', country: 'USA', marital_status: 'Single', status: 'Active', created_at: '2023-01-01', updated_at: '2023-01-01' },
//         { id: 2, customer_i: 'C002', firstname: 'Jane', lastname: 'Doe', phone: '1234567891', email: 'jane@example.com', dob: '1992-02-02', gender: 'Female', address: '124 Elm St', state: 'CA', city: 'Los Angeles', pincode: '90001', country: 'USA', marital_status: 'Married', status: 'Active', created_at: '2023-01-02', updated_at: '2023-01-02' },
//         { id: 3, customer_i: 'C003', firstname: 'Alice', lastname: 'Smith', phone: '1234567892', email: 'alice@example.com', dob: '1988-03-03', gender: 'Female', address: '125 Elm St', state: 'TX', city: 'Houston', pincode: '77001', country: 'USA', marital_status: 'Divorced', status: 'Inactive', created_at: '2023-01-03', updated_at: '2023-01-03' },
//         { id: 4, customer_i: 'C004', firstname: 'Bob', lastname: 'Brown', phone: '1234567893', email: 'bob@example.com', dob: '1985-04-04', gender: 'Male', address: '126 Elm St', state: 'FL', city: 'Miami', pincode: '33101', country: 'USA', marital_status: 'Single', status: 'Active', created_at: '2023-01-04', updated_at: '2023-01-04' },
//         { id: 5, customer_i: 'C005', firstname: 'Carol', lastname: 'White', phone: '1234567894', email: 'carol@example.com', dob: '1982-05-05', gender: 'Female', address: '127 Elm St', state: 'WA', city: 'Seattle', pincode: '98101', country: 'USA', marital_status: 'Married', status: 'Active', created_at: '2023-01-05', updated_at: '2023-01-05' },
//         { id: 6, customer_i: 'C006', firstname: 'David', lastname: 'Johnson', phone: '1234567895', email: 'david@example.com', dob: '1995-06-06', gender: 'Male', address: '128 Elm St', state: 'IL', city: 'Chicago', pincode: '60601', country: 'USA', marital_status: 'Single', status: 'Inactive', created_at: '2023-01-06', updated_at: '2023-01-06' },
//         { id: 7, customer_i: 'C007', firstname: 'Eva', lastname: 'Davis', phone: '1234567896', email: 'eva@example.com', dob: '1989-07-07', gender: 'Female', address: '129 Elm St', state: 'NV', city: 'Las Vegas', pincode: '89101', country: 'USA', marital_status: 'Divorced', status: 'Active', created_at: '2023-01-07', updated_at: '2023-01-07' },
//         { id: 8, customer_i: 'C008', firstname: 'Frank', lastname: 'Martinez', phone: '1234567897', email: 'frank@example.com', dob: '1991-08-08', gender: 'Male', address: '130 Elm St', state: 'OR', city: 'Portland', pincode: '97201', country: 'USA', marital_status: 'Single', status: 'Active', created_at: '2023-01-08', updated_at: '2023-01-08' },
//         { id: 9, customer_i: 'C009', firstname: 'Grace', lastname: 'Garcia', phone: '1234567898', email: 'grace@example.com', dob: '1993-09-09', gender: 'Female', address: '131 Elm St', state: 'CO', city: 'Denver', pincode: '80201', country: 'USA', marital_status: 'Married', status: 'Inactive', created_at: '2023-01-09', updated_at: '2023-01-09' },
//         { id: 10, customer_i: 'C010', firstname: 'Hank', lastname: 'Lee', phone: '1234567899', email: 'hank@example.com', dob: '1994-10-10', gender: 'Male', address: '132 Elm St', state: 'MA', city: 'Boston', pincode: '02101', country: 'USA', marital_status: 'Single', status: 'Active', created_at: '2023-01-10', updated_at: '2023-01-10' },
//     ];
//     return (
//         <>

//             <Box mt={3}>
//                 <ListItem disableGutters>
//                     <ListItemText
//                         primary={<Typography gutterBottom variant='h4'>Product Service</Typography>}
//                     />
//                 </ListItem>
//                 <Box>




//                     <MessageBox type='error'>
//                         Customer Details Not Found
//                     </MessageBox>


//                     <Box mt={1} sx={{ height: 470 }}>


//                         <DataGrid
//                             sx={{ '--DataGrid-overlayHeight': '300px' }}
//                             slots={{

//                                 toolbar: ToolbarHeader,
//                             }}
//                             rows={rows}
//                             columns={columns}
//                             pageSize={5}
//                             rowsPerPageOptions={[5, 10, 20]}
//                             checkboxSelection
//                         />
//                     </Box>
//                 </Box >
//             </Box>
//         </>

//     )
// }

// export default CustomerManagement
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import AgentTable from '../components/AgentTable';
import CustomerTable from '../components/CustomerTable';

const CustomerManagement = () => {
    return (
        <>
            <Box mt={3}>
                <ListItem disableGutters>
                    <ListItemText
                        primary={<Typography gutterBottom variant='h4'>Customer Management</Typography>}
                    />
                </ListItem>
                <Box>
                    <CustomerTable />
                </Box >
            </Box>
        </>
    )
}
export default CustomerManagement;

