import{r as o,C as g,j as s,i as p}from"./index-d10f9b5f.js";const m=()=>{var t,e,d,n,i,l;const{addCardsCountPlus:h,addCardsCountMinus:x,user:a,navigate:j,setUser:u}=o.useContext(g),_=c=>{p.patch(`users/${a.id}`,{carts:a.carts.filter(r=>r.id!==c.id)}).then(r=>{localStorage.setItem("user",JSON.stringify(r.data)),u(r.data)})};return console.log((t=a.carts)==null?void 0:t.length.toString().at(-1)),s.jsx("div",{className:"cart",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"cart__inner",children:[s.jsxs("div",{className:"cart__top",children:[s.jsx("div",{className:"cart__top-title",children:"Ваша корзина"}),s.jsx("div",{className:"cart__top-position",children:`${(e=a.carts)==null?void 0:e.length} ${((d=a.carts)==null?void 0:d.length.toString().at(-1))==1?"позиция":"позиций"}  `})]}),(n=a.carts)==null?void 0:n.map(c=>s.jsx(o.Fragment,{children:s.jsxs("div",{className:"cart__card",children:[s.jsx("img",{src:c.image,alt:""}),s.jsxs("div",{className:"cart__card-content",children:[s.jsx("h4",{children:c.title}),s.jsx("dl",{className:"cart__card-inform",children:s.jsxs("div",{children:[s.jsx("dt",{children:"Размер(Ш×Д×В):"}),s.jsxs("dd",{children:[c.deep," × ",c.width," × ",c.height]})]})})," ",s.jsxs("div",{className:"cart__card-delete",children:[s.jsx("button",{onClick:()=>x(c.id),children:"-"}),s.jsx("span",{children:c.count}),s.jsx("button",{onClick:()=>h(c.id),children:"+"})]})]}),s.jsxs("h5",{children:["Цена ",c.price," р"]}),s.jsxs("h5",{children:["Сумма ",c.price*c.count]}),s.jsx("div",{onClick:()=>{_(c)},className:"cart__card-closed",children:s.jsx("img",{src:"/images/image/cross.svg",alt:""})})]})},c.id))]}),s.jsx("div",{children:(i=a.carts)!=null&&i.length?s.jsxs("div",{className:"cart__bottom",children:[s.jsxs("p",{children:["Итоговая сумма"," ",(l=a.carts)==null?void 0:l.reduce((c,r)=>c+r.price*r.count,0)," ","p"]}),s.jsx("button",{onClick:()=>j("/checkout"),children:"Оформить заказ"})]}):""})]})})};export{m as default};