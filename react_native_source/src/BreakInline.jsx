import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const BreakInline = (props) => {
  return (
    <View style={styles.allComponentContainer}>
        {...props.children}
        <PageBreak />
      {/*
      =@text
%br>
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default BreakInline;
