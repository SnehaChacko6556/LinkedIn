import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {

  const user = useSelector(selectUser)

  return (
    <div className="headerOption" onClick={onClick}>
    {Icon && <Icon className="headerOption__icon"/>}
    {avatar && (<Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>)}
    <h4 className='headerOption__title'>{title}</h4>
    </div>
  )
}

export default HeaderOption