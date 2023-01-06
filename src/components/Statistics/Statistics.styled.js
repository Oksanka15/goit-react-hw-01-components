import { default as styled } from 'styled-components';

export const StatisticsStyled = styled.section`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px 4px 12px 12px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const StatListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 12px 12px;
`;

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 0;

  background-color: ${randomBgColor};
  box-shadow: 1px 1px 2px 1px;
`;

export const StatItemLabel = styled.span`
  font-size: 0.9rem;
`;

export const StatItemPercentage = styled.span`
  font-size: 1.4rem;
`;
