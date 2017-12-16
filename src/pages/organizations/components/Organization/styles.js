import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from 'styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: ((width / 2) - 30),
    elevation: 1,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
});

