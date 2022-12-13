import styled from 'styled-components';

export const StyledUserProfile = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   padding: 20px;
   width: 350px;
   height: 500px;
   box-shadow: ${p => p.theme.shadows.card};
`;
export const StyledUserDescription = styled.div`
   width: 260px;
   height: 400px;
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow: hidden;
`;
export const StyledUserAvatar = styled.img`
   width: 140px;
   height: 140px;
   border-radius: 50%;
   margin: 0 auto 50px auto;
   background-color: ${p => p.theme.colors.accent};
`;
export const StyledUserName = styled.p`
   color: ${p => p.theme.colors.text};
   font-size: ${p => p.theme.fontSizes.l};
   margin-bottom: 20px;
`;

export const StyledUserTag = styled.p`
   color: ${p => p.theme.colors.text};
   font-size: ${p => p.theme.fontSizes.regular};
   margin-bottom: 10px;
`;
export const StyledUserLocation = styled.p`
   color: ${p => p.theme.colors.text};
   font-size: ${p => p.theme.fontSizes.regular};
`;
export const StyledUserStateList = styled.ul`
  display: flex;
  width: 100%;
`;
export const StyledUserStateItem = styled.li`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 80px;
   border: 1px solid ${p => p.theme.colors.white};
   border-radius: 5px;
   background-color: ${p => p.theme.colors.accent};
`;

export const StyledUserStateLabel = styled.span`
   color: ${p => p.theme.colors.white};
`;

