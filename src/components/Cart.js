import { Button } from 'react-bootstrap';
import { BaseColors } from './Common';
import EscapadesCard from './EscapadesCard';
import { useState } from 'react';

import '../styles/Cart.css';

const Cart = (props) => {
  const [, setCount] = useState(0);

  const removeItem = (id) => {
    props.cart.saved = props.cart.saved.filter((s) => s !== id);
    setCount(props.cart.saved.length);
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: '100px',
        marginTop: '50px',
      }}
    >
      <h3>Your Saved Items</h3>

      {props.cart.saved.length === 0 ? (
        <div>
          <p>No items in the cart currently :(</p>
        </div>
      ) : (
        props.localData.packages
          .filter((pkg) => props.cart.saved.includes(pkg.id))
          .map((pkg, index) => {
            return (
              <div key={'pkg-div' + pkg.id + '-' + index}>
                <br />
                <EscapadesCard
                  key={'pkg-card' + pkg.id + '-' + index}
                  pkg={pkg}
                  backgroundColor={BaseColors[(pkg.level - 1) % 3]}
                  className='mb-3'
                />
                <Button
                  style={{
                    backgroundColor: 'black',
                    border: 'none',
                    marginTop: '10px',
                  }}
                  onClick={() => removeItem(pkg.id)}
                >
                  remove item
                </Button>
              </div>
            );
          })
      )}
    </div>
  );
};

export default Cart;
