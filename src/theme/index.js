import { Dimensions } from 'react-native'

const COLORS = {
  BRAND: '#F6AC19',
  WHITE: '#ffffff',
  BLACK: '#000000',
  GRAY: '#E6E6E6'
}

const LAYOUT = {
  'spacing-01': 2,
  'spacing-02': 4,
  'spacing-03': 8,
  'spacing-04': 12,
  'spacing-05': 16,
  'spacing-06': 24,
  'spacing-07': 32,
  'spacing-08': 40,
  'spacing-09': 48,
  'spacing-10': 60
}

const customScreenOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    backgroundColor: COLORS.BRAND
  },
  headerShown: true,
  headerBackTitleVisible: false,
  headerBackTitle: '',
  headerTintColor: COLORS.BLACK,
  headerTitleStyle: {
    fontFamily: "ProductSansBold",
    letterSpacing: 0.5
  }
}

const deviceWidth = Dimensions.get('window').width

export { COLORS, LAYOUT, customScreenOptions, deviceWidth }
