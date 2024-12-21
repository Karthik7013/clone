import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getCustomerStats } from "../../../redux/slice/dashboardSlice";
import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Divider, Grid, Icon, IconButton, ListItem, ListItemAvatar, ListItemText, Skeleton, Stack, Typography } from "@mui/material";
import { DeleteOutline, MoreHorizOutlined, Forward5 } from '@mui/icons-material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useTheme } from "@mui/material";

const CustomerStats = () => {
    const dispatch: AppDispatch = useDispatch()
    const loading = useSelector((state: RootState) => state.dashboard.stats.loading);
    const customerStats = useSelector((state: RootState) => state.dashboard.stats.data);
    const theme = useTheme()
    console.log('customer Stats')

    useEffect(() => {
        dispatch(getCustomerStats())
    }, [dispatch])
    return <Box>
        {loading ?
            <Stack direction="row" flexWrap='wrap' gap={2}>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <Skeleton variant='circular' width='30px' height='30px' />
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={"Active Policies"}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Skeleton variant='rectangular' width='50px' />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Skeleton variant='rectangular' width="100px"></Skeleton>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <Skeleton variant='circular' width='30px' height='30px' />
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={"Claims"}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Skeleton variant='rectangular' width='50px' />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Skeleton variant='rectangular' width="100px"></Skeleton>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <Skeleton variant='circular' width='30px' height='30px' />
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={"Renewal"}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Skeleton variant='rectangular' width='50px' />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Skeleton variant='rectangular' width="100px"></Skeleton>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <Skeleton variant='circular' width='30px' height='30px' />
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={"Register"}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Skeleton variant='rectangular' width='50px' />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Skeleton variant='rectangular' width="100px"></Skeleton>
                    </CardActions>
                </Card>
            </Stack>
            :
            <Stack direction="row" flexWrap='wrap' gap={2}>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <MoreHorizOutlined />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Active Policies'}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography color="success.light" variant='h4'>{customerStats?.activePolicies.count}</Typography>
                        <Chip size='small' label={<Typography variant='overline' >{customerStats?.activePolicies.percentage}%</Typography>} />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <MoreHorizOutlined />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Claims'}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography color="success.light" variant='h4'>{customerStats?.claimPolicies.count}</Typography>
                        <Chip size='small' label={<Typography variant='overline' >{customerStats?.claimPolicies.percentage}%</Typography>} />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <MoreHorizOutlined />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Renewal'}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography color="success.light" variant='h4'>{customerStats?.renewalPolicies.count}</Typography>
                        <Chip size='small' label={<Typography variant='overline' >{customerStats?.renewalPolicies.percentage}%</Typography>} />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                    </CardActions>
                </Card>
                <Card sx={{ flexGrow: 1 }}>
                    <ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <MoreHorizOutlined />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                                <Icon fontSize='small' color='inherit'>
                                    flash_on
                                </Icon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Register'}
                        />
                    </ListItem>
                    <CardContent sx={{ pt: 0 }}>
                        <Typography color="success.light" variant='h4'>{customerStats?.registeredClaimPolicies.count}</Typography>
                        <Chip size='small' label={<Typography variant='overline' >{customerStats?.registeredClaimPolicies.percentage}%</Typography>} />
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />}>View Report</Button>
                    </CardActions>
                </Card>
            </Stack>}
    </Box>
}


export default React.memo(CustomerStats);