import { Profile } from "./Profile/Profile";
import { StatisticData } from "./Statistics/StatisticData";

import { Container } from "./App.styled";

import user from '../json/user.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <Container>
<Profile user = {user}/>
<StatisticData data = { data } title = 'upload stats' />
    </Container>
  );
};
