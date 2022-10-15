import PropTypes from 'prop-types';
import { ListItem } from "./DataList.styled";
import { DataItem } from "./DataItem";
import { StatData } from './DataItem.styled';

export const DataList = ({ data }) => {return (<ListItem>
  {data.map(data =>(<StatData key= { data.id }>
      <DataItem data = { data } />
    </StatData>
    ))}
     </ListItem>);
};
    
ListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired,})),};




    
    // {/* <li class="item">
    //   <span class="el">.mp3</span>
    //   <span class="percentage">14%</span>
    // </li>
    // <li class="item">
    //   <span class="label">.pdf</span>
    //   <span class="percentage">41%</span>
    // </li>
    // <li class="item">
    //   <span class="label">.mp4</span>
    //   <span class="percentage">12%</span>
    // </li> */}
 