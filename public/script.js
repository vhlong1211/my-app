import React from 'react';
import ReactDOM from 'react-dom';
const todos = 
[  'Go to market',
   'Buy food',
   'Make dinner'
];
// console.log(todos);


const li1= <li>Go to market</li>
const li2=React.createElement('li',null,todos[1]);
const li3=React.createElement('li',null,todos[2]);

const ul=React.createElement('ul',null,[li1,li2,li3]);

const root=document.getElementById('root');
ReactDOM.render(ul,root);