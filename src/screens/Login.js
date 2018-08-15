import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 27 , paddingTop:30 , paddingLeft: 50}}>
                    Login
                </Text>
                <TextInput placeholder='Username' style={{paddingLeft: 50 , paddingTop: 50}} />
                <TextInput placeholder='Password' style={{paddingLeft: 50 , paddingTop: 30}}/>
                <View style={{margin:7}} />
                <Button 
                        onPress={this.props.onLoginPress}
                        title="Submit"
                        style={{
                          paddingTop: 30,
                          
                        }}
                    />
                </ScrollView>
            )
    }
}