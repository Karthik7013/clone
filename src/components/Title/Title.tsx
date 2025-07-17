import Helmet from "react-helmet";

type titleProps = {
    title: string,
    description?: string,
    metacontent?: string,
    icon?:string
}
const Title = ({ title, description, metacontent = "",icon="" }: titleProps) => {
    return <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href={icon} type="image/x-icon" />
        <meta content={metacontent} property="og:title"></meta>
    </Helmet>
}

export default Title;