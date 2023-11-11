import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { useDispatch } from 'react-redux'
import { updateNote, deleteNote } from '../store/notesReducer'
import { COLORS, LAYOUT } from '../theme'
import PopoverSelector from '../components/PopoverSelector'
import NoteInput from '../components/NoteInput'
import {
  ButtonContainer,
  SaveButton,
  DeleteButton
} from '../components/Buttons'

const AddNote = ({ navigation, route }) => {
  const item = route.params

  const [client, setClient] = useState(item.client)
  const [category, setCategory] = useState(item.category)
  const [note, setNote] = useState(item.desc)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const onUpdateNote = () => {
    if (!client || !category || !note) {
      setError(true)
      return
    }
    setError(false)
    dispatch(
      updateNote({
        id: item.id,
        category,
        client,
        desc: note
      })
    )
    navigation.goBack()
  }

  const onDeleteNote = () => {
    dispatch(deleteNote(item.id))
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
          note={note}
          setNote={setNote}
        />
        <NoteInput note={note} setNote={setNote} />
        <ButtonContainer keyboardVerticalOffset={50}>
          <SaveButton onSave={onUpdateNote} />
          <DeleteButton onDelete={onDeleteNote} />
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
