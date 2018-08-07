import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const SidebarBlock = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['sidebarblock', role]}
  .content
    - if title?
      .title=title
    =content.chomp
*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default SidebarBlock;
