import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


const LinkButton = props => {
  const navigation = props.navigation;
  const label = props.label;
  const destination = props.destination;
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate(destination)}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
