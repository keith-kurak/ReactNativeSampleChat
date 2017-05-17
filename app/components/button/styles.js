import { StyleSheet } from 'react-native';

import {primaryColor} from '../../config/common-styles';

export default StyleSheet.create({

  smallSpace: {
    margin: 5
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  circleArea: {
    width: 60,
    height: 60,
    borderRadius: 60/2
  },

  buttonStyle: {
    backgroundColor: primaryColor,
    borderColor: 'black',
    borderWidth: .5
  },

  buttonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  }
});