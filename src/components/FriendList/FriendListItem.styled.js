import styled from 'styled-components';

export const FriendItem = styled.li`
  background-color: whitesmoke;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border: 1px solid lightgray;
  padding: 10px 0;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${p => {
    if (p.active) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Avatar = styled.img``;
export const Name = styled.p`
  font-weight: 700;
`;
