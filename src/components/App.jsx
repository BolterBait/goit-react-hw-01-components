import { Profile } from "./Profile/Profile";
import { Container } from "./App.styled";
import { DataList } from "./Statistics/DataList";
// import { Statistics } from "./Statistics/Statistics";
import user from '../json/user.json';
import data from '../json/data.json';

export const App = () => {
  return (
    <Container>
<Profile user = {user}/>
{/* <Statistics data = { data }></Statistics> */}
<DataList data = { data } />
    </Container>
  );
};
