import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CoronaState extends Component {

    state = {
        status: false
    }

    componentDidMount(){
        // this.fetchCoronaState().then(status => {
        //     this.setState({
        //         status: status.data[0]
        //     })
        // })

    }

    fetchCoronaState = () => {
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
                        <View>
                            <Text>{new Date(this.state.status.announced_timestamp * 1000).toDateString()}</Text>
                            <Text>{this.state.status.certified}</Text>
                            <Text>{this.state.status.increased}</Text>
                            <Text>{this.state.status.deisolated}</Text>
                            <Text>{this.state.status.dead}</Text>
                        </View>
                    : null
                }
                <View style={{flex:1, width:'100%', maxWidth: 600}}>
                    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize:30, fontWeight:"bold", color:"#fff"}}>2019/03/24</Text>
                    </View>
                    <View style={{flex:4}}>
                        <View style={style.column}>
                            <Text style={style.label}>누적</Text>
                            <Text style={style.state}>100</Text>
                        </View>
                        <View style={style.column}>
                            <Text style={style.label}>금일 추가</Text>
                            <Text style={style.state}>100</Text>
                        </View>
                        <View style={style.column}>
                            <Text style={style.label}>완치</Text>
                            <Text style={style.state}>100</Text>
                        </View>
                        <View style={style.column}>
                            <Text style={style.label}>사망</Text>
                            <Text style={style.state}>100</Text>
                        </View>
                    </View>
                </View>
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
        flex: 1,
        fontSize: 20,
        textAlign: "center",
        color:"#fff"
    },
    state: {
        flex: 1,
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        color:"#fedd04"
    }
});