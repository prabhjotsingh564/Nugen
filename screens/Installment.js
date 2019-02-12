import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Header, Body, Title, Content, Left, Right, Accordion ,Container,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Installment extends Component {
  static navigationOptions ={
    drawerIcon:({ tintColor})=>(
      <Icon name="money" style={{fontSize:24,color:tintColor}}/>
    )
}
  render() {
    return (
      <Container>

      <Header style={{backgroundColor:"#fff"}}>
                <Left><Icon name="bars" size={24} onPress={()=> this.props.navigation.openDrawer()} /></Left>
                <Body>
                    <Title style={{color:"#000"}}>Installment</Title>
                </Body>
                <Right />
      </Header>
      <Content
        contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <View>
          <Text>Installment</Text>
        </View>
      </Content>

    </Container>
    )
  }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
}
})
