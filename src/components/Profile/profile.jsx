import PropTypes from 'prop-types';
import {
   StyledUserProfile,
   StyledUserDescription,
   StyledUserAvatar,
   StyledUserName,
   StyledUserTag,
   StyledUserLocation, StyledUserStateList, StyledUserStateItem, StyledUserStateLabel,
} from './styled';


export const Profile = ({
                           username,
                           tag,
                           location,
                           avatar,
                           stats: { followers, views, likes },
                        }) => {
   return <StyledUserProfile className='profile'>
      <StyledUserDescription className='description'>
         <StyledUserAvatar src={avatar} alt={username + 'avatar'} className='avatar'></StyledUserAvatar>
         <StyledUserName className='name'>{username}</StyledUserName>
         <StyledUserTag className='tag'>{'@' + tag}</StyledUserTag>
         <StyledUserLocation className='location'>{location}</StyledUserLocation>
      </StyledUserDescription>


      <StyledUserStateList>
         <StyledUserStateItem key={followers}>
            <StyledUserStateLabel>Followers</StyledUserStateLabel>
            <StyledUserStateLabel>{followers}</StyledUserStateLabel>
         </StyledUserStateItem>
         <StyledUserStateItem key={views}>
            <StyledUserStateLabel>Views</StyledUserStateLabel>
            <StyledUserStateLabel>{views}</StyledUserStateLabel>
         </StyledUserStateItem>
         <StyledUserStateItem key={likes}>
            <StyledUserStateLabel>Likes</StyledUserStateLabel>
            <StyledUserStateLabel>{likes}</StyledUserStateLabel>
         </StyledUserStateItem>
      </StyledUserStateList>
   </StyledUserProfile>;
};


Profile.propTypes = {
   username: PropTypes.string.isRequired,
   tag: PropTypes.string,
   location: PropTypes.string,
   avatar: PropTypes.string,
   followers: PropTypes.number,
   views: PropTypes.number,
   likes: PropTypes.number,
};
