import PropTypes from 'prop-types';
import { ListItem } from './DataList.styled';
import { DataItem } from './DataItem';
import { StatData } from './DataItem.styled';

export const DataList = ({ data }) => {
  return (
    <ListItem>
      {data.map(data => (
        <StatData key={data.id}>
          <DataItem data={data} />
        </StatData>
      ))}
    </ListItem>
  );
};

ListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
