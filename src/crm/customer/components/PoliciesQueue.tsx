import { Button, Card, CardMedia, Chip, Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from "@mui/material"
import React, { useEffect } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getCustomerApplicationQueue } from "../../../redux/slice/dashboardSlice";
import { Link } from "react-router-dom";

const PoliciesQueue = () => {
    const dispatch: AppDispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.dashboard.applicationQueue.loading);
    const applications = useSelector((state: RootState) => state.dashboard.applicationQueue.data) || []
    console.log(applications)

    useEffect(() => {
        dispatch(getCustomerApplicationQueue())
    }, [dispatch])


    return <Card>
        {!loading && <List
            subheader={
                <ListSubheader component="div">
                    Policy Queue
                </ListSubheader>
            }
        >
            <Divider />
            {applications.map((app, _) => {
                return <React.Fragment key={_}>
                    <ListItem alignItems="flex-start" secondaryAction={
                        <Button LinkComponent={Link} to={app?.redirect} endIcon={<ArrowForwardIosRoundedIcon />}>Resume</Button>
                    }>
                        <ListItemAvatar>
                            <CardMedia
                                component="img"
                                sx={{ borderRadius: '0.4em', mr: 2, width: { xs: 40, md: 60 } }}
                                image={'https://upload.wikimedia.org/wikipedia/commons/9/90/Care_health_insurance_logo.png'}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={
                            <>
                                <Typography variant="body2" component='span' mr={2}>Gowri Shankar</Typography>
                                <Chip size="small" color="primary" variant="outlined" label="General Life Insurance"></Chip>
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