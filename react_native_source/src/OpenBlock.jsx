import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const OpenBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['openblock', (@style != 'open' ? @style : nil), role, ('slide' if option? :step)]}
  - if title?
    .title=title
  .content
    =content.chomp
*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default OpenBlock;
