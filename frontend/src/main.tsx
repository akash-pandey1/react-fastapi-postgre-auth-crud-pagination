import ReactDOM from "react-dom/client";
import router from "./routes/router";
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./core/store/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
)
