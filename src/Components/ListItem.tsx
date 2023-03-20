import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserItem } from './Interface';

const ListItem: React.FC<IUserItem> = ({user}) => {
  const navigate = useNavigate();
  
  const goToUser = (id: number | undefined): void => {
    const path = `/users/${id}`;
    navigate(path);
  }

  return (
    <>
      <div style={{cursor: 'pointer', border: '1px solid #000', padding: '10px 20px', borderRadius: '10px', width: '200px'}}
        onClick={() => goToUser(user?.id)}>
        <span>{user?.id + '. '}</span>  
        <span>{user?.username}</span>
      </div> 
    </>
  )
}

export default ListItem;