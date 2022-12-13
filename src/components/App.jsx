import React  from 'react';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendlist';

import user  from '../data/user.json';
import data from '../data/data.json';
import friends  from '../data/friends.json';
// import transaction  from '../data/transactions.json';

export const App = () => {
   return  (
      <main>
      <Profile
      username={user.username}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
   />
   <Statistics title={data.title} stats={data}/>
         <FriendList friends={friends}/>
      </main>
);
};



