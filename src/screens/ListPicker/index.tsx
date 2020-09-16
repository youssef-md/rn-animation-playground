// Inspiration: https://dribbble.com/shots/3431451-HUNGRY

import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { deviceHeight, deviceWidth } from '../../constants';

import { social } from './data';
import Item from './Item';
import { ITEM_HEIGHT } from './Item/styles';
import {
  Container,
  Heading,
  Line,
  FinishButton,
  FinishButtonText,
  accentColor,
} from './styles';

const List = React.forwardRef(({ showText, isAccent, style }, ref) => (
  <FlatList
    ref={ref}
    data={social}
    style={style}
    keyExtractor={({ name }) => name}
    contentContainerStyle={{
      paddingTop: showText ? 0 : deviceHeight / 2 - ITEM_HEIGHT / 2 - 100,
      paddingBottom: showText ? 0 : deviceHeight / 2 - ITEM_HEIGHT / 2,
      paddingHorizontal: 20,
    }}
    renderItem={({ item }) => {
      return <Item social={item} showText={showText} isAccent={isAccent} />;
    }}
  />
));

const ListPicker: React.FC = () => {
  const [index, setIndex] = useState(0);

  const accentRef = useRef();
  const darkRef = useRef();

  function handleDone() {
    alert(`Connect with: ${social[index].name.toUpperCase()}`);
  }

  return (
    <Container>
      {/* <Heading>Connect with...</Heading> */}

      <List ref={accentRef} isAccent style={StyleSheet.absoluteFillObject} />

      <List
        ref={darkRef}
        showText
        style={{
          position: 'absolute',
          backgroundColor: accentColor,
          width: deviceWidth,
          height: ITEM_HEIGHT,
          top: deviceHeight / 2 - ITEM_HEIGHT / 2 - 100,
        }}
      />

      {/* <Line />
      <FinishButton activeOpacity={0.8} onPress={handleDone}>
        <FinishButtonText>Done !</FinishButtonText>
      </FinishButton> */}
    </Container>
  );
};

export default ListPicker;
