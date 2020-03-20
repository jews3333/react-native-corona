import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CoronaState extends Component {

    UNSAFE_componentWillMount(){
        this.fetchCoronaState();
    }

    fetchCoronaState = () => {
        fetch('//api.dropper.tech/covid19/status/korea')
        .then(res => console.log(res))
    }

    render(){
        return (
            <View style={style.container}>
                <Text>CoronaState</Text>
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