import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const AdmonitionBlock = () => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      %div{:id=>@id, :class=>['admonitionblock', (attr :name), role]}
  %table
    %tr
      %td.icon
        - if @document.attr? :icons, 'font'
          %i{:class=>"icon-#{attr :name}", :title=>@caption}
        - elsif @document.attr? :icons
          %img{:src=>icon_uri(attr :name), :alt=>@caption}
        - else
          .title=@caption
      %td.content
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

export default AdmonitionBlock;
