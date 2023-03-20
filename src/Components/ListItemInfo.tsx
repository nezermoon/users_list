import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { IUserItem } from './Interface';

const ListItemInfo: React.FC<IUserItem> = () => { 
  const navigate = useNavigate();

  const {id} = useParams();

  async function fetchUser() {
    const {data} = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data;
  }
  
  const {data, isLoading, isError} = useQuery('user', fetchUser, {keepPreviousData: true, refetchOnWindowFocus: false});

  if(isLoading) {
    return <h3>Загрузка...</h3>
  }
    
  if(isError) {
    return <h3>Ошибка!</h3>
  }

  return (
    <>
      <button onClick={() => navigate(-1)} 
        style={{border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '16px',
          color: '#FFF', backgroundColor: '#4CAF50', marginBottom: '10px', cursor: 'pointer'}}>Back</button> 
      <div key={data?.id}
        style={{border: '1px solid', padding: '20px', borderRadius: '5px', display: 'flex',
          flexDirection: 'column', gap: '10px'}}>
        <div>Name: {data?.name}</div>
        <div>Email: {data?.email}</div>
        <div>Lives in {data?.address?.city} at {data?.address?.street}</div>
      </div>
    </>
  )
}

export default ListItemInfo;