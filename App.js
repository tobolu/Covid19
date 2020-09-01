import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Head from './src/component/Head.js';
import Subheader from './src/component/Subheader.js';
import Flexbox from './src/component/Box1.js';
import Box from './src/component/Box.js';


export default class App extends Component{
  
    render(){
      return(
        <View style={{
          flex: 1,
        }}>
          <Head title="Data COVID-19 Global & Indonesia"/>
          <Head title="Global"/>
          <Flexbox />
          <Head title="Indonesia"/>
          <Box />
        </View>
      );
    }
}
