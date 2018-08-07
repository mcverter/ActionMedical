import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const IndexTermInline = (props) => {
    const visible = props.visible === false ? false : true;
    return (
        <View style={styles.allComponentContainer}>
            {visibile && <View>{...props.children}</View>}
        </View>
    );
};


const styles = StyleSheet.create({
    allComponentContainer: {display: 'flex'},
});

export default IndexTermInline;

/*
      - if @type == :visible
  =@text
  */