import { Logo, typography } from '@expo/styleguide-native';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Typography() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Logo color="#0a7ea4" style={styles.logo} />}>
      <ThemedText type="title">Headers</ThemedText>
      <ThemedView style={styles.elementContainer}>
        <ThemedText style={typography.headers.default.large.huge}>default.large.huge</ThemedText>
        <ThemedText style={typography.headers.default.large.h1}>default.large.h1</ThemedText>
        <ThemedText style={typography.headers.default.large.h2}>default.large.h2</ThemedText>
        <ThemedText style={typography.headers.default.large.h3}>default.large.h3</ThemedText>
        <ThemedText style={typography.headers.default.large.h4}>default.large.h4</ThemedText>
        <ThemedText style={typography.headers.default.large.h5}>default.large.h5</ThemedText>
        <ThemedText style={typography.headers.default.large.h6}>default.large.h6</ThemedText>
      </ThemedView>
      <ThemedView style={styles.elementContainer}>
        <ThemedText style={typography.headers.default.medium.huge}>default.medium.huge</ThemedText>
        <ThemedText style={typography.headers.default.medium.h1}>default.medium.h1</ThemedText>
        <ThemedText style={typography.headers.default.medium.h2}>default.medium.h2</ThemedText>
        <ThemedText style={typography.headers.default.medium.h3}>default.medium.h3</ThemedText>
        <ThemedText style={typography.headers.default.medium.h4}>default.medium.h4</ThemedText>
        <ThemedText style={typography.headers.default.medium.h5}>default.medium.h5</ThemedText>
        <ThemedText style={typography.headers.default.medium.h6}>default.medium.h6</ThemedText>
      </ThemedView>
      <ThemedView style={styles.elementContainer}>
        <ThemedText style={typography.headers.default.small.huge}>default.small.huge</ThemedText>
        <ThemedText style={typography.headers.default.small.h1}>default.small.h1</ThemedText>
        <ThemedText style={typography.headers.default.small.h2}>default.small.h2</ThemedText>
        <ThemedText style={typography.headers.default.small.h3}>default.small.h3</ThemedText>
        <ThemedText style={typography.headers.default.small.h4}>default.small.h4</ThemedText>
        <ThemedText style={typography.headers.default.small.h5}>default.small.h5</ThemedText>
        <ThemedText style={typography.headers.default.small.h6}>default.small.h6</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    gap: 12,
  },
  elementContainer: {
    gap: 8,
  },
  logo: {
    height: 120,
    width: '100%',
    top: 80,
    left: 0,
    position: 'absolute',
  },
});
