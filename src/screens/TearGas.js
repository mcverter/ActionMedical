import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class TearGas extends Component {
static navigationOptions = {title: 'TearGas'};
    render() {
         return (
            <View style={styles.TearGasContainer}>
              <Text> Tear Gas Treatment Video</Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    TearGasContainer: {
        flex: 1,
    },
});

export default TearGas;
