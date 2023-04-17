import type {ReactNode} from 'react';
import {Slot, Stack, Tabs} from 'expo-router';
import {ThemeProvider} from 'dooboo-ui';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';
import {IC_MASK} from '../src/utils';
import Header from '../src/uis/Header';

export type BottomTabParamList = {
  default: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

export type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = 'default',
> = BottomTabNavigationProp<BottomTabParamList, T>;

const TabBarIcon = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 24 : 18,
        height: focused ? 24 : 18,
      }}
      source={IC_MASK}
    />
  );
};

export default function RootLayout(): ReactNode {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      </Stack>
    </ThemeProvider>
  );
}
