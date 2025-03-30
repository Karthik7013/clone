import { Box, Card, CardContent, Divider, List, ListSubheader } from '@mui/material'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ProductClaims = () => {
    const donutOptions: ApexCharts.ApexOptions = {
        chart: {
            type: 'donut' as const,
        },
        labels: ["L1", "L2", "L3", "L4"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%',
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
        legend: {
            position: 'right',
            floating: true,
            offsetY: 10,
            fontSize: '14px',
        },
    };
    const donutSeries = [1, 2, 5, 6]

    return (
        <Card>
            <List subheader={<ListSubheader component="div">Product Claims</ListSubheader>}>
                <Divider />
                <Box id="chart" maxHeight={350} component={CardContent}>
                    <ReactApexChart
                        options={donutOptions}
                        series={donutSeries}
                        type="donut"
                        height={250} />
                </Box>
            </List>
        </Card>
    )
}

export default ProductClaims