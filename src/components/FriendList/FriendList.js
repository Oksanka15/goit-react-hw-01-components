import { FriendListItem } from "components/FriendListItem/FriendListItem"

export const FriendList = ({ friends }) =>{
    return <div>{
        friends.map(friend =>(
        <FriendListItem key={friend.id} friend={friend}/>))}</div>
}