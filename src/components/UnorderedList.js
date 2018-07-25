import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
const UnorderedList = (props) => {
  console.log('list content props', props);
  return (
    <ScrollView>{props.content.map((item, index)=>(
      <View style={styles.content} key={index}>
        <Text>{`\u2022 ${item}`} </Text>
      </View>))}
    </ScrollView>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default UnorderedList;
