import {FriendItem} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  const { avatar, name, isOnline } = friends;

  return (
    <FriendItem>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendItem>
  );
};
