import { StyleSheet, Text, View, TextInput } from 'react-native'
import Popover from '@ant-design/react-native/lib/popover'
import data from '../constants/constants.json'
import { COLORS, LAYOUT, deviceWidth } from '../theme'

const PopoverSelector = ({ client, setClient, category, setCategory }) => {
  const clientsOverlay = data.clients.map((i, index) => (
    <Popover.Item key={index} value={i} style={styles.popoverItem}>
      <Text style={{ ...styles.descTxt, fontSize: 14 }}>{i}</Text>
    </Popover.Item>
  ))

  const categoriesOverlay = data.categories.map((i, index) => (
    <Popover.Item key={index} value={i} style={styles.popoverItem}>
      <Text style={{ ...styles.descTxt, fontSize: 14 }}>{i}</Text>
    </Popover.Item>
  ))

  return (
    <View>
      <Popover
        overlay={clientsOverlay}
        onSelect={setClient}
        placement={'bottom'}
      >
        <View style={styles.row}>
          <Text style={styles.titleTxt}>Client:</Text>
          <Text style={styles.descTxt}>{client}</Text>
          <Text style={styles.descTxt}>{!client ? 'Please Select' : ''}</Text>
        </View>
      </Popover>

      <View style={styles.divider} />

      <Popover
        overlay={categoriesOverlay}
        onSelect={setCategory}
        placement={'bottom'}
      >
        <View style={styles.row}>
          <Text style={styles.titleTxt}>Category:</Text>
          <Text style={styles.descTxt}>{category}</Text>
          <Text style={styles.descTxt}>{!category ? 'Please Select' : ''}</Text>
        </View>
      </Popover>

      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  popoverItem: {
    width: deviceWidth * 0.5,
    alignItems: 'center',
    paddingVertical: LAYOUT['spacing-03']
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleTxt: {
    fontFamily: 'ProductSansBold',
    letterSpacing: 0.5,
    fontSize: 18
  },
  descTxt: {
    fontFamily: 'ProductSansItalic',
    letterSpacing: 0.5,
    fontSize: 18,
    color: COLORS.TEXTGREY
  },
  divider: {
    marginVertical: LAYOUT['spacing-05'],
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.GRAY
  }
})

export default PopoverSelector
