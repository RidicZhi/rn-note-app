import Button from '@ant-design/react-native/lib/button'
import { Entypo, AntDesign } from '@expo/vector-icons'
import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { COLORS, LAYOUT, deviceWidth } from '../theme'

const ButtonContainer = ({ children, keyboardVerticalOffset = 0 }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={keyboardVerticalOffset}
    style={styles.buttonContainer}
  >
    {children}
  </KeyboardAvoidingView>
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

const DeleteButton = ({ onDelete }) => (
  <Button type='warning' style={styles.deleteButton} onPress={onDelete}>
    <AntDesign name='delete' size={24} color={COLORS.WHITE} />
  </Button>
)

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: LAYOUT['spacing-06'],
    bottom: LAYOUT['spacing-10']
  },
  addButton: {
    width: deviceWidth * 0.15,
    height: deviceWidth * 0.15,
    borderRadius: '50%',
    borderWidth: 1.5,
    borderColor: COLORS.BLACK,
    backgroundColor: COLORS.GRAY
  },
  deleteButton: {
    width: deviceWidth * 0.15,
    height: deviceWidth * 0.15,
    borderRadius: '50%',
    borderWidth: 1.5,
    borderColor: COLORS.GRAY,
    backgroundColor: COLORS.WARNING,
    marginTop: LAYOUT['spacing-05']
  }
})

export { AddButton, SaveButton, DeleteButton, ButtonContainer }
