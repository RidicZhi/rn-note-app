import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { saveNewNote } from '../store/notesReducer'

const AddNote = ({ navigation, route }) => {
  const dispatch = useDispatch()

  const onAdd = () => {
    dispatch(saveNewNote({
      id: '2',
      category: 'Active Duty',
      client: 'SA',
      desc: 'Hello I am coding!'
    }))
  }

  return (
    <View style={styles.container}>
      <Text>AddNote!</Text>
      <TouchableOpacity onPress={onAdd}>
        <Text>add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddNote
