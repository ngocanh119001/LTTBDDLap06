import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
import Items from './Flax'
export default class Myproject extends Component {

  constructor(props) {
    
    super(props);

    this.array = [{
      title: 'Java',
      id:1
    },
    {
      title: 'C#',
      id:2
    },{
       title: 'C++',
      id:2
      }
    ],

      this.state = {

        arrayHolder: [],

        textInput_Holder: ''

      }

  }

  componentDidMount() {

    this.setState({ arrayHolder: [...this.array] })

  }


  joinData = () => {

    this.array.push({title : this.state.textInput_Holder});

    this.setState({ arrayHolder: [...this.array] })

  }


  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {

    Alert.alert(item);

  }
  
 
  
      // Flat List Item
    
   


  render() {
    return (

      <View style={styles.MainContainer}>
      <View style={styles.Container}>
        <TextInput
          placeholder="Học java"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
       
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

          <Text style={styles.buttonText}> + </Text>

        </TouchableOpacity>
      </View>
      <View style={{flex:15, flexDirection:"row"}}>
        <FlatList

          data={this.state.arrayHolder}

          width='100%'

          extraData={this.state.arrayHolder}

          keyExtractor={(index) => index.toString()}

          ItemSeparatorComponent={this.FlatListItemSeparator}

          renderItem={({ item }) => <Items data ={item}/>
        
          }
           
        />
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
   
    margin: 2

  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    flex: 2,
    padding:10,
   

  },

  textInputStyle: {

    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    marginTop:10,
    borderColor: '#4CAF50',
    borderRadius: 7, 

  },

  button: {

    width: '10%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

});