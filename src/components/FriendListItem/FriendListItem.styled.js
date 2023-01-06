import styled from 'styled-components';
export const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  padding: 10px;
  
 

  :focus-within,
  :hover {
    transform: scale(1.08);
  }
`;
export const IsOnlineIndicator = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline}) =>
 [isOnline ? 'green' : 'red']};
`;

export const FriendName = styled.p`

  font-size: 1.1rem;
  font-weight: 500;
`;

export const AvatarImg = styled.img`
  display: block;
  width: 150px;
  height: auto;
`;