import {FriendItem, Status, Avatar, Name} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  
  return (
    <FriendItem>
      <Status active = {isOnline}/>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
