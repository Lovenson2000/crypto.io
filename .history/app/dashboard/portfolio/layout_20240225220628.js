import { Provider } from "react-redux";


export default function Layout({ children }) {
    return (
        <Provider store={store}>
            <div>
                {children}
            </div>
        </Provider>
    );
}