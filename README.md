<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">

## π React Shopping Cart

μ₯λ°κ΅¬λμ μν μΆκ°
```javascript
const onAdd = (product) => {
    //μΆκ°νλ μνκ³Ό λμΌν μνμ΄ μ₯λ°κ΅¬λμ λ΄κ²¨ μμΌλ©΄ μλλ§ μ¦κ°μν€κ³ ,
    //κ·Έλ μ§ μμΌλ©΄ μ₯λ°κ΅¬λμ λ΄κ³ , μλμ 1λ‘ μ μ₯
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

μ₯λ°κ΅¬λμ λ΄κΈ΄ μν μ­μ 
```javascript
const onRemove = (product) => {
   //μλμ΄ 1μΌ λ μ­μ ν  κ²½μ° ν΄λΉ μνλ§ μ μΈνκ³  λ³΄μ¬μ£Όκ³ ,
   //κ·Έλ μ§ μμ κ²½μ°λ μλ μλμμ -1
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

κ°κ²© ν©μ°νκΈ°
```javascript
const itemsPrice = cartItems.reduce((acc, cur) => acc + (cur.qty * cur.price), 0);
const taxPrice = itemsPrice * 0.14;
const shippingPrice = itemsPrice > 2000 ? 0 : 50;
const totalPrice = itemsPrice + taxPrice + shippingPrice;
```

![psmall](https://user-images.githubusercontent.com/74355328/147529673-3f436250-3f10-4663-b574-d59e4c2bcbc6.gif)

<μ°Έκ³ >
https://www.youtube.com/watch?v=AmIdY1Eb8tY
