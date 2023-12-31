import { StyleSheet, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { LAYOUT, COLORS } from '../theme'
import NoteListGrid from '../components/NoteListGrid'
import { ButtonContainer, AddButton } from '../components/Buttons'

const NotesHome = ({ navigation }) => {
  const noteList = useSelector((state) => state.noteList)

  const onAdd = () => {
    navigation.navigate('addNote')
  }

  return (
    <SafeAreaView style={styles.safeAreaBg}>
      <View style={styles.container}>
        <NoteListGrid notes={noteList} navigation={navigation} />
        <ButtonContainer>
          <AddButton onAdd={onAdd} />
        </ButtonContainer>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaBg: {
    backgroundColor: COLORS.WHITE,
  },
  container: {
    padding: LAYOUT['spacing-06'],
    backgroundColor: COLORS.WHITE,
    height: '100%',
    width: '100%'
  }
})

export default NotesHome
