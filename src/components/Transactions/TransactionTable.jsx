import { RowName, TableHead } from './TransactionTable.styled';

export const TransactionTable = () => {
  return (
    <TableHead>
      <tr>
        <RowName>Type</RowName>
        <RowName>Amount</RowName>
        <RowName>Currency</RowName>
      </tr>
    </TableHead>
  );
};
