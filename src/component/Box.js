

import React, {Component} from 'react';
import { 
    View, Text, Dimensions, FlatList, ScrollView
} from 'react-native';

export default class Box1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            globalPositive : 0,
            globalSembuh    : 0,
            globalMati  : 0,
            indonesia : 0
        }
    }

    componentDidMount() {
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi', {
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
                indonesia: res.data
            })
            // alert(this.state.indonesia.fid);
        })
        .catch((error) => {
            alert('error');
        });
    }
    
    render(){
        return(
            <ScrollView>
                <FlatList
                    data    = {this.state.indonesia}
                    keyExtractor    = {item => item.fid.toString()}
                    renderItem = { (item) => {
                        const datas = item.item;

                        return(
                            <View style= {{
                            
                            flexDirection: 'row',
                            alignSelf: 'center',
                            justifyContent:'space-between',
                            width: Dimensions.get('window').width,
                            borderWidth:2,
                            borderColor:'black',
                            borderRadius:10
                            }}>
                            <View style={{alignItems: 'flex-start', padding:10}}>
                                <Text>{datas.provinsi}</Text>
                                </View>
                                <View style={{alignItems: 'flex-start', alignSelf:'center', flexDirection: 'row', padding:10}}>
                                    <Text style={{textAlign: 'center', width: 60, paddingTop: 5, paddingBottom: 5, marginLeft: 3, borderRadius: 15, backgroundColor: '#f3c623',}}>{datas.kasusPosi}</Text>
                                    <Text style={{textAlign: 'center', width: 60, paddingTop: 5, paddingBottom: 5, marginLeft: 3, borderRadius: 15, backgroundColor: '#01d28e',}}>{datas.kasusSemb}</Text>
                                    <Text style={{textAlign: 'center', width: 60, paddingTop: 5, paddingBottom: 5, marginLeft: 3, borderRadius: 15, backgroundColor: '#ff7171',}}>{datas.kasusMeni}</Text>
                                    
                                </View>
                            </View>
                        );
                    }}
                    >
                </FlatList>


            </ScrollView>
        );
    }
}