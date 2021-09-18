import * as React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './styles';

export default function HomeScreen({navigation}) {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        title="Just go to second screen"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </Container>
  );
}
