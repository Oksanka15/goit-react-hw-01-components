export const FriendListItem = ({friend: {avatar, name, isOnlaine}}) =>{
    return (<div>
    <img src={avatar} alt={name} width="40px"/>    
   <p>{name}</p>
   <span>{isOnlaine}</span>
    </div>)
}