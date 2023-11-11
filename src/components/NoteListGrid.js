import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { LAYOUT } from '../theme'

const NoteListGrid = ({ notes, navigation }) => {
  const renderItem = ({ item }) => {
    const onSelectNote = () => {
      navigation.navigate('editNote', item)
    }

    return (
      <TouchableOpacity
        onPress={onSelectNote}
        key={item.id}
        style={styles.gridContainer}
      >
        <View style={styles.titleRow}>
          <Text style={styles.categoryTxt}>{item.category}</Text>
          <Text style={styles.titleTxt}>{item.client}</Text>
        </View>
        <Text style={styles.descTxt}>{item.desc}</Text>
      </TouchableOpacity>
    )
  }

  if (notes.length < 1)
    return (
      <View style={styles.hintContainer}>
        <Text style={styles.hintTxt}>You don't have any note. Add one!👇🏼</Text>
      </View>
    )

  return (
    <FlatList
      data={notes}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default NoteListGrid

const styles = StyleSheet.create({
  gridContainer: {
    borderWidth: 1.5,
    borderRadius: 6,
    padding: LAYOUT['spacing-05'],
    marginBottom: LAYOUT['spacing-05']
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: LAYOUT['spacing-03']
  },
  categoryTxt: {
    fontFamily: 'ProductSansBold',
    letterSpacing: 0.5,
    fontSize: 16
  },
  titleTxt: {
    fontFamily: 'ProductSansItalic',
    letterSpacing: 0.5,
    fontSize: 16
  },
  descTxt: {
    fontFamily: 'ProductSans',
    letterSpacing: 0.5,
    fontSize: 14
  },
  hintContainer: {
    marginTop: LAYOUT['spacing-06'],
    alignItems: 'center'
  },
  hintTxt: {
    fontFamily: 'ProductSansItalic',
    letterSpacing: 0.5,
    fontSize: 16
  }
})
