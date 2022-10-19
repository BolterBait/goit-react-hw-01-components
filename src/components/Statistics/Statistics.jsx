import { DataList } from './DataList';
import { StatWraper, PageTitle } from './Statistics.styled';

export const Statistics = ({ title = 'upload stats', data }) => {
  return (
    <StatWraper>
      {title && <PageTitle>{title}</PageTitle>}
      <DataList data={data} />
    </StatWraper>
  );
};
