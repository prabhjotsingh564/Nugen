
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image,TouchableNativeFeedback} from 'react-native';
import { createDrawerNavigator,DrawerNavigator, DrawerItems, createStackNavigator} from 'react-navigation';
import Dashboard from './screens/Dashboard';
import StudentAdmission from './screens/StudentAdmission';
import Expenditure from './screens/Expenditure';
import Installment from './screens/Installment';
import BatchDetail from './screens/BatchDetail';
import CourseDetail from './screens/CourseDetail';
import Assignment from './screens/Assignment';
import Attendence from './screens/Attendence';
import DisplayCourses from './screens/DisplayCourses';
import { Button ,Icon} from 'native-base';
import DrawerScreens from './DrawerScreens';

export default class App extends Component{
  render() {
    return (
        <MyApp/>
    );
  }
}

const CustomDrawer =(props) => (

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

const MyStack = createStackNavigator({
  CourseDetail:{screen: CourseDetail},
  DisplayCourses: {screen: DisplayCourses}
},{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
}
);
const MyApp = createDrawerNavigator({
  "Dashboard": Dashboard,
  "Student Admission": StudentAdmission,
  Expenditure: Expenditure,
  Installment: Installment,
  "Batch Detail":BatchDetail,
  "Course Detail": MyStack,
  Assignment:{
    screen:Assignment
  },
  Attendence:Attendence
 
},{
  contentComponent:CustomDrawer,
  contentOptions:{
    activeTintColor:'#A173E1'
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
