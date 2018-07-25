import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class BodySubstanceIsolation extends Component {
static navigationOptions = {title: 'Body Substance Isolation'};
bsiIntro = [{
    title: 'BSI: What is it',
    content: [
        'Also known as: BSI',
        'BSI works two ways',
        'Keeps you safe from your patients',
        'Keeps your patients safe from you',
    ]
}];
substances = [{
    title: 'What substances are we talking about?',
    content: [
        'blood',
        'vomit',
        'saliva',
    ]
}];
gloveRules = [{
    title: 'Rules of glove',
    content: [
        'Always change gloves between patients',
        'Dispose of gloves if they get dirty or damaged',
        'Choosing gloves',
        'Always use non-latex gloves:',
        '0 No allergic reactions',
        '0  No need to inquire about latex allergies',
        'Color matters',
        '0 Lighter colors show blood better',
        '0 Black hides blood',
        '0  Each offers advantages',
    ]
}];
listName = [{
    title: 'Other personal protective gear',
    content: [
        'goggles (chemicals, projectiles, and body substances)',
        'poncho (chemicals and body substances)',
    ]
}];
    render() {
         return (
            <View style={styles.BodySubstanceIsolationContainer}>
              <Text>Removing exam gloves</Text>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    BodySubstanceIsolationContainer: {
        flex: 1,
    },
});

export default BodySubstanceIsolation;
