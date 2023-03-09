import React from 'react'
import './NavBar.scss'
import { HomeFilled, PlusCircleFilled, UserOutlined } from '@ant-design/icons'

export const NavBar = () => {
  return (
    <div className='navbar'>
<<<<<<< HEAD
      <div>Crear publicacion</div>
      <div>Perfil</div>
=======
      <div className='logo'><b><span>nomad</span></b></div>
      <div className='container-nav'>
        <div className='home'><HomeFilled className='iconHome'/><div className='divHome'>Home</div> </div>
        <div className='profile'><UserOutlined className='iconProfile'/><div className='divProfile'>Profile</div></div>
        <div className='create'><PlusCircleFilled className='iconCreate'/><div className='divCreate'>Crear post</div></div>
      </div>
>>>>>>> useContext
    </div>
  )
}
