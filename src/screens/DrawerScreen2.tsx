import styled from '@emotion/native';
import {Button} from 'dooboo-ui';
import {useNavigation} from 'expo-router';
import type {ReactElement} from 'react';
import React from 'react';

const Container = styled.View`
  flex: 1;
  background-color: green;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: blue;
  margin-bottom: 8px;
`;

function Page(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <StyledText testID="myText">Drawer Screen 2</StyledText>
      <Button
        // @ts-ignore
        onPress={(): void => navigation.openDrawer()}
        text="Open drawer"
      />
    </Container>
  );
}

export default Page;
