import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { CoronaState, MaskStore, Location } from './navigation';

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
            backgroundColor: '#fff'
        },
        iconStyle: { height: 50 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false
        // showLabel: false,
        // showIcon: true,
    }
})

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <Container style={{flex:1, backgroundColor: '#fff'}}>
                <Header style={{backgroundColor:"#fff"}}>
                    <Left style={{flex:1}}>
                        <Text>Back</Text>
                    </Left>
                    <Body style={{flex:1, justifyContent:"center", alignItems:"center"}}><Title style={{color:"#333"}}>Corona</Title></Body>
                    <Right style={{flex:1}}>
                        <Text>Option</Text>
                    </Right>
                </Header>
                <AppTabContainer/>
            </Container>
        );
    }
}