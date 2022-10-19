import PropTypes from 'prop-types';
import { Row } from './TransactionItem.styled';
// import { TransactionItem } from './TransactionItem';
import { TransactionTable } from './TransactionTable';
import { TableBody, Table } from './TransactionTable.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TransactionTable />
      <TableBody>
      {items.map(item => (
       <Row key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </Row>
        
      ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
