import ItemForm from 'components/ItemForm';
import 'styles/NewItemPage.scss';
const NewItemPage = () => {


  return (
    <div className='admin-layout'>
      <h1>Add Item to List</h1>
      <ItemForm/>
    </div>
  );
};

export default NewItemPage;