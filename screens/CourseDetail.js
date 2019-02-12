import React, { Component } from 'react'
import { Text, StyleSheet, View ,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import {Header, Body, Title, Content, Left, Right, Accordion ,Container,Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default class CourseDetail extends Component {

  constructor(){
    super();
    this.state={
      baseUrl:'http://nugen.co.in/api/v1/courses',
      posts: [],
      courseId:'',
      couseName:'',
      courseDes:'',
    }
  }

  static navigationOptions ={
    drawerIcon:({ tintColor})=>(
      <Icon name="list" style={{fontSize:24,color:tintColor}}/>
    )
}

componentDidMount(){
    this.fetchposts();
}


submit = () => {
  
  this.addPost();
  this.clearInput();
}

fetchposts = () => {
  fetch(`${this.state.baseUrl}`)
        .then((res)=> {
            return res.json();
        })
        .then((res)=> {
            this.setState({
                posts: res,
              
            });
            console.log(this.state.posts)
        })
        .catch((err)=> {
            console.log("Error while fetching posts " + err);
        })
}

addPost = () => {

        let post = {
          course_name: this.state.couseName,
          course_content: this.state.courseDes
      };
      fetch(`http://nugen.co.in/api/v1/courses`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
      })
      .then((res)=>{
          return res.json();
      })
      .then((res)=>{
          if(res.id !== undefined){
              this.fetchposts();
              this.clearInputs();
          }
      })
      .catch((err)=>{
          console.log(`Error while inserting post ${err}`);
      })

}

clearInput = () => {
  this.setState({
    courseId:'',
    couseName:'',
    courseDes:'',
  })

}
// componentDidUpdate(){
//   console.log(this.state.posts[0].course_name);
// }
  render() {
    return (
      <View style={styles.container}>

      <Header style={{backgroundColor:"#fff"}}>
                <Left><Icon name="bars" size={24} onPress={()=> this.props.navigation.openDrawer()} /></Left>
                <Body>
                    <Title style={{color:"#000",width:170}}>CourseDetail</Title>
                </Body>
                <Right />
      </Header>

        <View style={{flex:1,backgroundColor:"#224B63"}}>
              
              <ScrollView>

                  <View style={{flex:1,backgroundColor:"#fff",flexDirection:"row",height:180,justifyContent: 'center',}}>
                        <View style={{flex:0.9 ,flexDirection:"column",justifyContent:"space-around"}}>

                          <View style={{flex:0.3,backgroundColor:"#fff",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                              <View><Icon name="list" size={14} /></View>
                              <TextInput 
                                style={{flex:1,backgroundColor:"#fff",borderBottomWidth:2,borderBottomColor:"#376C7E"}}
                                placeholder="Enter the course"
                                value={this.state.couseName}
                                onChangeText={(couseName)=> this.setState({couseName})}
                              />
                          </View>
                          <View style={{flex:0.3,backgroundColor:"#fff",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                              <View><Icon name="list" size={14} /></View>
                              <TextInput 
                                style={{flex:1,backgroundColor:"#fff",borderBottomWidth:2,borderBottomColor:"#376C7E"}}
                                placeholder="Enter the course details"
                                multiline={true}
                                maxLength={80}  
                                value={this.state.courseDes}
                                onChangeText={(courseDes)=> this.setState({courseDes})}
                              />
                          </View>
                          
                          <View style={{flex:0.2,backgroundColor:"#fff"}}>
                              <TouchableOpacity style={{flex:1,backgroundColor:"#376C7E",alignItems:"center",justifyContent:"center"}} onPress={() => this.submit()}>
                                <Text style={{color:"#fff"}}>Submit</Text>
                              </TouchableOpacity>
                              
                          </View>

                          
                        </View>

                        
                  </View>

                 <View  style={{flex:1,height:300,flexDirection:"column",paddingLeft:"10%",paddingRight:"10%",paddingTop:"10%"}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#50D6E4', '#23727A']} style={{flex:0.5,borderRadius:10,borderWidth:1,borderColor:"#83AEC7",backgroundColor:"red",flexDirection:"row",justifyContent: 'center'}}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3BADE5', '#60EAF9']} style={{flex:0.8,borderRadius:10,borderWidth:1,borderColor:"#64ACD6",backgroundColor:"#090",top:"15%",justifyContent:"center",borderRadius:10}}>
                            <View style={{flex:0.8,flexDirection:"column"}}>
                                <View style={{flex:0.5,justifyContent: 'center',alignItems:"center",paddingBottom:"2%"}}>
                                  <Icon name="list" size={44} />          
                                </View>
                                <View style={{flex:0.5,justifyContent:"center",alignItems:"center"}}>
                                  <Text style={{fontSize:15,fontWeight:"bold"}}>VIEW ALL THE COURSES</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                 </View>
                  

              </ScrollView>
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
