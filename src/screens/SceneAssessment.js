import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class SceneAssessment extends Component { 
static navigationOptions = {title: 'SceneAssessment'};
    render() {
         return (
            <View style={styles.SceneAssessmentContainer}>
              <Text>
              S - Survey the scene. T - Take precautions. 0 - Organi ze help.
              P - Proceed with caution.
              Scan the scene.
              Halt! Do not rush in.
              Survey the area:
              0  Is the mechanism of injury persistent?
              0 How many people are injured?
              0 What do you anticipate?
              Take precautions.
              Consider repositioning.
              Put on protective gear.
              0  body substance isolation
              0 physical protection
              Organize help.
              Check in with your team.
              0 Who will perform which roles?
              Call for backup.
              0  Other medics?
              0 EMS?
              0 Bystanders?
              Organize the crowd.
              Proceed with caution.
              Medics do not run.
              Medics walk swiftly with purpose.
              Sometimes you have to walk swiftly away.
              Stay calm and confident.
              More scene safety basics
              Never make a new patient!
              Cont i n ua l l y reassess t he scene for sa fet y.

              Be prepa red to move or protect your patient.
              </Text>

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
