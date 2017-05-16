import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rowContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#d0d4db',
    borderRadius: 3,
    margin: 3,

  },
  textContainer: {
    marginLeft: 5,
    marginTop: 3,
    marginRight: 5
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 5,
    marginTop: 2,
    marginBottom: 3
  },
  timeText: {
    fontSize: 10,
    fontStyle: 'italic'
  }
});