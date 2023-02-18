import { Container } from "./styles";
import { IoExitOutline } from 'react-icons/io5'
import { SignOut } from "../../features/auth/AuthSlice";
import { useDispatch } from 'react-redux';


const Index = () => {
    const dispatch = useDispatch()
    return (
        <Container color={'error'} auto flat onPress={() => dispatch(SignOut())}>
           <IoExitOutline/> <small>Sign Out</small>
        </Container>
    );
}

export default Index;