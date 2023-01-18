import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  font-size: larger;
  color: snow;
  text-shadow: 1px 1px 1px darkslateblue;
  width: 120px;
  line-height: 2rem;
  background: pink;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 2px 2px rebeccapurple;
  cursor: pointer;
  transition: all 150ms ease;
  &:hover,
  &:focus {
    background: blueviolet;
    box-shadow: 2px 5px 5px darkorchid;
  }
`;
