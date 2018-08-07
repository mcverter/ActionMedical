import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const MenuInline = (props) => {
  return (
    <View style={styles.allComponentContainer}>
      {/*
      - menu = attr 'menu'
- menuitem = attr 'menuitem'
- if !(submenus = attr 'submenus').empty?
  %span.menuseq
    %span.menu>=menu
    ='&#160;&#9656; '
    =submenus.map {|submenu| %(<span class="submenu">#{submenu}</span>&#160;&#9656; ) }.join.chop
    %span.menuitem>=menuitem
- elsif !menuitem.nil?
  %span.menuseq
    %span.menu>=menu
    ='&#160;&#9656; '
    %span.menuitem>=menuitem
- else
  %span.menu=menu

      */}
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default MenuInline;
