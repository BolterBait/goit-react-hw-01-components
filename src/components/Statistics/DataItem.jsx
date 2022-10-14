import PropTypes from 'prop-types';
export const DataItem = ({
    data: {lable, percentage},
}) => { 
    return(<span >{ lable }</span>,
           <span >{ percentage }%</span>
   
);
    };

DataItem.propTypes = {
data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}),
};