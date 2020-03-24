import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MaskStore extends Component {
    
    state = {
        store: false
    }

    componentDidMount(){
        // this.fetchCoronaState()
        // .then(stores => {
        //     console.log(stores)
        //     for(let i=0; i < stores.storeInfos.length; i++){
        //         this.setState({
        //             ...this.state,
        //             i
        //         })
        //     }
        // })

    }

    fetchCoronaState = () => {

        return fetch("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=1&perPage=100")
        .then(res=> res.json())
        .catch(error => console.log('error', error));

    }

    render(){
        return (
            <View style={style.container}>
                {
                    this.state.store ?
                        <Text>{JSON.stringify(this.state)}</Text>
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