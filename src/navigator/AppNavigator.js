import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NotesHome from '../screens/NotesHome'
import AddNote from '../screens/AddNote'
import { customScreenOptions } from '../theme'

const Stack = createStackNavigator()
const navigationRef = React.createRef()



const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'noteList'}>

        <Stack.Screen
          name={'notesHome'}
          component={NotesHome}
          options={{
            ...customScreenOptions,
            title: 'Notes'
          }}
        />

        <Stack.Screen
          name={'addNote'}
          component={AddNote}
          options={{
            ...customScreenOptions,
            title: 'Add Note'
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator