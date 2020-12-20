import HomeIcon from '@material-ui/icons/Home';
import HomePage from 'views/HomePage';
import ItemPage from 'views/ItemPage';
import CartPage from 'views/CartPage';
 const routes = [
  {
    path:'/home',
    name:'Home',
    icon:HomeIcon,
    component: HomePage
  },
  {
    path:'/items',
    name: 'Items',
    icon: HomeIcon,
    component: ItemPage
  },
   {
     path: '/cart',
     name: 'Cart',
     icon: HomeIcon,
     component: CartPage
   }
]

export default routes;