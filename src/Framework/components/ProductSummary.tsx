import AttachPermissions from "../../crm/employee/components/AttachPermissisons";
import CreatePermission from "../../crm/employee/components/CreatePermission";
import CreateRole from "../../crm/employee/components/CreateRole";
import { Box, Stack } from "@mui/material";


const ProductSummary = () => {
    return <Box sx={{ pt: 2 }} component='form'>
        <AttachPermissions />
        <Stack rowGap={2} mt={2}>
            <CreatePermission />
            <CreateRole />
        </Stack>
    </Box>
}



export default ProductSummary