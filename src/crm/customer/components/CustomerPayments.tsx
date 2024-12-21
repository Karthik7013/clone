import { Accordion, AccordionDetails, AccordionSummary, alpha, Button, Card, CardActions, Chip, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { getCustomerPayments } from '../../../redux/slice/dashboardSlice';
const CustomerPayments = () => {
    const theme = useTheme();
    const [refresh, setRefresh] = useState<Boolean>(false);
    const myPayments = useSelector((state: RootState) => state.dashboard.myPayments.data);
    const loading = useSelector((state: RootState) => state.dashboard.myPayments.loading);
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(getCustomerPayments())
    }, [refresh])

    const iconvariant = {
        completed: {
            icon: <CheckCircleRoundedIcon fontSize='inherit' />,
            variant: 'success'
        },
        pending: {
            variant: 'warning',
            icon: <QueryBuilderIcon fontSize="inherit" />
        },
        failed: {
            variant: 'error',
            icon: <CancelRoundedIcon fontSize='inherit' />
        }
    }


    return (<Card>
        <List
            subheader={
                <ListSubheader>
                    <ListItem disableGutters
                        secondaryAction={
                            <IconButton onClick={() => setRefresh((prev) => !prev)} size='small' title='refresh' color='primary'>
                                <CachedRoundedIcon fontSize='inherit' />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary="Payments"
                        />
                    </ListItem>
                </ListSubheader>
            }
        >
            <Divider />
            {loading && <LinearProgress />}
            {myPayments.map((payment, index: number) =>

                <Accordion key={index} >
                    <AccordionSummary>
                        <ListItem disableGutters disablePadding
                            secondaryAction={<Chip size="small" icon={iconvariant[payment.status].icon} variant="outlined" color={iconvariant[payment.status].variant} label={payment.status} />}
                            alignItems="flex-start">
                            <ListItemAvatar>
                                <DescriptionIcon />
                            </ListItemAvatar>
                            <ListItemText
                                primary={payment.transaction_id}
                                secondary={
                                    <React.Fragment>
                                        {payment?.created_at?.split('T')[0]}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>


            )}

        </List>
        {/* <Divider />
        <CardActions>
            <Button variant="contained" size="small">more</Button>
        </CardActions> */}
    </Card>
    )
}

export default CustomerPayments