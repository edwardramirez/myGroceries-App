import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import uuid from 'react-native-uuid';

import GroceriesList from '../components/GroceriesList';

const MainScreen = ({navigation}) => {
  const [isModal, setModal] = useState(false);
  const [text, setText] = useState();
  const [data, setData] = useState([]);

  const renderItem = itemData => {
    return <GroceriesList itemName={itemData.item.item} />;
  };

  const addItem = newText => {
    const newArray = [...data, {id: uuid.v4(), item: newText}];
    setData(newArray);
    setText();
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Groceries List</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModal(true);
          }}>
          <FontAwesome5 name={'plus'} size={responsiveFontSize(4)} />

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
                <TouchableOpacity
                  onPress={() => {
                    addItem(text);
                  }}>
                  <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id?.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{alignItems: 'center'}}>
              <Text>Add Items!</Text>
            </View>
          }
        />
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
    padding: responsiveFontSize(1),
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
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
    borderRadius: 12,
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
