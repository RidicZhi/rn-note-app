import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const NotesHome = ({ navigation }) => {
  const onAdd = () => {
    navigation.navigate('addNote')
  }
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'ProductSansItalic'}}>NoteList</Text>
      <StatusBar style='auto' />

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

export default NotesHome