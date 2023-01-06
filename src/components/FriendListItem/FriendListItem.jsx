import PropTypes from 'prop-types';
import { FriendListItemStyled, IsOnlineIndicator,FriendName, AvatarImg} from './FriendListItem.styled'

export const FriendListItem = ({friend: {avatar, name, isOnline}}) =>{
    return (<FriendListItemStyled>
     <AvatarImg src={avatar} alt={name} />   
    <FriendName>{name}</FriendName>
   <IsOnlineIndicator isOnline={isOnline} />
    </FriendListItemStyled>)
}
FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnlaine: PropTypes.bool,

}