import  { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getUsers } from './state/users/actions';

const Home = () => {
   const dispatch = useDispatch()
   const users = useSelector(state => state.users.users.data)
    useEffect(() => {
        dispatch(getUsers());
       
      
    }, []);

    console.log('USERS', users);
   return(
    <h1>Title</h1>
   );
}



export default Home;