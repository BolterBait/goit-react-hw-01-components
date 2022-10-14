import { Card, Avatar, UserName, UserTag, UserLocation, Img, StatsList,
  StatsItem, } from "./Profile.styled";
export const Profile = ({user}) => {
    const {username, tag, location, avatar, stats } = user;
       
    return <Card>
    <Avatar>
      <Img
        src={avatar}
        alt="User avatar"
      />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Avatar>
  
    <StatsItem>
      <StatsList>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </StatsList>
      <StatsList>
        <span>Views</span>
        <span>{stats.views}</span>
      </StatsList>
      <StatsList>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </StatsList>
    </StatsItem>
  </Card>;
};