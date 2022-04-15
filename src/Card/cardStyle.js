import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
    margin: 4,
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color:"black"
  },
  price: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize:17   
  },
  inner_container: {
    padding: 10,
    paddingBottom: 0,
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});