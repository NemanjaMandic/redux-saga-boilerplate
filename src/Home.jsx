import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from './state/users/actions';

class Home extends React.Component {


    componentDidMount(){
       this.props.getUsers()
       console.log(this.props)
    }

    render() {
        const { state } = this.props;
        return(<h1>Title</h1>)
    }
}

const mapStateToProps = state => ({state})


export default connect(mapStateToProps, {getUsers})(Home);