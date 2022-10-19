import styled from 'styled-components';

export const StatData = styled.li`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  border: 1px solid grey;
`;

export const StatValue = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const StatPercentage = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
