import React, {Component} from 'react';
import { 
    View, Text 
} from 'react-native';

export default class Head extends Component {
    
    render(){
        return(
            <View style={{
                margin: 5,
                alignItems: 'center',
            }}>
                
                <Text style={{
                    height: 30,
                    width: 300,
                    fontSize: 19,
                    fontWeight: 'bold'
                }}>{this.props.title}</Text>
            </View>
        );
    }
}