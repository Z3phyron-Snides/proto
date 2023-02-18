import { Container } from './styles'
import SettingLayout from '../../common/layouts/settings'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GetPrivacies } from "../../features/settings/SettingsSlice";
import useAxiosPrivate from "../../hook/useAxiosPrivate";

const Index = () => {
   const dispatch = useDispatch();
   const axiosPrivate = useAxiosPrivate();


   useEffect(() => {
     dispatch(GetPrivacies(axiosPrivate));
   }, [axiosPrivate, dispatch]);
    return (
        <Container>
          <SettingLayout/>
        </Container>
    );
}

export default Index;