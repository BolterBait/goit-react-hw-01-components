import { DataList } from './DataList';
import { StatWraper, PageTitle } from './StatisticData.styled';

export const StatisticData = ({ title, data }) => {
    return <StatWraper>{ title && <PageTitle>{ title }</PageTitle> }
    <DataList data = { data }/></StatWraper>
  };
  
