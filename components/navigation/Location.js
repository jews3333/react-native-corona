import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Location extends Component {
    
    state = {
        locations: false
    }

    componentDidMount(){
        this.getCoronaLocation().then(locations => {
            this.setArrayGroup(locations.data);
        });
    }

    getCoronaLocation = () => {
        var proxy = "https://cors-anywhere.herokuapp.com";
        var url = "https://api.dropper.tech/covid19/patient/path?locale=busan";

        return fetch(`${proxy}/${url}`,{
            headers: new Headers({
                "APIKey":"ce9e5101ab9fef08cc6f29c9d03f8ecfa1b40b5c7e5fd0aee1527f7fe24555d3"
            })
        })
        .then(response => response.json())
        .catch(error => console.log('error', error));

    }

    setArrayGroup = (locations) => {
        let lists = locations.reduce((items, item, index) => 
            ({
                ...items,
                [item.patient_no]: {
                    ...items[item.patient_no],
                    [index] : item
                }
            }),{}
        );
        console.log(lists);
        this.setState({
            locations: lists
        });
    }
    
    render(){
        return (
            <View style={style.container}>
                <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{fontSize:30, fontFamily:"NotoSansB", color:"#fedd04"}}>확진자 이동경로</Text>
                </View>
                {
                    this.state.locations ?
                    <ScrollView style={{flex:5}}>
                        {
                            Object.keys(this.state.locations).map((list, index) => {
                                return <View key={index} style={{margin:10, borderRadius:10, backgroundColor:"#1e1e1e", padding:10}}>
                                    <Text style={{color:"#fff", fontSize:"20", fontFamily:"NotoSansB", color:"#fedd04", paddingBottom:10, borderBottomWidth: 1, borderBottomColor: "#999"}}>{list}번 확진자 동선</Text>
                                    <View>
                                    {
                                        Object.values(this.state.locations[list]).map((item, index) => {
                                            return <View key={index} style={{flexDirection:"row", margin: 10}}>
                                                <Text style={{color:"#fff", marginRight: 20, fontFamily:"NotoSansB"}}>{item.month}/{item.date}</Text>
                                                <Text style={{color:"#fff", fontFamily:"NotoSansM"}}>{item.content}</Text>
                                            </View>
                                        })
                                    }
                                    </View>
                                </View>
                            })
                        }
                    </ScrollView>
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