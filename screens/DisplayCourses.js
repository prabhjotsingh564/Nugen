import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import {  ListItem, SearchBar } from "react-native-elements";

class DisplayCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseUrl:'http://nugen.co.in/api/v1/courses',
      posts: [],
      courseId:'',
      couseName:'',
      courseDes:'',
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
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
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..."  round />;
  }

  render() {
    return (
   
        <FlatList
          data={this.state.posts}
          renderItem={({ item ,i}) => (
            <ListItem
              roundAvatar
              title={`${item.id +"."}${item.course_name}`}
              subtitle={item.course_content}
              containerStyle={{ borderBottomWidth: 5 }}
            />
          )}
          ListHeaderComponent={this.renderHeader()}
   
        />
     
    );
  }
}

export default DisplayCourses;