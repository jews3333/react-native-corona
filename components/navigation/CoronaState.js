import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CoronaState extends Component {

    state = {

    }

    UNSAFE_componentWillMount(){
        this.fetchCoronaState();
    }

    fetchCoronaState = () => {
        var myHeaders = new Headers();
        myHeaders.append("APIKey", "27741b4d46a7a2657517342d05150e2ccbdf78d5174daabafc9ebcb9dbe45e59");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.dropper.tech/covid19/status/korea?locale=busan", requestOptions)
        .then(res=> {
            this.setState({
                res
            })
        })
        .catch(error => console.log('error', error));
    }

    render(){
        return (
            <View style={style.container}>
                {
                    this.state.data ?
                    <Text>{this.state.data}</Text>
                    : null
                }
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});