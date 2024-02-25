import { Provider } from "react-redux";
import { store } from "@/app/redux/store";

export default function Layout({ children }) {
    return (
        <Provider store={store}>
            <div>
                {children}
            </div>
        </Provider>
    );
}