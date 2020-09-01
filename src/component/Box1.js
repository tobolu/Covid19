

import React, {Component} from 'react';
import { 
    View, Text 
} from 'react-native';

export default class Box1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalPositive : 0,
            globalSembuh    : 0,
            globalMati  : 0,
            
        }
    }

    componentDidMount() {
        setTimeout(() => {
            fetch('https://covid19.mathdro.id/api', {
                method: 'GET',
                headers: {
                    Accept : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify()
            })
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    globalPositive: res.confirmed.value,
                    globalSembuh: res.recovered.value,
                    globalMati: res.deaths.value,
                })
            })
            .catch((error) => {
                alert('error');
            });
        }, 0);
    }
    
    render(){
        return(
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
              }}>

                <View style={{width: 100, paddingTop: 15, paddingBottom: 15, borderRadius: 15, backgroundColor: '#f3c623',}}>
                <Text style={{textAlign: 'center', }}>Positive</Text>
                <Text style={{textAlign: 'center', }}>{this.state.globalPositive}</Text>
                </View>
                <View style={{width: 100, paddingTop: 15, paddingBottom: 15, borderRadius: 15, backgroundColor: '#01d28e'}}>
                <Text style={{textAlign: 'center', }}>Sembuh</Text>
                <Text style={{textAlign: 'center', }}>{this.state.globalSembuh}</Text>
                    </View>
                <View style={{width: 100, paddingTop: 15, paddingBottom: 15, borderRadius: 15, backgroundColor: '#ff7171'}}>
                <Text style={{textAlign: 'center', }}>Meninggal</Text>
                <Text style={{textAlign: 'center', }}>{this.state.globalMati}</Text>
                    </View>
              </View>
        );
    }
}