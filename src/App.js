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
import { DISHES } from './shared/dishes';
import PresentationalComponent from './components/PresentationalComponent';
import ContainerComponent from './components/ContainerComponents';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Main from './components/MainComponent';
import Profile from './components/Profile';
import MyForm from './components/MyForm';
import TestForm from './components/TestForm';
import MyUncontrolledForm from './components/MyUncontrolledForm(innerRef)';
import MyUncontrolledForm1 from './components/MyUncontrolledForm1';
// import Contact from './components/ContactComponent';
import { Provider } from 'react-redux';
// import { ConfigureStore } from './components/ConfigureStore';
import Counter from './components/Counter';
import ContactPage from './components/ContactPage';
import { ConfigureStore2 } from './components/ConfigureStore2';
import { ConfigureStore3 } from './Redux Action/configureStore3';
import TestComponent from './Redux Action/TestComponent';
import { ConfigureStore4 } from './ReduxThunk/configureStore4';
import TestReduxThunk from './ReduxThunk/TestReduxThunk';
import { configureStore } from './redux/configureStore';
import TestFetchComponent from './useFetch/TestFetchComponent';
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

// const store=ConfigureStore2();

// function App(){
//   return(
//     <Provider store={store}>
//         {/* <Counter /> */}
//         <ContactPage />
//       </Provider>
//   );
// }

// const store=ConfigureStore3();
// function App(){
//   return (
//     <Provider store = {store}>
//       <TestComponent />
//     </Provider>
//   );
// }

// const store=ConfigureStore4();
// function App(){
//   return (
//     <Provider store = {store}>
//       <TestReduxThunk />
//     </Provider>
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
//       {/* <ContainerComponent /> */}
//       {/* <BrowserRouter>
//         <div>
//           <Switch>
//               <Route exact path="/" component={Layout} />
//               <Route path="/Home" component={Home} />
//               <Route path="/Blogs" component={Blogs} />
//               <Route path="/Contact" component={Contact} />
//               <Route path="/Profile/:isLogin/:name" component={Profile} />
//               <Route path="*" component={NoPage} />
//           </Switch>
          
//         </div>
//       </BrowserRouter> */}

//       {/* <MyForm /> */}

//       {/* <TestForm /> */}
      
//       {/* <MyUncontrolledForm1 />
//       <MyUncontrolledForm /> */}

//       <TestFetchComponent />
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

//WORKSHOP

const store = configureStore();

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar darkcolor="primary">
//         <div className="container">
//           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
      
//     </div>
//   );
// }

export default App;
