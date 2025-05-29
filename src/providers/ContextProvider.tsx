import { Provider } from "react-redux";
import { store } from "../store/store";

type contextprops = {
    children: React.ReactNode;
}

const ContextProvider = (props: contextprops) => {
    return <Provider store={store}>
        {props.children}
    </Provider>
}
export default ContextProvider;