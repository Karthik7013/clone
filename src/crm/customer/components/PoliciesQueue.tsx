import { Button, Card, CardMedia, Chip, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from "@mui/material"
import React, { useEffect } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getCustomerApplicationQueue } from "../../../redux/slice/dashboardSlice";
import { Link } from "react-router-dom";
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';

import loanLogo from "../../../assets/navAssets/Loan.svg";
import healthLogo from "../../../assets/navAssets/Health.svg";
import carLogo from "../../../assets/navAssets/car.svg";
import travelLogo from "../../../assets/navAssets/plane.svg";
import commercialLogo from "../../../assets/navAssets/commercial.svg"
import bikeLogo from "../../../assets/navAssets/Bike.svg";
import giftBox from '../../../assets/spark.svg';
const PoliciesQueue = () => {
    const dispatch: AppDispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.dashboard.applicationQueue.loading);
    const applications = useSelector((state: RootState) => state.dashboard.applicationQueue.data)
    useEffect(() => {
        if (!applications.length && !loading) dispatch(getCustomerApplicationQueue())
    }, [])

    const refreshApplications = () => dispatch(getCustomerApplicationQueue())

    return <Card>
        {
            <List
                subheader={
                    <ListSubheader>
                        <ListItem disableGutters
                            secondaryAction={
                                <IconButton onClick={refreshApplications} size='small' title='refresh' color='primary'>
                                    <CachedRoundedIcon fontSize='inherit' />
                                </IconButton>
                            }>
                            <ListItemText
                                primary="Policy Queue"
                            />
                        </ListItem>
                    </ListSubheader>
                }
            >
                {loading && <LinearProgress />}
                <Divider />

                {applications.map((app: any, _: number) => {
                    return <React.Fragment key={_}>
                        <ListItem alignItems="flex-start" secondaryAction={
                            <Button
                                component={Link}
                                to={app?.redirect} // Pass to prop to the Link component
                                endIcon={<ArrowForwardIosRoundedIcon />}
                            >
                                Resume
                            </Button>
                        }>
                            <ListItemAvatar>
                                <CardMedia
                                    component="img"
                                    sx={{ borderRadius: '0.4em', mr: 2, width: { xs: 16, md: 32 } }}
                                    image={carLogo}
                                    alt=""
                                />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <>
                                    <Typography variant="body2" component='span' mr={2}>{app.product_type}</Typography>

                                </>
                            }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            sx={{ color: 'text.primary', display: 'inline' }}
                                        >
                                            Application ID:
                                        </Typography>
                                        {" "}{app?.application_id}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                })}
            </List>}
    </Card>
}

export default React.memo(PoliciesQueue);