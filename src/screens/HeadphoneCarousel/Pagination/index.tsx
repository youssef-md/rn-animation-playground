import React from 'react';

import { Container, Circle } from './styles';

interface Data {
  key: string;
  color: string;
}

interface PaginationProps {
  scrollX: number;
  data: Data[];
}

const Pagination: React.FC<PaginationProps> = ({ data, scrollX }) => {
  return (
    <Container>
      {data.map(({ key, color }) => (
        <Circle key={key} color={color} />
      ))}
    </Container>
  );
};

export default Pagination;
