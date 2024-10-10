



import { Box, Button, ButtonGroup, Divider, Grow, IconButton, Slide, Stack, Typography } from '@mui/material';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react'
import MessageBox from '../../../Framework/components/MessageBox';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import CloudDownloadRoundedIcon from '@mui/icons-material/CloudDownloadRounded';

// Define the type for your row data
interface CustomerRow {
    id: number;
    customer_i: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    dob: string;
    gender: string;
    address: string;
    state: string;
    city: string;
    pincode: string;
    country: string;
    marital_status: string;
    status: string;
    created_at: string;
    updated_at: string;
}
function ToolbarHeader(props: unknown) {
    return (
        <>
            <GridToolbarContainer sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 1 }}>
                <Box>
                    <Typography variant="h6">
                        Agent Management
                    </Typography>
                    <Typography variant='caption' color={'text.secondary'}>Manage All Agent Details and add new Agents</Typography>
                </Box>
                <Stack direction="row" alignItems='center' gap={2}>
                    <ButtonGroup>
                        <IconButton><CloudDownloadRoundedIcon fontSize='inherit' /></IconButton>
                        <IconButton><CachedRoundedIcon fontSize='inherit' /></IconButton>
                    </ButtonGroup>
                    <Button size='small' variant='contained'>New Agent</Button>
                </Stack>
            </GridToolbarContainer>
            <Divider />
        </>

    );
}


