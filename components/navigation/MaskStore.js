import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MaskStore extends Component {
    
    state = {
        stores: false
    }

    fetchCoronaState = (address) => {

        fetch(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=부산광역시 ${address}`)
        .then(res=> res.json())
        .then(res => this.setState({
            stores : res
        }))
        .catch(error => console.log('error', error));

    }

    render(){
        return (
            <View style={style.container}>
                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    {
                        this.state.stores ?
                            <Text style={{fontSize:30, fontFamily:"NotoSansB", color:"#fedd04"}}>{this.state.stores.address}</Text>
                        :  <Text style={{fontSize:30, fontFamily:"NotoSansB", color:"#fedd04"}}>마스크 판매 현황</Text>
                    }
                    <View>
                        <TouchableOpacity onPress={() => this.fetchCoronaState('강서구')}>
                            <Text>강서구</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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