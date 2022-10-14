import { Profile } from "./Profile/Profile";
import { Container } from "./App.styled";
import { DataList } from "./Statistics/DataList";
import user from '../json/user.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <Container>
<Profile user = {user}/>
<DataList data = { data } />
    </Container>
  );
};
