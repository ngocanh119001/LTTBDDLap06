import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  onPress,
} from 'react-native';
function ProductItem(props) {
   const {removeItem, item} = props;
  const {data} = props;
  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <View style={{flexDirection: 'column', padding: 5}}>
        <Text>{data.title}</Text>
      </View>
      <View style={{flex: 1}}></View>
      <TouchableOpacity 
      onPress={() => removeItem(item.title)}
        style={{
          height: 40,
          margin: 10,
          width: 80,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{alignItems: 'center'}}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ProductItem;