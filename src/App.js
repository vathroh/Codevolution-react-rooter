import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Login from './components/Login';
import { AuthProvider } from './components/Auth';
import RequireAuth from './components/RequireAuth';

const LazyBlog = React.lazy(() => import('./components/Blog'));


function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='about' element={<About />} ></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='blog' element={
          <React.Suspense fallback='Loading . . .'>
            <LazyBlog />
          </React.Suspense>
        } />
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>}></Route>
        <Route path="login" element={ <Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>

      </Routes>
    </AuthProvider>
  );
}

export default App;
