import { useRoutes } from 'react-router-dom';
<<<<<<< HEAD
import { PrivateZone } from '../../guards/PrivateZone';
import { Register } from '../Auth/Register/Register';
=======
import { Login } from '../Auth/Login/Login';
>>>>>>> 4ad06e255a691e088594aadce86f7311f0eac65e
import { Content } from '../Content/Content';
// import { Profile } from '../Profile/Profile';

export const Routes = () => {
  return useRoutes(

        [
              {
<<<<<<< HEAD
                element:<Content/> ,
                path: '/'
              },
              {
                element:<PrivateZone><Profile/></PrivateZone> ,
                path: '/profile'
              }
=======
                element: <Login/>,
                path: '/'
              },
              {
                element: <Content/>,
                path: '/home'
              },
>>>>>>> 4ad06e255a691e088594aadce86f7311f0eac65e
        ]
        );

}
//f