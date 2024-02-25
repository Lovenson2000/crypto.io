import { Provider } from "react-redux";
import {store} from "@app/redux/store";


function StoreProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default StoreProvider