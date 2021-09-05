import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GroceriesList from '../components/GroceriesList';

const PastListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Past Groceries List</Text>
      </View>
      <View style={styles.listContainer}>
        <GroceriesList />
      </View>
      <View style={styles.addButton}>
        <FontAwesome5 name={'check-circle'} size={responsiveFontSize(4)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  header: {
    marginTop: '10%',
    marginHorizontal: responsiveScreenWidth(4),
    padding: responsiveFontSize(1),
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    marginTop: responsiveFontSize(2),
  },
  addButton: {
    alignItems: 'center',
  },
});

export default PastListScreen;
