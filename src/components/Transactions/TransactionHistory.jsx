import PropTypes from 'prop-types';
import { TransactionTable } from './TransactionTable';
import { TableBody, Table, RowData, Row } from './TransactionTable.styled';


export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TransactionTable />
      <TableBody>
        {items.map(item => (
          <Row key={item.id}>
            <RowData>{item.type}</RowData>
            <RowData>{item.amount}</RowData>
            <RowData>{item.currency}</RowData>
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
