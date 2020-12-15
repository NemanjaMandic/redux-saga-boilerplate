import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from './state/users/actions';

const Home = (props) => {

    useEffect(() => {
        props.getUsers();
        console.log('props', props.data);
    }, []);
   return(
    <h1>Title</h1>
   );
}

const mapStateToProps = ({
    users: {
        users: {
            data
        }
    }
}) => ({data})


export default connect(mapStateToProps, {getUsers})(Home);