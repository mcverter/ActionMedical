import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class LifeThreats extends Component {
static navigationOptions = {title: 'LifeThreats'};
    render() {
         return (
            <View style={styles.Container}>
              <Text>
              ABCDE - Checking for life threats
              </Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
});

export default LifeThreats;
