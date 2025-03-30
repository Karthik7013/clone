import { Card, Divider, List, ListSubheader, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const StatusBarGraph = () => {
    const theme = useTheme();
    const series = useSelector((state: RootState) => state.dashboard.barGraph.data);
    console.log(series, 'series123')
    const loading = useSelector((state: RootState) => state.dashboard.barGraph.loading)
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'bar', // No need for 'as const', ApexCharts already understands 'bar' as a valid type
            height: 350,
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: '',
            align: 'center', // Ensure it's 'center', 'left', or 'right'
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'inherit',
            },
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        },
        fill: {
            opacity: 1,
        },
        colors: [theme.palette.primary.main], // Custom bar color
    };

    return <Card>
        <List subheader={<ListSubheader component="div">Montly Renewals</ListSubheader>}>
            <Divider />
            <Box>
                <div id="chart">
                    <ReactApexChart options={options} series={series} type="bar" height={350} />
                </div>
            </Box>
        </List>
    </Card>
}


export default React.memo(StatusBarGraph);