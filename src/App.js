import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import { Hello2 } from './components/Hello2';
import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';
import Comment from './components/Comment';
import Avatar from './components/Avatar';
import Account from './components/Account';
import Store from './components/Store';
import Stock from './components/Stock';
import Warning from './components/Warning';
import Form from './components/Form';
import Garage from './components/Garage';
import Welcome from './components/Welcome';
import Car from './components/Car';
import Menu from './components/MenuComponent';

// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function App() {
//   const data={id:"1", name:"thi no"};
//   return (

//     <div className="App">
//       <h1>{element}</h1>
//     </div>

//     <div>
//       <Hello msg="em chan co" user={data} />
//       <Hello2 msg="ok" />
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//       </div>
//       {/*<Comment date={comment.date} text={comment.text} author={comment.author}/>
//       <Account />*/}
//       {/*<Store />
//       <Store />*/}

//       {/*<Stock />*/}

//       {/*<Warning />*/}
// {/*
//       <Form />*/}

//       {/*<ul> 
//         {names}
//       </ul>*/}
//       {/* <Garage /> */}
//       </div>

//     );
//   }
// }

// const comment ={
//     date: new Date(),
//     text: 'welcome to react component',
//     author:{
//         name: 'vanttn',
//         avatarUrl: 'images/logo.jpg'
//     }
// };

// const cities = ['A', 'B', 'C', 'D', 'E'];
// const names = cities.map ( (c)=>{ return <li>(c)</li>} );
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy my restaurant!',
//   author: {
//     name: 'alberto',
//     avatarUrl: './img/alberto.png'
//   }
// };

function App() {
  return (
    <div className="App">
      <Navbar darkcolor="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
