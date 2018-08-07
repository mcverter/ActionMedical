import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const ImageInline = (props) => {
  return (
    <View style={styles.allComponentContainer}>

      {/*
      %span{:class=>[@type, role], :style=>((attr? :float) ? "float: #{attr :float}" : nil)}<
  - if @type == 'icon' && (@document.attr? :icons, 'font')
    - style_class = ["icon-#{@target}"]
    - style_class << "icon-#{attr :size}" if attr? :size
    - style_class << "icon-rotate-#{attr :rotate}" if attr? :rotate
    - style_class << "icon-flip-#{attr :flip}" if attr? :flip
    - if attr? :link
      %a.image{:href=>(attr :link), :target=>(attr :window)}
        %i{:class=>style_class, :title=>(attr :title)}
    - else
      %i{:class=>style_class, :title=>(attr :title)}
  - elsif @type == 'icon' && !(@document.attr? :icons)
    - if attr? :link
      %a.image{:href=>(attr :link), :target=>(attr :window)}
        [#{attr :alt}]
    - else
      [#{attr :alt}]
  - else
    - src = (@type == 'icon' ? (icon_uri @target) : (image_uri @target))
    - if attr? :link
      %a.image{:href=>(attr :link), :target=>(attr :window)}
        %img{:src=>src, :alt=>(attr :alt), :width=>(attr :width), :height=>(attr :height), :title=>(attr :title)}
    - else
      %img{:src=>src, :alt=>(attr :alt), :width=>(attr :width), :height=>(attr :height), :title=>(attr :title)}

      */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default ImageInline;
