import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CollapsibleUnorderedList from "../components/CollapsibleUnorderedList";

class InitialAssessment extends Component {
static navigationOptions = {title: 'Initial Assessment Intro'};
assesmentPurpose = [{
    title: 'Purpose of initial assessment',
    content: [
        'To identify life-threatening or potential life-threatening conditions.',
    ]
}]
  assessmentProtocol = [{
      title: 'Initial assessment is a protocol',
      content: [
          'We perform it in a specific order.',
          'We do not skip steps.',
          'We only interrupt it to perform life-saving interventions.',
      ]
  }]
  redFlags = [{
      title: 'Red flags',
      content: [
                    'The initial assessment is a search for red flags: indicators of potential life-threatening conditions.',
          'As soon as you find a red flag, you\'ll need to call for backup.',
          'There are lots of gray areas in first aid. Street medics tend not to rule conditions out.',
          'If it could be a red flag, it\'s a red flag.',
      ]
  }]
  tipsLearning = [{
      title: 'Tips for learning initial assessments',
      content: [
          'Initial assessment is probably the hardest skill medics perform.',
          'You will screw up more than you get right at first.',
          'It can be harder in trainings than IRL.',
          'Ask your partner for help if you get stuck.',
          'Make your mistakes in settings like this.',
          ' ',
      ]
  }]
  
  tipsPerforming = [{
      title: 'Tips for performing initial assessments',
      content: [
          'If s unintuitive, but go slow.',
          'Vocalize steps as you go.',
          'Only stop for l(fe-saving  interventions.',
      ]
  }]
  
  assessmentOverview = [{
      title:           'Initial Assessment Overview',
      content: [
          'M - Mechanism of Injury',
          'M - Mental Status',
          'A - Airway',
          'B - Breathing ',
          'C- Circulation ',
          'D- Disability',
          'E- Environment',
      ]
  }]
    render() {
         return (
            <View style={styles.InitialAssessmentContainer}>
             <Text>

             </Text>
              <CollapsibleUnorderedList sections={this.assessmentOverview} />
              <CollapsibleUnorderedList sections={this.assesmentPurpose} />
              <CollapsibleUnorderedList sections={this.assessmentProtocol} />
              <CollapsibleUnorderedList sections={this.redFlags} />
              <CollapsibleUnorderedList sections={this.tipsLearning} />
              <CollapsibleUnorderedList sections={this.tipsPerforming} />

            </View>
        );
    }
 }
const styles = StyleSheet.create({
    InitialAssessmentContainer: {
        flex: 1,
    },
});

export default InitialAssessment;
