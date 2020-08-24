import React from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { headphones } from './data';
import Item from './Item';
import Pagination from './Pagination';

const HeadphoneCarousel: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={headphones}
        keyExtractor={({ key }) => key}
        renderItem={({ index, item }) => <Item {...item} index={index} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Pagination data={headphones} />
    </Container>
  );
};

export default HeadphoneCarousel;
