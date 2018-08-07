import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const PageBreakBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div(style='page-break-after: always')


              <div style="page-break-after: always"></div>

      */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default PageBreakBlock;
