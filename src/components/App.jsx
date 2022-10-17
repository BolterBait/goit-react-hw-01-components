import { Profile } from "./Profile/Profile";
import { StatisticData } from "./Statistics/StatisticData";
import { FriendList } from "./FriendList/FriendList";

import { Container } from "./App.styled";

import user from '../json/user.json';
import data from '../json/data.json';
import friends from "../json/friends.json";


export const App = () => {
  return (
    <Container>
<Profile user = {user}/>
<StatisticData data = { data } title = 'upload stats' />
<FriendList friends={friends} />
    </Container>
  );
};
