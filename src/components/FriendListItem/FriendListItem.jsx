import PropTypes from 'prop-types';
import { StyledFriendName, StyledFriendsItem , StyledFriendStatus, StyledFriendAvatar} from './styled';



export const FriendListItem = ({ avatar, name, isOnline }) => (
   <StyledFriendsItem>
      <StyledFriendStatus isOnline={isOnline}></StyledFriendStatus>
      <StyledFriendAvatar src={avatar} alt={name + ' avatar'} width="48" />
      <StyledFriendName>{name}</StyledFriendName>
   </StyledFriendsItem>
);


FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
};
