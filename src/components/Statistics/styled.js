import styled from 'styled-components';
export const StyledStatistics = styled.section`
  display: flex;
   align-items: center;
   flex-direction: column;
  width: 350px;
  height: 152px;
  box-shadow: ${p => p.theme.shadows.card};
`;
export const StyledStaticsTitle = styled.h2`
color: ${p => p.theme.colors.text};
   padding: 20px 0;
`;
export const StyledStaticsList = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const StyledStaticsItem = styled.li`
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

export const StyledStaticsLabel = styled.p`
   color: ${p => p.theme.colors.white};
`;
