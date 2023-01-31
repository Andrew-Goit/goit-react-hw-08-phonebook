import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';
import {LayoutBox} from './Layout.styled'
import {Loader} from './Loader/Loader'

export const Layout = () => {
  // console.log('Layout');
  return (
    <LayoutBox>
      <AppBarComponent />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};