import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const Embedded = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - unless notitle || !has_header?
  %h1{:id=>@id}=@header.title
=content.chomp
- unless !footnotes? || attr?(:nofootnotes)
  #footnotes
    %hr
    - footnotes.each do |fn|
      .footnote{:id=>['_footnote', fn.index]}
        = succeed ". #{fn.text}" do
          %a(href="#_footnoteref_#{fn.index}")=fn.index
*/}

    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default Embedded;
