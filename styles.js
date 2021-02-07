import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    bgimg: {
      flex: 1,
      resizeMode: 'stretch',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    img: {
      flex: 1,
      resizeMode: 'contain',
    }

  });

export default styles;