import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickLoginButton } from '../utils/actions';
import { Container, Input, Button, Header } from '../styles/Login';

const Login = ({ history, clickLoginButton }) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleButton = () => {

        clickLoginButton({ user, password });
        history.push('/myAccount');
    }

    return (
        <Container>
            <Header>Login</Header>
            <Input
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
                placeholder="Username"
            />
            <Input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button onClick={handleButton}>
                <span>Login</span>
            </Button>
        </Container>
    )
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickLoginButton }, dispatch);

export default connect(null, mapDispatchToProps)(Login);