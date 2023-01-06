import PropTypes from 'prop-types';
import {StatisticsStyled, SectionTitle, StatListStyled, StatItemPercentage, StatItem, StatItemLabel } from './Statistics.styled'; 

export const Statistics = ({title, stats}) => {
    return (
      <StatisticsStyled>
        <StatListStyled>
     <SectionTitle>{title}</SectionTitle>
  {stats.map(({id, label, percentage}) =>{
    return ( 
      <StatItem key={id}>
        <StatItemLabel>{label}</StatItemLabel>
        <StatItemPercentage>{percentage}&#37;</StatItemPercentage>
      </StatItem>

    )
  }
  )}
</StatListStyled>
</StatisticsStyled>)
}

Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  })),
}