import AttachPermissions from "../../crm/employee/components/AttachPermissisons";
import CreatePermission from "../../crm/employee/components/CreatePermission";
import CreateRole from "../../crm/employee/components/CreateRole";
import { Avatar, Box, Button, Card, CardContent, Chip, Divider, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton, Stack, Typography } from "@mui/material";
import RuleRoundedIcon from '@mui/icons-material/RuleRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const ProductSummary = () => {
    return <Box sx={{ pt: 2 }}>
        <Card sx={{ p: 2 }}>
            <Typography gutterBottom variant="h6">Set Permissions</Typography>
            <Divider />
            <Grid container spacing={2} mt={1}>
                {[1, 2, 3].map((card, _) => {
                    return <Grid item xs={12} sm={6} lg={4}>
                        <Card>
                            <ListItem secondaryAction={<IconButton><MoreVertRoundedIcon /></IconButton>}>
                                <ListItemIcon>
                                    <Avatar src="https://avatar.iran.liara.run/public"></Avatar>
                                </ListItemIcon>
                                <ListItemText primary={"karthi"} secondary={'Department'}></ListItemText>
                            </ListItem>

                            <Divider />
                            <Box mt={1} />
                            <CardContent>
                                <Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque!</Typography>
                                <Box component={Stack} gap={2} direction={'row'} mt={2} flexWrap={'wrap'}>
                                    <Chip
                                       
                                        variant="outlined" size="small" icon={<LocalPhoneRoundedIcon
                                        />} label={<Typography fontSize={'0.7em'}> 91 7013140693</Typography>} />
                                    <Chip
                            
                                        variant="outlined" size="small" icon={<MailRoundedIcon
                                        />} label={<Typography fontSize={'0.7em'}>karthiktumala143@gmail.com</Typography>} />
                                    <Chip
                            
                                        variant="outlined" size="small" icon={<FmdGoodRoundedIcon
                                        />} label={<Typography fontSize={'0.7em'}>Hyderabad,Telangana</Typography>} />
                                </Box>
                                <Box component={Stack} direction={'row'} mt={2} gap={1}>

                                    <Button startIcon={<RuleRoundedIcon />} variant="outlined" fullWidth color="info">Permissions</Button>
                                    <Button startIcon={<DeleteRoundedIcon />} variant="outlined" fullWidth color="error">Delete</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                })}

                <Grid item xs={12} sm={6} lg={4}>
                    <Card>
                        <ListItem>
                            <ListItemIcon>
                                <Skeleton variant="rounded" width={40} height={40}></Skeleton>
                            </ListItemIcon>
                            <Stack width="100%" rowGap={1}>
                                <Skeleton variant="rectangular" height={10} width="100%"></Skeleton>
                                <Skeleton variant="rectangular" height={10} width="100%"></Skeleton>
                            </Stack>
                        </ListItem>
                    </Card>
                </Grid>

            </Grid>
        </Card>
        <AttachPermissions />
        <Stack rowGap={2} mt={2}>
            <CreatePermission />
            <CreateRole />
        </Stack>
    </Box>
}



export default ProductSummary