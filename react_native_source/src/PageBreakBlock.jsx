import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const PageBreakBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div(style='page-break-after: always')
      */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default PageBreakBlock;
