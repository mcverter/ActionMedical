import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

const AnchorInline = (props) => {
  const url = props.url;

  return (
    <View style={styles.allComponentContainer}>
        <Link to={url}> {url} </Link>
    </View>
  );
};


const styles = StyleSheet.create({
  allComponentContainer: {display: 'flex'},
});

export default AnchorInline;

/*
      - case @type
- when :xref
  - refid = (attr :refid) || @target
  %a(href="#{@target}")<=(@text || @document.references[:ids].fetch(refid, "[#{refid}]")).tr_s("\n", ' ')
- when :ref
  %a(id=@target)
- when :bibref
  %a(id=@target)>
  = surround '[', ']' do
    =@target
- else
  %a(href=@target){:class=>role, :target=>(attr :window)}=@text


                <li><a href="mailto:NYCActionMedical@riseup.net">NYCActionMedical@riseup.net</a></li>

*/