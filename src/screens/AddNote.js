import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useDispatch } from 'react-redux'
import { saveNewNote } from '../store/notesReducer'
import { COLORS, LAYOUT } from '../theme'
import PopoverSelector from '../components/PopoverSelector'
import NoteInput from '../components/NoteInput'
import { ButtonContainer, SaveButton } from '../components/Buttons'

const AddNote = ({ navigation, route }) => {
  const [client, setClient] = useState()
  const [category, setCategory] = useState()
  const [note, setNote] = useState()
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const onSave = () => {
    if (!client || !category || !note) {
      setError(true)
      return
    }
    setError(false)
    dispatch(
      saveNewNote({
        id: Date.now(),
        category,
        client,
        desc: note
      })
    )
    navigation.goBack()
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <PopoverSelector
          client={client}
          setClient={setClient}
          category={category}
          setCategory={setCategory}
        />
        <NoteInput note={note} setNote={setNote} />
        <ButtonContainer keyboardVerticalOffset={120}>
          <SaveButton onSave={onSave} />
        </ButtonContainer>
        {error && <Text style={styles.errTxt}>Tell me more~🤨</Text>}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: LAYOUT['spacing-06'],
    backgroundColor: COLORS.WHITE,
    height: '100%',
    width: '100%'
  },
  errTxt: {
    fontFamily: 'ProductSansItalic',
    textAlign: 'center',
    color: 'red',
    letterSpacing: 0.5,
    fontSize: 16
  }
})

export default AddNote
