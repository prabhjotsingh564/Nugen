import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,ScrollView } from 'react-native'
import {Header, Body, Title, Content, Left, Right, Accordion ,Container,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Dashboard extends Component {

  static navigationOptions ={
      drawerIcon:({ tintColor})=>(
        <Icon name="pie-chart"  style={{fontSize:24,color:tintColor}}/>
      )
  }

  render() {
    return (

          <Container>
              <Header style={{backgroundColor:"#fff"}}>
                  <Left><Icon name="bars" size={24} onPress={()=> this.props.navigation.openDrawer()} /></Left>
                  <Body><Title style={{color:"#000",width:170}}>Dashboard</Title></Body>
                  <Right></Right>
               </Header>

               <Content>
                 <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                      <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#dc3545',justifyContent:"flex-end"}}>
                              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                              <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                                  <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
                                  

                              </View>
                      </View>
                 </View>    

                 <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                      <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#28a745',justifyContent:"flex-end"}}>
                              <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                                   <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                                    <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
                                   

                                   </View>
                      </View>
                 </View>

                 <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                      <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#ffc107',justifyContent:"flex-end"}}>
                         <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                         <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                              <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
    

                         </View>
                      </View>
                 </View>

                 <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                    <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#337ab7',justifyContent:"flex-end"}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                    <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                    <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
                    

                    </View>
                    </View>
               </View>

               <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                    <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#337ab7',justifyContent:"flex-end"}}>

                    <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                         <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                         <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
                         

                         </View>
                    </View>
               </View>

               <View style={{flex:1,flexDirection:'row',backgroundColor:"black",height:130,padding:10,justifyContent:'center'}}>
                    
                    <View style={{flex:0.9,flexDirection:'column',backgroundColor:'#dc3545',justifyContent:"flex-end"}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"#fff",fontStyle:"italic",textAlign:"center",paddingBottom:30}}>ADMISSIONS</Text>

                         <View style={{flex:0.3,backgroundColor:"#fff" ,alignItems:"center",justifyContent:"center"}}>

                         <Text style={{fontWeight:"900"}}>VIEW DETAILS <Icon name="bars" size={14} onPress={()=> this.props.navigation.openDrawer()} /></Text>
                         

                         </View>
                    </View>
               </View>

               

               </Content>
        </Container>
            
      
    )
  }
}
const styles = StyleSheet.create({
container:{
    flex:1,
},
parent:{
  flex:1,
}


})
