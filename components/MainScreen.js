import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { CoronaState, MaskStore, Location } from './navigation';
import * as Font from 'expo-font';

const AppTabNavigator = createMaterialTopTabNavigator({
    '코로나 현황': { screen: CoronaState },
    '마스크 판매처': { screen: MaskStore },
    '확진자 이동동선': { screen: Location }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: '#1e1e1e'
        },
        //iconStyle: { height: 50 },
        activeTintColor: '#fedd04',
        inactiveTintColor: '#fff',
        upperCaseLabel: false,
        labelStyle: {
            fontFamily:'NotoSansM'
        }
        // showLabel: false,
        // showIcon: true,
    }
})

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null
    }

    async componentDidMount(){
        await Font.loadAsync({
            'NotoSansM': require('../assets/fonts/NotoSansKR-Thin.otf'),
            'NotoSansB': require('../assets/fonts/NotoSansKR-Regular.otf')
        });
    }

    render(){
        return (
            <Container style={{flex:1, backgroundColor: '#353646'}}>
                <Header style={{backgroundColor:"#353646"}}>
                    <Left style={{flex:1}}>
                        <Text style={{color:'#fff', fontFamily:'NotoSansM'}}>부산광역시</Text>
                    </Left>
                    <Body style={{flex:1, justifyContent:"center", alignItems:"center"}}><Title style={{color:"#fedd04", fontWeight:"bold", fontFamily:'NotoSansB'}}>Corona19</Title></Body>
                    <Right style={{flex:1}}>
                        <Text style={{color:'#fff', fontFamily:'NotoSansM'}}>Beta</Text>
                    </Right>
                </Header>
                <AppTabContainer/>
            </Container>
        );
    }
}