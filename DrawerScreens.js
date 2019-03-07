import React, { Component } from 'react'
import {  Text,View } from 'react-native'
import {Platform, StyleSheet,SafeAreaView,ScrollView,Dimensions,Image,TouchableNativeFeedback} from 'react-native';
import { Button ,Icon} from 'native-base';
import {NavigationActions} from 'react-navigation';


export default class DrawerScreens extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
        routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{height:120,backgroundColor:"#000",justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"#fff"}}>
          <Image source={require('./images/logo1.jpg')} style={{height:100,width:100,borderRadius:50}}/>
        </View>
        <ScrollView>
          <DrawerItems {...props}/>
       
          <View style={{backgroundColor:"#fff",height:100,justifyContent:"center",alignSelf:"center",flexDirection:"row"}}>
                <Button block light iconLeft style={{flex:0.8,backgroundColor:"#A173E1",marginTop:20}}><Icon name='log-out' /><Text style={{fontWeight:"bold"}}>  LOG OUT</Text></Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
