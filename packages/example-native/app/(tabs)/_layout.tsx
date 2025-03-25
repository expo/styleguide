import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Header } from '@/components/ui/Header';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const borderColor = useThemeColor({}, 'border');

  return (
    <Tabs
      screenOptions={{
        header: (props: BottomTabHeaderProps) => <Header borderColor={borderColor} {...props} />,
        headerTransparent: Platform.OS === 'ios',
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Typography',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="textformat.size" color={color} />,
        }}
      />
      <Tabs.Screen
        name="effects"
        options={{
          title: 'Effects',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wand.and.rays" color={color} />,
        }}
      />
    </Tabs>
  );
}
