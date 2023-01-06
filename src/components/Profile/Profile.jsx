import PropTypes  from 'prop-types';
import {
  ProfileStyled,
  DescriptionStyled,
  Avatar,
  UserName,
  TagName,
  Location,
  ProfileStatListStyled,
  ProfileStatsLabel, 
  StatsItem, 
  Quantity
} from './Profile.style';

export const Profile = ({username, tag, location, avatar, stats, id}) =>
{return (
<ProfileStyled>
  <DescriptionStyled>
  <Avatar avatar={avatar} alt={username} />
  <UserName>{username}</UserName>
  <TagName>&#64;{tag}</TagName>
  <Location>{location}</Location>
  </DescriptionStyled>

  <ProfileStatListStyled>
    <StatsItem key={id}>
      <ProfileStatsLabel>&#9787;</ProfileStatsLabel>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem >
    <li>
      <ProfileStatsLabel>&#10149;</ProfileStatsLabel>
      <Quantity>{stats.views}</Quantity>
    </li>
    <li>
      <ProfileStatsLabel>&#10084;</ProfileStatsLabel>
      <Quantity>{stats.likes}</Quantity>
    </li>
  </ProfileStatListStyled>
</ProfileStyled>
)};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string,
  avatar: PropTypes.string, 
  stats: PropTypes.objectOf(PropTypes.number),

}