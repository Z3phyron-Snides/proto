import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "@fontsource/montserrat";
import router from "./routes";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser, reset } from "./features/user/UserSlice";
// import useAxiosPrivate from "./hook/useAxiosPrivate";

function App() {
  // const { token } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const axiosPrivate = useAxiosPrivate();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(loadUser(axiosPrivate));

  //     dispatch(reset());
  //   }
  // }, [dispatch, token, axiosPrivate]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
