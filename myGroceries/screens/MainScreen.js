import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import GroceriesList from '../components/GroceriesList';

const MainScreen = () => {
  const [isModal, setModal] = useState(false);
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Groceries List</Text>
      </View>
      <View style={styles.listContainer}>
        <GroceriesList />
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <FontAwesome5 name={'plus-circle'} size={responsiveFontSize(8)} />

          <Modal isVisible={isModal} onBackdropPress={() => setModal(false)}>
            <View style={styles.modalContainer}>
              <View>
                <Text style={styles.modalHeaderContainer}>Add Item:</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={setText}
                  value={text}
                  placeholder="eggs, bananas, ham, bread etc..."
                  keyboardType="default"
                />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => setModal(false)}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
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
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: responsiveFontSize(2),
    justifyContent: 'space-evenly',
  },
  modalHeaderContainer: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: responsiveFontSize(2),
    borderWidth: 1,
    borderRadius: 20,
  },
  inputStyle: {paddingHorizontal: responsiveFontSize(1)},
  buttonsContainer: {
    paddingTop: responsiveFontSize(2),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#0E86D4',
  },
});

export default MainScreen;
