import { typography } from '@expo/styleguide-native';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeScrollView } from '@/components/ui/SafeScrollView';

const largeHeaders = typography.headers.default.large;
const headers = typography.headers.default.medium;
const smallHeaders = typography.headers.default.small;

export default function Typography() {
  const Container = Platform.OS === 'ios' ? SafeAreaView : ThemedView;
  return (
    <SafeScrollView>
      <Container className="gap-4">
        <ThemedText type="title">Headers</ThemedText>
        <ThemedView className="gap-2">
          <ThemedText style={largeHeaders.huge}>default.large.huge</ThemedText>
          <ThemedText style={largeHeaders.h1}>default.large.h1</ThemedText>
          <ThemedText style={largeHeaders.h2}>default.large.h2</ThemedText>
          <ThemedText style={largeHeaders.h3}>default.large.h3</ThemedText>
          <ThemedText style={largeHeaders.h4}>default.large.h4</ThemedText>
          <ThemedText style={largeHeaders.h5}>default.large.h5</ThemedText>
          <ThemedText style={largeHeaders.h6}>default.large.h6</ThemedText>
        </ThemedView>
        <ThemedView className="gap-2">
          <ThemedText style={headers.huge}>default.medium.huge</ThemedText>
          <ThemedText style={headers.h1}>default.medium.h1</ThemedText>
          <ThemedText style={headers.h2}>default.medium.h2</ThemedText>
          <ThemedText style={headers.h3}>default.medium.h3</ThemedText>
          <ThemedText style={headers.h4}>default.medium.h4</ThemedText>
          <ThemedText style={headers.h5}>default.medium.h5</ThemedText>
          <ThemedText style={headers.h6}>default.medium.h6</ThemedText>
        </ThemedView>
        <ThemedView className="gap-2">
          <ThemedText style={smallHeaders.huge}>default.small.huge</ThemedText>
          <ThemedText style={smallHeaders.h1}>default.small.h1</ThemedText>
          <ThemedText style={smallHeaders.h2}>default.small.h2</ThemedText>
          <ThemedText style={smallHeaders.h3}>default.small.h3</ThemedText>
          <ThemedText style={smallHeaders.h4}>default.small.h4</ThemedText>
          <ThemedText style={smallHeaders.h5}>default.small.h5</ThemedText>
          <ThemedText style={smallHeaders.h6}>default.small.h6</ThemedText>
        </ThemedView>
      </Container>
    </SafeScrollView>
  );
}
