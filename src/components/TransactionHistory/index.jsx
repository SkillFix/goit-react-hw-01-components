import PropTypes from 'prop-types';
import { StyleTransactionTable } from './styled';

export const TransactionHistory = ({ items }) => {
  return <StyleTransactionTable>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>

    <tbody>

    {items.map(({type, amount, currency, id }) => (
      <tr key={id}>
        <td>{ type }</td>
        <td>{ amount }</td>
        <td>{ currency }</td>
      </tr>))}

    </tbody>
  </StyleTransactionTable>;
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id:PropTypes.string,
  }))
}

