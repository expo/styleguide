import { PropsWithChildren } from 'react';
import { Platform, ScrollView } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

export function SafeScrollView({ children }: PropsWithChildren) {
  return (
    <ThemedView className="flex-1">
      <ScrollView
        className="px-6"
        contentContainerStyle={Platform.select({
          ios: { paddingBottom: 64, paddingTop: 64 },
          default: { paddingBottom: 32, paddingTop: 16 },
        })}>
        {children}
      </ScrollView>
    </ThemedView>
  );
}
