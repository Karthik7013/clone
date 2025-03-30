import { Box, Button, Card, CardContent, Collapse, Divider, Grid, IconButton, List, ListItem, ListItemText, ListSubheader, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';

import PoliciesQueue from '../components/PoliciesQueue';
import CustomerStats from '../components/CustomerStats';
import ProductClaims from '../components/ProductClaims';
import StatusBarGraph from '../components/StatusBarGraph';





const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box mt={3}>
      <ListItem
        disableGutters
        secondaryAction={
          <>
            <Collapse in={!isMobile} orientation='horizontal'>
              <Stack direction="row" gap={1}>
                <Button size="small" variant="outlined" startIcon={<FilterListRoundedIcon />}>
                  Filter
                </Button>
                <Button size="small" variant="outlined" startIcon={<FileUploadRoundedIcon />}>
                  Export
                </Button>
              </Stack>
            </Collapse>
          </>
        }
      >
        <ListItemText primary={<Typography gutterBottom variant="h4">Overview</Typography>} />
      </ListItem>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <CustomerStats />
        </Grid>

        <Grid item xs={12} md={7}>
          <StatusBarGraph />
        </Grid>

        <Grid item xs={12} md={7}>
          <PoliciesQueue />
        </Grid>
        <Grid item xs={12} md={5}>
          <ProductClaims />
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Home);
