import React, {Component} from 'react';
import { 
    View, Text 
} from 'react-native';

export default class Head extends Component {
    
    render(){
        return(
            <View style={{
                margin: 10,
                alignItems: 'center',
            }}>
                
                <Text style={{
                    height: 30,
                    width: 300,
                    textAlignVertical: 'center',
                    fontSize: 19,
                    fontWeight: 'bold',
                    textAlign:'center'
                }}>{this.props.title}</Text>
            </View>
        );
    }
}