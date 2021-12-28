<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## 🛒 React Shopping Cart

![psmall](https://user-images.githubusercontent.com/74355328/147529673-3f436250-3f10-4663-b574-d59e4c2bcbc6.gif)

장바구니에 상품 추가
```javascript
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
```

장바구니에 담긴 상품 삭제
```javascript
const onRemove = (product) => {
   //수량이 1일 때 삭제할 경우 해당 상품만 제외하고 보여주고,
   //그렇지 않은 경우는 원래 수량에서 -1
    const exist = cartItems.find(item => item.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(item => item.id === product.id ? {...exist, qty: exist.qty - 1} : item)
      )
    } 
  }
```

가격 합산하기
```javascript
const itemsPrice = cartItems.reduce((acc, cur) => acc + (cur.qty * cur.price), 0);
const taxPrice = itemsPrice * 0.14;
const shippingPrice = itemsPrice > 2000 ? 0 : 50;
const totalPrice = itemsPrice + taxPrice + shippingPrice;
```

<참고>
https://www.youtube.com/watch?v=AmIdY1Eb8tY
