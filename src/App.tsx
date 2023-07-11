import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "./assets/styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
