import styled from 'styled-components';

export const ProfileStyled = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 1px #6b8e23;
`;

export const DescriptionStyled = styled.div`
  padding: 10px;
  text-align: center;
`;

const placeholderImg =
  'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

const setAttr = props => ({ src: props.avatar || placeholderImg });

export const Avatar = styled.img.attrs(setAttr)`
  display: block;
  width: 64%;
  height: auto;
  margin: 0 auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2f4f4f;
`;

export const TagName = styled.p`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #bdb76b;
`;

export const Location = styled(TagName)``;

export const ProfileStatListStyled = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center
  padding: 10px;
  font-size: 1.1rem;
  border-top: 1px solid #2f4f4f;
`;

export const ProfileStatsLabel = styled.span`
  padding: 5px;
  font-size: 1.1rem;
  color: #2f4f4f;
`;

export const StatsItem = styled.li`
`;

export const Quantity = styled.span`
  color: #2f4f4f;
  font-weight: 700;
`;
