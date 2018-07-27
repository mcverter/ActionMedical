import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class SceneAssessment extends Component {

static navigationOptions = {title: 'Scene Assessment'};
  STOP = [{
      title: 'STOP',
      content: [
          'S - Survey the scene. ',
          'T - Take precautions. ',
          '0 - Organize help.',
          'P - Proceed with caution.',
      ]
  }]
  scan = [{
      title: 'Scan the scene.',
      content: [
          'Halt! Do not rush in.',
          'Survey the area:',
          '0  Is the mechanism of injury persistent?',
          '0 How many people are injured?',
          '0 What do you anticipate?',
      ]
  }]
  precautions = [{
      title: 'Take precautions.',
      content: [
          'Consider repositioning.',
          'Put on protective gear.',
          '0  body substance isolation',
          '0 physical protection',
      ]
  }]
  organize = [{
      title: 'Organize help.',
      content: [
          'Check in with your team.',
          '0 Who will perform which roles?',
          'Call for backup.',
          '0  Other medics?',
          '0 EMS?',
          '0 Bystanders?',
          'Organize the crowd.',
                ]
  }]
  proceed = [{
      title: 'Proceed with caution.',
      content: [
          'Medics do not run.',
          'Medics walk swiftly with purpose.',
          'Sometimes you have to walk swiftly away.',
          'Stay calm and confident.',
      ]
  }]
  more = [{
      title: 'More scene safety basics',
      content: [
          'Never make a new patient!',
          'Cont i n ua l l y reassess t he scene for sa fet y.',
          'Be prepa red to move or protect your patient.',
      ]
  }]
    render() {
         return (
            <View style={styles.SceneAssessmentContainer}>
              <Text>
              </Text>
              <CollapsibleUnorderedList sections={this.STOP} />
              <CollapsibleUnorderedList sections={this.scan} />
              <CollapsibleUnorderedList sections={this.precautions} />
              <CollapsibleUnorderedList sections={this.organize} />
              <CollapsibleUnorderedList sections={this.proceed} />
              <CollapsibleUnorderedList sections={this.more} />
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    SceneAssessmentContainer: {
        flex: 1,
    },
});

export default SceneAssessment;
