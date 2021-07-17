import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    //추가하는 상품과 동일한 상품이 장바구니에 담겨 있으면 수량만 증가시키고,
    //그렇지 않으면 장바구니에 담고, 수량은 1로 저장
    const exist = cartItems.find(item => item.id === product.id)
    if(exist){
      setCartItems(
        cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty + 1} : item)
      )
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }
  //수량이 1일 때 삭제할 경우 해당 상품만 제외하고 보여주고,
  //그렇지 않은 경우는 원래 수량에서 -1
  const onRemove = (product) => {
    const exist = cartItems.find(item => item.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty - 1} : item)
      )
    } 
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <div className="row">
        <Main products={products} onAdd={onAdd}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>
    </div>
  );
}

export default App;
