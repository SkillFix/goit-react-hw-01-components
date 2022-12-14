import styled from 'styled-components';

export const StyleTransactionTable = styled.table`
  margin: 0 auto;
  width: 600px;
  height: 600px;
  box-shadow: ${p => p.theme.shadows.card};
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  text-align: center;
  text-transform: capitalize;
  font-size: ${p => p.theme.fontSizes.m};
  //border-collapse: collapse;
  td {
    height: 12px;
  }

  th {
    background-color: ${p => p.theme.colors.background};
  }

  tbody tr:nth-child(even) {
    color: ${p => p.theme.colors.accent};
  }

  tbody tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

