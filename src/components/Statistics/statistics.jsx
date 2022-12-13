import PropTypes from 'prop-types';
import {

   StyledStaticsItem,
   StyledStaticsLabel,
   StyledStaticsList,
   StyledStaticsTitle,
   StyledStatistics,
} from './styled';


export const Statistics = ({ title, stats }) => {
   return (<StyledStatistics title={title} stats={stats}>
      <StyledStaticsTitle>Upload stats</StyledStaticsTitle>

      <StyledStaticsList>
         {stats.map(({ id, label, percentage }) => (
            <StyledStaticsItem key={id}>
               <StyledStaticsLabel>{label}</StyledStaticsLabel>
               <StyledStaticsLabel>{percentage + '%'}</StyledStaticsLabel>
            </StyledStaticsItem>))}
      </StyledStaticsList>
   </StyledStatistics>);
};


Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.string,
      percentage: PropTypes.number
   })).isRequired,
}
