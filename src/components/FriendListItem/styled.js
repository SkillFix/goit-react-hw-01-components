import styled from 'styled-components';

export const StyledFriendsItem = styled.li`
  width: 100%;
  height: 70px;

  display: flex;
  padding-left: 60px;
  align-items: center;
  box-shadow: ${p => p.theme.shadows.card};
  background-color: ${p => p.theme.colors.background};
`;
export const StyledFriendStatus = styled.span`
   width: 20px;
   height: 20px;
   border-radius: ${p => p.theme.radii.round};
   background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
`;
export const StyledFriendAvatar = styled.img`
   background-color: ${p => p.theme.colors.accent};
   border-radius: ${p => p.theme.radii.normal};
   padding: ${p => p.theme.space[2]}px;
   margin: 0 20px;
`;
export const StyledFriendName = styled.p`
   color: ${p => p.theme.colors.text};
   margin: 0 auto;
`;
