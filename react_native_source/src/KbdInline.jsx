import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const KbdInline = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - if (keys = attr 'keys').size == 1
  %kbd=keys.first
- else
  %kbd.keyseq
    - keys.each_with_index do |key, idx|
      - unless idx.zero?
        ='+'
      %kbd>=key

      */}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default KbdInline;
