import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Image, View, ScrollView} from 'react-native';
import React from 'react';
import type {ReactElement, ReactNode} from 'react';
import {IC_MASK} from '../../src/utils';
import {Tabs, useRouter} from 'expo-router';
import Header from '../../src/uis/Header';

import {Drawer} from 'expo-router/drawer';
import {DrawerItem} from '@react-navigation/drawer';
import type {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function CustomDrawerContent({drawerPosition, navigation}: any): ReactElement {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={{flex: 1}}
    >
      <DrawerItem
        label="Drawer Screen 1"
        onPress={(): void => {
          navigation.navigate('(home)');
          // router.replace('drawer/screen1');
        }}
      />
      <DrawerItem
        label="Drawer Screen 2"
        onPress={(): void => {
          navigation.navigate('screen2');
        }}
      />
      <DrawerItem
        label="Close"
        onPress={(): void => {
          navigation.closeDrawer();
        }}
      />

      <DrawerItem
        label="Back"
        onPress={(): void => {
          router.replace('/');
        }}
      />
    </ScrollView>
  );
}

export default function Layout(): ReactNode {
  return (
    <Drawer
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props: DrawerContentComponentProps): ReactElement => (
        <CustomDrawerContent drawerPosition={undefined} {...props} />
      )}
    />
  );
}
