import Button from '@ant-design/react-native/lib/button'
import { Entypo } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { COLORS, LAYOUT, deviceWidth,  } from '../theme'

const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
)

const AddButton = ({ onAdd }) => (
  <Button type='default' style={styles.addButton} onPress={onAdd}>
    <Entypo name='add-to-list' size={28} />
  </Button>
)

const SaveButton = ({ onSave }) => (
  <Button type='default' style={styles.addButton} onPress={onSave}>
    <Entypo name='save' size={28} />
  </Button>
)

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right:  LAYOUT['spacing-06'],
    bottom: LAYOUT['spacing-10']
  },
  addButton: {
    width: deviceWidth * 0.15,
    height: deviceWidth * 0.15,
    borderRadius: '50%',
    borderWidth: 1.5,
    borderColor: COLORS.BLACK,
    backgroundColor:COLORS.GRAY
  }
})

export { AddButton, SaveButton, ButtonContainer }
