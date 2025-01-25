import React from 'react';
import Greeting from './greetens';
import ShoppingList from './shoppingList';
import OrderStatus from './orderStatus';

function App() {
  const name = 'Иван'; 
  const items = ['Яблоки', 'Хлеб', 'Молоко']; 
  const orders = [
      { orderId: 123, status: 'в пути' },
      { orderId: 456, status: 'обработан' },
      { orderId: 789, status: 'доставлен' },
  ]; 

  return (
      <div>

          <Greeting name={name} />


          <ShoppingList items={items} />


          {orders.map((order) => (
              <OrderStatus
                  key={order.orderId}
                  orderId={order.orderId}
                  status={order.status}
              />
          ))}
      </div>
  );
}

export default App;

