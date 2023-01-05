import { FriendList } from "./FriendList/FriendList";
import friends from "./Data/friends.json";
import { Profile } from "./Profile/Profile";
import user from "./Data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Data/data.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<FriendList friends={friends}/>
<Statistics title="Upload stats" stats={data} />

    </div>
  );
};
