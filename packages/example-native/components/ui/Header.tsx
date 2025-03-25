import { typography } from '@expo/styleguide-native';
import { type BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export function Header({ borderColor, ...props }: BottomTabHeaderProps & { borderColor: string }) {
  return (
    <SafeAreaView
      className="px-6 pb-4 border-b-hairline bg-transparent"
      style={{ borderColor }}
      edges={{ bottom: 'off', top: 'additive' }}
      {...props}>
      {Platform.OS === 'ios' ? (
        <BlurView tint="systemChromeMaterial" intensity={80} style={StyleSheet.absoluteFill} />
      ) : (
        <ThemedView style={StyleSheet.absoluteFill} />
      )}
      <ThemedText style={[typography.headers.default.small.huge, { color: '#0a7ea4' }]}>
        {props.options.title}
      </ThemedText>
    </SafeAreaView>
  );
}
