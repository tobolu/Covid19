import React, {Component} from 'react';
import { 
    View, Text 
} from 'react-native';

export default class Subheader extends Component {
    
    render(){
        return(
            <View style={{
                margin: 10,
                alignItems: 'center',
            }}>
            <Text style={{
                alignContent: 'center',
                fontSize: 19,
                fontWeight: 'bold'
            }}>{this.props.title}</Text>
              </View>
        );
    }
}
