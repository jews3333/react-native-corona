import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
        .then(
            console.log(this.state.stores)
        )
        .catch(error => console.log('error', error));

    }

    render(){
        return (
            <View style={style.container}>
                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <View>
                    {
                        this.state.stores ?
                            <Text style={{fontSize:30, fontFamily:"NotoSansB", color:"#fedd04"}}>{this.state.stores.address}</Text>
                        :  <Text style={{fontSize:30, fontFamily:"NotoSansB", color:"#fedd04"}}>마스크 판매 현황</Text>
                    }
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} contentContainerStyle={{alignItems: 'center', paddingStart: 5, paddingEnd: 5}}>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('강서구')}><Text style={style.button}>강서구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('금정구')}><Text style={style.button}>금정구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('남구')}><Text style={style.button}>남구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('동구')}><Text style={style.button}>동구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('동래구')}><Text style={style.button}>동래구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('부산진구')}><Text style={style.button}>부산진구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('북구')}><Text style={style.button}>북구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('사상구')}><Text style={style.button}>사상구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('사하구')}><Text style={style.button}>사하구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('서구')}><Text style={style.button}>서구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('수영구')}><Text style={style.button}>수영구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('연제구')}><Text style={style.button}>연제구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('영도구')}><Text style={style.button}>영도구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('중구')}><Text style={style.button}>중구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('해운대구')}><Text style={style.button}>해운대구</Text></TouchableOpacity>
                        <TouchableOpacity style={style.item} onPress={() => this.fetchCoronaState('기장군')}><Text style={style.button}>기장군</Text></TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollView style={{flex:5}}>
                    {
                        this.state.stores ?
                        <View>
                            {
                                this.state.stores.stores.map((store, index) => {
                                    return <View key={index} style={{marginHorizontal:10, marginVertical:5, padding:10, backgroundColor:"#1e1e1e", borderRadius:5}}>
                                        <Text style={{color:"#fff", fontFamily:"NotoSansB", fontSize:20}}>{store.name}</Text>
                                        <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>{store.addr}</Text>
                                        <View style={{flexDirection:"row"}}>
                                            <View style={{flex:1}}>
                                                <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>갱신일자</Text>
                                                <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>{store.created_at}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>입고일자</Text>
                                                <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>{store.stock_at}</Text>
                                            </View>
                                        </View>
                                    </View>
                                })
                            }
                        </View>
                        : null
                    }
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        marginHorizontal: 5,
        paddingStart: 5,
        paddingEnd: 5,
        borderRadius: 30,
        backgroundColor: "#fedd04"
    },
    button: {
        textAlign:"center",
        fontFamily:"NotoSansB"
    }
});
