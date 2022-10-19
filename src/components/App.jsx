import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";

import { Container } from "./App.styled";

import user from '../json/user.json';
import data from '../json/data.json';
import friends from "../json/friends.json";
import transactions from '../json/transactions.json'



export const App = () => {
  return (
    <Container>
<Profile user = {user}/>
<Statistics data = { data } />
<FriendList friends={friends} />
<TransactionHistory items = {transactions}/>
   </Container>
  );
};
