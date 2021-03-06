import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header, Body, Title, Content, Left, Right, Accordion ,Container,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class BatchDetail extends Component {
  static navigationOptions ={
    drawerIcon:({ tintColor})=>(
      <Icon name="users" style={{fontSize:24,color:tintColor}}/>
    )
}
  render() {
    return (
      <View style={styles.container}>

      <Header style={{backgroundColor:"#fff"}}>
                <Left><Icon name="bars" size={24} onPress={()=> this.props.navigation.openDrawer()} /></Left>
                <Body>
                    <Title style={{color:"#000",width:170}}>BatchDetail</Title>
                </Body>
                <Right />
      </Header>

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Text>BatchDetail</Text>
        </View>

      </View>
            
      
    )
  }
}

const styles = StyleSheet.create({
container:{
    flex:1,

}
})
