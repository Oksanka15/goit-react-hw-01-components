import { FriendList } from "./FriendList/FriendList";
import friends from "./Data/friends.json";
import { Profile } from "./Profile/Profile";
import user from "./Data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Data/data.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./Data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<FriendList friends={friends}/>
<Statistics title="Upload stats" stats={data} />
<TransactionHistory items={transactions} />;
    </div>
  );
};
