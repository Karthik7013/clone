import Helmet from "react-helmet";

type titleProps = {
    title: string,
    description?: string
}
const Title = (props: titleProps) => {
    return <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
    </Helmet>
}

export default Title;