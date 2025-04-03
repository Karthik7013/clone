import { Card, Divider, List, ListSubheader, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const StatusBarGraph = () => {
    const [eventData, setEventData] = useState([{ "name": "Sales", "data": [] }]);
    const theme = useTheme();

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

    useEffect(() => {
        const eventSource = new EventSource(`https://clone-api.onrender.com/event`);
        eventSource.onmessage = (event) => {
            setEventData(JSON.parse(event.data))
        }
        return () => {
            eventSource.close();
        }
    }, [])

    return <Card>
        <List subheader={<ListSubheader component="div">Montly Renewals</ListSubheader>}>
            <Divider />
            <Box>
                <div id="chart">
                    <ReactApexChart options={options} series={eventData} type="bar" height={350} />
                </div>
            </Box>
        </List>
    </Card>
}


export default React.memo(StatusBarGraph);