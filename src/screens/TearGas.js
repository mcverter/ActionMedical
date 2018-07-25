import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class TearGas extends Component {
static navigationOptions = {title: 'TearGas'};
    render() {
         return (
            <View style={styles.TearGasContainer}>
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
