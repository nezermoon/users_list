import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { IUserItem } from './Interface';
import ListItem from './ListItem';

async function fetchUsers() {
  const {data} = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
}

const List = () => {
  const {data, isLoading, isError} = useQuery('users', fetchUsers, {keepPreviousData: true, refetchOnWindowFocus: false});

  if(isLoading) {
    return <h3>Загрузка...</h3>
  }
    
  if(isError) {
    return <h3>Ошибка!</h3>
  }

  return (
    <div style={{gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {data?.map((user: IUserItem) => {
        return (
          <ListItem key={user?.id}  user={user}/>
        )
      })}
    </div>
  )
}

export default List;