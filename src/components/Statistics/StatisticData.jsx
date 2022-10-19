import { DataList } from './DataList';
import { StatWraper, PageTitle } from './StatisticData.styled';

export const StatisticData = ({ title = "upload stats", data }) => {
    return <StatWraper>{ title && <PageTitle>{ title }</PageTitle> }
    <DataList data = { data }/></StatWraper>
  };
  
