import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import OrderedList from './OrderedList';


const CollapsibleOrderedList = (props) => {
  const _renderSectionTitle = (section) => {
    return (
      <View />
    );
  };

  const _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <OrderedList content={section.content}/>
    );
  };


  return (
    <Accordion
      sections={props.sections}
      renderSectionTitle={_renderSectionTitle}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
    />
  )
};

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

export default CollapsibleOrderedList;
