import { Card, CardMedia } from "@mui/material";

const Advertisement = () => {
    return <>
        {
            [1, 2, 3].map((e: number) => {
                return <Card>
                    <CardMedia component={'img'} image="https://img.freepik.com/free-vector/health-insurance-template-vector-blog-banner_53876-111243.jpg?size=626&ext=jpg&ga=GA1.1.1631789375.1722771379&semt=ais_hybrid" height={'100%'} />
                </Card>
            })
        }
    </>
}
export default Advertisement;