import { StyleSheet } from 'react-native';
import { fonts, colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  welcomeTitle: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: 'bold',
  },
  welcomeDescription: {
    fontSize: fonts.regular,
    color: colors.white,
    marginTop: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    lineHeight: 21,
  },
  input: {
    backgroundColor: colors.white,
    alignSelf: 'stretch', // Uses screen full width,
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    fontSize: fonts.small,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.secundary,
    alignSelf: 'stretch', // Uses screen full width
    height: 44,
    borderRadius: 3,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.small,
    fontWeight: 'bold',
  },
  error: {
    color: colors.error,
    fontSize: fonts.small,
    marginTop: 10,
  },
});

