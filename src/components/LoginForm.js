import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';

import {Button, Card, CardSection, Input, Spinner} from './common';


export default class LoginForm extends Component{
    state = { 
             email: "",
             password: "",
             error: "",
             loading: false
            };

    onButtonPress(){
        const {email, password} = this.state

        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({error: 'Authentication Failed!', loading: false})
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner/>
        }
        return (
             <Button onPress={this.onButtonPress.bind(this)}>
               Log In
            </Button> 
        )
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    lable='Email'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    placeholder='user@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                     secureTextEntry               
                     lable='Password'
                     onChangeText={password => this.setState({ password })}
                     value={this.state.password}
                     placeholder='password'
                     />
                </CardSection>
                    <Text style={styles.errorText}>
                        {this.state.error}
                    </Text>    

                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorText:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}