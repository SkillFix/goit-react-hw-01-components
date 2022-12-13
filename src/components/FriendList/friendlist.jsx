import PropTypes from 'prop-types';
import {StyledFriendList} from './styled';
import {FriendListItem} from '../FriendListItem/FriendListItem'
export const FriendList = ({ friends }) => (
   <StyledFriendList>
      {friends.map(friend => (
         <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
         />
      ))}
   </StyledFriendList>
);

FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
