import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const CalloutInline = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - if @document.attr? :icons, 'font'
  %i.conum{:data=>{:value=>@text}}>
  %b="(#{@text})"
- elsif @document.attr? :icons
  %img{:src=>icon_uri("callouts/#{@text}"), :alt=>@text}
- else
  %b.conum="(#{@text})"

      */}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default CalloutInline;
