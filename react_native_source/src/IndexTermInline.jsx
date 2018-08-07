import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const IndexTermInline = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - if @type == :visible
  =@text
  */}
        {...props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default IndexTermInline;
