import PropTypes from 'prop-types';
import { StatValue, StatPercentage } from './DataItem.styled';

export const DataItem = ({ data: { label, percentage } }) => {
  return (
    <>
      <StatValue>{label}</StatValue>
      <StatPercentage>{percentage}%</StatPercentage>
    </>
  );
};

DataItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
