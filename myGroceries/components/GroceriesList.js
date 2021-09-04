import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import FontAwesome from 'react-native-vector-icons/MaterialCommunityIcons';

const GroceriesList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <FontAwesome name="note" size={responsiveFontSize(4)} />
      </View>
      <View style={styles.ItemContainer}>
        <Text style={styles.ItemText}>Hello</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <Text>box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(5),
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingHorizontal: responsiveFontSize(1),
    flexDirection: 'row',
  },
  noteContainer: {
    flex: 1,
  },
  ItemContainer: {
    flex: 1,
  },
  ItemText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    backgroundColor: 'green',
  },
  checkBoxContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default GroceriesList;
