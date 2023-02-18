import React, { useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, reset } from "../../features/user/UserSlice";
import useAxiosPrivate from "../../hook/useAxiosPrivate";

const Root = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
  
      if (!token && !location.pathname.startsWith("/auth")) {
        console.log(location.pathname.startsWith("/auth"));
      navigate("/auth/login");
     
    }

    dispatch(loadUser(axiosPrivate)).catch(() => {
      dispatch(reset());
      navigate("/auth/login");
    });
  }, [token, dispatch, navigate, axiosPrivate, location]);

  return (
    <div>
     <Outlet />
    </div>
  );
};

export default Root;
