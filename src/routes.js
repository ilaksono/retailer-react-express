import HomeIcon from '@material-ui/icons/Home';
import HomePage from 'views/HomePage';
import ItemPage from 'views/ItemPage';
import CartPage from 'views/CartPage';
import CheckPage from 'views/CheckPage';
import NewItemPage from 'views/admin/NewItemPage';

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
   },
   {
     path: '/checkout',
     name: 'CheckOut',
     icon: HomeIcon,
     component: CheckPage
   },
   {
     path: '/admin/addnew',
     name: 'Admin',
     icon: HomeIcon,
     component: NewItemPage
   }
]

export default routes;