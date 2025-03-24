import { shadows, SnackLogo } from '@expo/styleguide-native';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Effects() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<SnackLogo color="#0a7ea4" style={styles.logo} />}>
      <ThemedText type="title">Shadows</ThemedText>
      <View style={styles.effectsContainer}>
        <ThemedView style={[styles.box, shadows.xs]}>
          <ThemedText>shadows.xs</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.box, shadows.sm]}>
          <ThemedText>shadows.sm</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.box, shadows.md]}>
          <ThemedText>shadows.md</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.box, shadows.lg]}>
          <ThemedText>shadows.lg</ThemedText>
        </ThemedView>
        <ThemedView style={[styles.box, shadows.xl]}>
          <ThemedText>shadows.xl</ThemedText>
        </ThemedView>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 100,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  effectsContainer: {
    flex: 1,
    gap: 24,
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: '100%',
    top: 80,
    left: 0,
    position: 'absolute',
  },
});
