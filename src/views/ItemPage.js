import { images } from 'views/HomePage';
import AppContext from 'AppContext';
import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import 'styles/ItemPage.scss';
const ItemPage = () => {
  const { item, addCart } = useContext(AppContext);
  const [count, setCount] = useState(1);
  return (
    <div className='item-layout'>
      <div className='product-container'>
        <div style={{
          backgroundImage: `url(${item.url})`,
          height: 370,
          width: 220
        }}
        >
        </div>
        <div className='product-dets'>
          <div>
            Name: {item.name}
          </div>
          <div>
            Price: $ {Number(item.priceCents) / 100}
          </div>
          <div>
            Name: {item.name}
          </div>
          <div>
            Description: It's a toy
          </div>
          <div>
            <Button>-</Button>
            <input value={count}
              onChange={(event) =>
                setCount(event.target.value)}
              className='item-count'
            />
            <Button>+</Button>
          </div>
          <Button onClick={() =>
            addCart(item, count)}
          >
            Add to Cart
          </Button>
        </div>


      </div>

    </div>
  );

};

export default ItemPage;