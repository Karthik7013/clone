import { Accordion, AccordionDetails, AccordionSummary, alpha, Button, Card, CardActions, CardContent, Chip, Divider, IconButton, LinearProgress, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography, useTheme } from '@mui/material'
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
    console.log(myPayments)
    const loading = useSelector((state: RootState) => state.dashboard.myPayments.loading);
    const dispatch: AppDispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getCustomerPayments())
    // }, [refresh])
    const refreshCustomerPayments = () => dispatch(getCustomerPayments())
    useEffect(() => {
        if (myPayments.length === 0 && !loading) { dispatch(getCustomerPayments()) }
    }, [])

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
                            <IconButton onClick={refreshCustomerPayments} size='small' title='refresh' color='primary'>
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
            <CardContent>
                {myPayments.map((payment, index: number) =>
                    <Card key={index} sx={{ mb: 1 }}>

                        <Accordion key={index} sx={{ width: '100%' }}>
                            <AccordionSummary>
                                <ListItem disableGutters disablePadding
                                    secondaryAction={<Chip size="small" icon={iconvariant[payment.status].icon} variant="outlined" color={iconvariant[payment.status].variant} label={payment.status} />}
                                    alignItems="flex-start">
                                    <ListItemAvatar>
                                        <DescriptionIcon />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={payment.product_type}
                                        // primary={payment.transaction_id}
                                        secondary={
                                            <React.Fragment>
                                                <Typography variant='caption'>
                                                    {'Transaction ID : ' + payment.transaction_id}
                                                </Typography>

                                                <Typography variant='caption' ml={3}>
                                                    {'Date : ' + payment?.created_at?.split('T')[0]}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Divider />
                                <Typography variant='caption'>Payment Method : <b style={{ fontStyle: 'italic' }}>{payment?.payment_method}</b></Typography>
                                <Typography ml={5} variant='caption'>Payment Amount : <Typography fontWeight={600} variant='caption' component='a' color='success.main'>{payment.amount}</Typography></Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Card>
                )}
            </CardContent>
        </List>

    </Card>
    )
}

export default CustomerPayments