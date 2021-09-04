import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import GroceriesList from '../components/GroceriesList';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groceries List</Text>
      </View>
      <View style={styles.listContainer}>
        <GroceriesList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    backgroundColor: 'blue',
    marginTop: '10%',
    marginHorizontal: responsiveScreenWidth(4),
    padding: responsiveFontSize(1),
    borderWidth: 1,
    borderRadius: 20,
  },
  headerText: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: responsiveFontSize(2),
  },
});

export default MainScreen;
