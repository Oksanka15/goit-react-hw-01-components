import { FriendListItem } from "components/FriendListItem/FriendListItem"
import PropTypes from 'prop-types';
import {FriendListStyled} from './FriendList.styled';

export const FriendList = ({ friends }) =>{
    return <FriendListStyled>{
        friends.map(friend =>(
        <FriendListItem key={friend.id} friend={friend}/>))}</FriendListStyled>
}
FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object)};