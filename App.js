import AppNavigator from './src/navigator/AppNavigator'
import LayoutRootView from './src/theme/LayoutRootView'
import { store } from './src/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  const persistor = persistStore(store)
  return (
    <LayoutRootView>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </LayoutRootView>
  )
}
