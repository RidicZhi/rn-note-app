import AppNavigator from './src/navigator/AppNavigator'
import LayoutRootView from './src/theme/LayoutRootView'

export default function App() {
  return (
    <LayoutRootView>
      <AppNavigator />
    </LayoutRootView>
  )
}
