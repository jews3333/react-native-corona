import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CoronaState extends Component {

    state = {
        status: false
    }

    componentDidMount(){
        this.getCoronaState().then(status => {
            console.log(status.data[0]);
            this.setState({
                status: status.data[0]
            })
        })

    }

    getTimestemp = () => {
        const time = new Date(this.state.status.announced_timestamp * 1000);
        const yyyy = time.getFullYear();
        const mm = time.getMonth() + 1;
        const dd = time.getDate();
        const hh = time.getHours();
        const ms = time.getMinutes();

        return String(`${yyyy}년 ${mm}월 ${dd}일 ${hh}시 ${ms}분`);
    }

    getCoronaState = () => {
        var proxy = "https://cors-anywhere.herokuapp.com";
        var url = "https://api.dropper.tech/covid19/status/korea?locale=busan";

        return fetch(`${proxy}/${url}`,{
            headers: new Headers({
                "APIKey":"ce9e5101ab9fef08cc6f29c9d03f8ecfa1b40b5c7e5fd0aee1527f7fe24555d3"
            })
        })
        .then(response => response.json())
        .catch(error => console.log('error', error));

    }

    render(){
        return (
            <View style={style.container}>
                {
                    this.state.status ?
                    <View style={{flex:1, width:'100%', maxWidth: 600}}>
                        <View style={{flex:2, justifyContent: "center", alignItems: "center"}}>
                            <Text style={{fontSize:20, color:"#fff", fontFamily:"NotoSansM"}}>기준시간</Text>
                            <Text style={{fontSize:30, color:"#fff", fontFamily:'NotoSansB', color:"#fedd04"}}>{this.getTimestemp()}</Text>
                        </View>
                        <View style={{flex:5}}>
                            <View style={style.column}>
                                <View style={{flex:1}}><Text style={style.label}>누적</Text></View>
                                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Text style={style.state}>{this.state.status.certified}</Text></View>
                            </View>
                            <View style={style.column}>
                                <View style={{flex:1}}><Text style={style.label}>금일 추가</Text></View>
                                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Text style={style.state}>{this.state.status.increased}</Text></View>
                            </View>
                            <View style={style.column}>
                                <View style={{flex:1}}><Text style={style.label}>완치</Text></View>
                                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Text style={style.state}>{this.state.status.deisolated}</Text></View>
                            </View>
                            <View style={style.column}>
                                <View style={{flex:1}}><Text style={style.label}>사망</Text></View>
                                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}><Text style={style.state}>{this.state.status.dead}</Text></View>
                            </View>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                    : null
                }
                
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    column: {
        flex: 1,
        flexDirection:'row',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    label: {
        fontSize: 20,
        textAlign: "center",
        color:"#fff",
        fontFamily: 'NotoSansM'
    },
    state: {
        fontSize:30,
        textAlign:"center",
        color:"#fedd04",
        fontFamily: 'NotoSansB',
        backgroundColor:"#1e1e1e",
        borderRadius: 10,
        minWidth:50,
        padding:10,
        lineHeight:30
    }
});