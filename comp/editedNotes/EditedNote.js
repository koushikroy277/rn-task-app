import React from 'react';
import { StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions
 } from 'react-native';

export default function editedNote() {
    const renderDraggable = () => {
        return (
            <View style={styles.draggableContainer}>
                <Animated.View style={styles.circle}>
                    <Text style={styles.text}>Drag me!</Text>
                </Animated.View>
            </View>
        );
    }

    return (
        <>
            <View style={styles.mainContainer}>
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>
                {this.renderDraggable()}
            </View>
        </>
    )
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});