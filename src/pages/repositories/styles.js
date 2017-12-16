import { StyleSheet } from 'react-native';
import { colors } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 5,
    backgroundColor: colors.background,
  },
  loading: {
    marginTop: 20,
  },
  usernameContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  titleUsername: {
    fontWeight: 'bold',
  },
  iconGithub: {
    marginRight: 5,
  },
  empty: {
    textAlign: 'center',
    width: '100%',
  },
});

