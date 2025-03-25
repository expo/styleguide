import { shadows } from '@expo/styleguide-native';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeScrollView } from '@/components/ui/SafeScrollView';

export default function Effects() {
  const Container = Platform.OS === 'ios' ? SafeAreaView : ThemedView;
  return (
    <SafeScrollView>
      <Container>
        <ThemedText type="title">Shadows</ThemedText>
        <View className="flex mt-4 gap-10 items-center">
          <ThemedView className="box" style={[shadows.xs]}>
            <ThemedText>shadows.xs</ThemedText>
          </ThemedView>
          <ThemedView className="box" style={[shadows.sm]}>
            <ThemedText>shadows.sm</ThemedText>
          </ThemedView>
          <ThemedView className="box" style={[shadows.md]}>
            <ThemedText>shadows.md</ThemedText>
          </ThemedView>
          <ThemedView className="box" style={[shadows.lg]}>
            <ThemedText>shadows.lg</ThemedText>
          </ThemedView>
          <ThemedView className="box" style={[shadows.xl]}>
            <ThemedText>shadows.xl</ThemedText>
          </ThemedView>
        </View>
      </Container>
    </SafeScrollView>
  );
}
