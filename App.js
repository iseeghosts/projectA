import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = ({
      token:0
    })
  }
  update_token = () => {
    this.setState({
      token:this.state.token+1
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight underlayColor='#257' onPress={()=>alert('Plans!')} style={styles.headerbutton}>
            <Text style={styles.headerbuttontext}>Plans</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#257' onPress={()=>alert('Activity')} style={styles.headerbutton}>
            <Text style={styles.headerbuttontext}>Activity</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#257' onPress={()=>alert('Track')} style={styles.headerbutton}>
            <Text style={styles.headerbuttontext}>Track</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  headerbutton: {
    backgroundColor:'#fff',
    elevation:5,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    marginHorizontal:10
  },
  headerbuttontext: {
    fontSize:16,
    color:'darkblue'
  }
});