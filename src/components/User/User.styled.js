import styled from 'styled-components';

export const Span = styled.span`
  background-color: ${({ isOrange }) => (isOrange ? 'orange' : 'transparent')};
  color: aqua;
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-weight: 500;
  color: red;

  &:hover ${Span} {
    background-color: green;
  }
`;
