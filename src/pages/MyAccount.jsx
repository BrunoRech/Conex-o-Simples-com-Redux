import React from 'react';
import { connect } from 'react-redux';

const MyAccount = ({ history, loggedUser }) => {
    return (
        <>
            <h1>Usuário {loggedUser.user}</h1>
            <h1>Senha {loggedUser.password}</h1>
        </>
    );
};

const mapStateToProps = store => ({
    loggedUser: store.loginState.loggedUser,
});

export default connect(mapStateToProps)(MyAccount);