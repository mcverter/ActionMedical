import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const PassBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      =content
      */}
        {...props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default PassBlock;
