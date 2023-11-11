import { StyleSheet, Text, View, TextInput } from 'react-native'

import { COLORS, LAYOUT, deviceHeight } from '../theme'

const NoteInput = ({ note, setNote }) => {
  return (
    <View>
      <Text style={styles.titleTxt}>Note:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          editable
          multiline
          numberOfLines={10}
          maxLength={500}
          onChangeText={setNote}
          value={note}
          style={styles.input}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: COLORS.GRAY,
    borderWidth: 0.5,
    borderRadius: 6,
    marginVertical: LAYOUT['spacing-03']
  },
  input: {
    height: deviceHeight * 0.3,
    padding: LAYOUT['spacing-04'],
    lineHeight: 24,
    fontFamily: 'ProductSans',
    letterSpacing: 0.5
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
  }
})

export default NoteInput
