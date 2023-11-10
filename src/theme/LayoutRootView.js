import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'

export default function LayoutRootView({ children }) {
  const [fontsLoaded] = useFonts({
    ProductSansBold: require('../../assets/fonts/ProductSans-Bold.ttf'),
    ProductSansItalic: require('../../assets/fonts/ProductSans-Italic.ttf'),
    ProductSans: require('../../assets/fonts/ProductSans-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})