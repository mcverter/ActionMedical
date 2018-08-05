import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ColistBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['colist', @style, role]}
  - if title?
    .title=title
  - if @document.attr? :icons
    - font_icons = @document.attr? :icons, 'font'
    %table
      - items.each_with_index do |item, i|
        - num = i + 1
        %tr
          %td<
            - if font_icons
              %i.conum{:data=>{:value=>num}}>
              %b=num
            - else
              %img{:src=>icon_uri("callouts/#{num}"), :alt=>num}
          %td=item.text
  - else
    %ol
      - items.each do |item|
        %li
          %p=item.text
*/}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ColistBlock;