const CustomerManagement = () => {

    // Define columns
    const columns: GridColDef[] = [
        { field: 'agent_id', headerName: 'Agent ID', width: 120 },
        { field: 'first_name', headerName: 'First Name', width: 150 },
        { field: 'last_name', headerName: 'Last Name', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'dob', headerName: 'Date of Birth', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 100 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'state', headerName: 'State', width: 120 },
        { field: 'city', headerName: 'City', width: 120 },
        { field: 'pincode', headerName: 'Pincode', width: 100 },
        { field: 'country', headerName: 'Country', width: 150 },
        { field: 'examdate', headerName: 'Exam Date', width: 150 },
        { field: 'examscore', headerName: 'Exam Score', width: 120 },
        { field: 'isexampass', headerName: 'Exam Pass', width: 120 },
        { field: 'attemptsleft', headerName: 'Attempts Left', width: 150 },
        { field: 'hiredate', headerName: 'Hire Date', width: 150 },
        { field: 'license_number', headerName: 'License Number', width: 150 },
        { field: 'commission_rate', headerName: 'Commission Rate', width: 150 },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'created_at', headerName: 'Created At', width: 200 },
        { field: 'updated_at', headerName: 'Updated At', width: 200 },
    ];

    const rows = [
        { id: 1, agent_id: 'A001', first_name: 'John', last_name: 'Doe', phone: '1234567890', email: 'john@example.com', dob: '1990-01-01', gender: 'Male', address: '123 Main St', state: 'NY', city: 'New York', pincode: '10001', country: 'USA', examdate: '2023-01-01', examscore: 85, isexampass: 'Yes', attemptsleft: 2, hiredate: '2022-01-15', license_number: 'L001', commission_rate: 10, status: 'Active', created_at: '2023-01-01', updated_at: '2023-01-01' },
        { id: 2, agent_id: 'A002', first_name: 'Jane', last_name: 'Doe', phone: '0987654321', email: 'jane@example.com', dob: '1992-02-02', gender: 'Female', address: '456 Elm St', state: 'CA', city: 'Los Angeles', pincode: '90001', country: 'USA', examdate: '2023-01-02', examscore: 90, isexampass: 'Yes', attemptsleft: 1, hiredate: '2021-05-10', license_number: 'L002', commission_rate: 12, status: 'Active', created_at: '2023-01-02', updated_at: '2023-01-02' },
        { id: 3, agent_id: 'A003', first_name: 'Alice', last_name: 'Smith', phone: '3216549870', email: 'alice@example.com', dob: '1988-03-03', gender: 'Female', address: '789 Pine St', state: 'TX', city: 'Houston', pincode: '77001', country: 'USA', examdate: '2023-02-01', examscore: 75, isexampass: 'No', attemptsleft: 3, hiredate: '2020-07-12', license_number: 'L003', commission_rate: 8, status: 'Active', created_at: '2023-02-01', updated_at: '2023-02-01' },
        { id: 4, agent_id: 'A004', first_name: 'Bob', last_name: 'Johnson', phone: '4567891230', email: 'bob@example.com', dob: '1985-04-04', gender: 'Male', address: '321 Oak St', state: 'FL', city: 'Miami', pincode: '33101', country: 'USA', examdate: '2023-03-01', examscore: 92, isexampass: 'Yes', attemptsleft: 1, hiredate: '2019-03-15', license_number: 'L004', commission_rate: 15, status: 'Inactive', created_at: '2023-03-01', updated_at: '2023-03-01' },
        { id: 5, agent_id: 'A005', first_name: 'Charlie', last_name: 'Brown', phone: '6543219870', email: 'charlie@example.com', dob: '1995-05-05', gender: 'Male', address: '654 Maple St', state: 'IL', city: 'Chicago', pincode: '60601', country: 'USA', examdate: '2023-04-01', examscore: 88, isexampass: 'Yes', attemptsleft: 0, hiredate: '2022-10-22', license_number: 'L005', commission_rate: 10, status: 'Active', created_at: '2023-04-01', updated_at: '2023-04-01' },
        { id: 6, agent_id: 'A006', first_name: 'Diana', last_name: 'Prince', phone: '1231231234', email: 'diana@example.com', dob: '1992-06-06', gender: 'Female', address: '987 Birch St', state: 'WA', city: 'Seattle', pincode: '98101', country: 'USA', examdate: '2023-05-01', examscore: 95, isexampass: 'Yes', attemptsleft: 1, hiredate: '2021-11-10', license_number: 'L006', commission_rate: 11, status: 'Active', created_at: '2023-05-01', updated_at: '2023-05-01' },
        { id: 7, agent_id: 'A007', first_name: 'Eve', last_name: 'Adams', phone: '7890123456', email: 'eve@example.com', dob: '1980-07-07', gender: 'Female', address: '654 Cedar St', state: 'NV', city: 'Las Vegas', pincode: '89101', country: 'USA', examdate: '2023-06-01', examscore: 70, isexampass: 'No', attemptsleft: 2, hiredate: '2018-02-20', license_number: 'L007', commission_rate: 7, status: 'Active', created_at: '2023-06-01', updated_at: '2023-06-01' },
        { id: 8, agent_id: 'A008', first_name: 'Frank', last_name: 'Castle', phone: '2345678901', email: 'frank@example.com', dob: '1975-08-08', gender: 'Male', address: '321 Spruce St', state: 'CO', city: 'Denver', pincode: '80201', country: 'USA', examdate: '2023-07-01', examscore: 80, isexampass: 'Yes', attemptsleft: 1, hiredate: '2017-04-18', license_number: 'L008', commission_rate: 9, status: 'Active', created_at: '2023-07-01', updated_at: '2023-07-01' },
        { id: 9, agent_id: 'A009', first_name: 'Grace', last_name: 'Hopper', phone: '3456789012', email: 'grace@example.com', dob: '1991-09-09', gender: 'Female', address: '456 Fir St', state: 'MA', city: 'Boston', pincode: '02101', country: 'USA', examdate: '2023-08-01', examscore: 78, isexampass: 'Yes', attemptsleft: 0, hiredate: '2020-08-11', license_number: 'L009', commission_rate: 13, status: 'Active', created_at: '2023-08-01', updated_at: '2023-08-01' },
        { id: 10, agent_id: 'A010', first_name: 'Hank', last_name: 'Pym', phone: '4567890123', email: 'hank@example.com', dob: '1983-10-10', gender: 'Male', address: '789 Willow St', state: 'OR', city: 'Portland', pincode: '97201', country: 'USA', examdate: '2023-09-01', examscore: 88, isexampass: 'Yes', attemptsleft: 1, hiredate: '2021-12-01', license_number: 'L010', commission_rate: 14, status: 'Inactive', created_at: '2023-09-01', updated_at: '2023-09-01' },
    ];
    return (
        <>

            <MessageBox type='info'>
                No new records found !
            </MessageBox>


            <Box mt={1} sx={{ height: 470 }}>


                <DataGrid
                    sx={{ '--DataGrid-overlayHeight': '300px' }}
                    slots={{

                        toolbar: ToolbarHeader,
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </Box>

        </>

    )
}
export default CustomerManagement;

