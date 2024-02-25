import { Provider } from "react-redux";
import {store} from "@app/redux/store";


function StoreProvider({children}) {
  return (
    <Provider store={store}>
        {Children}
    </Provider>
  )
}

export default StoreProvider