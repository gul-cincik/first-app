// // function App() {

// //   //JSX
// //   const name = 'shivia'
// //   const x = true

// //   return (
// //     //it can be anything.
// //     <div className="App">
// //       <h1>Hello World</h1>
// //       <h2>Hello {name}</h2>
// //       <h2>Hello {1+1}</h2>
// //       <h2>Hello {x ? 'Yes' : 'No'}</h2>
// //     </div>

// //   );
// // }

// // export default App;



// //LISTS
// // import React from 'react';
// // import ReactDOM from 'react-dom';

// // function App() {
// //   const numbers = ['Gül', 'Cemile' , 'Gülten'];

// //   const updatedNums = numbers.map((number) => {
// //     return <li key={number}>{number}</li>;
// //   });

// //   return (
// //     <div className="App">
// //       <ul>
// //         {updatedNums}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;

// // //FORMS
// // import React from 'react';

// // function App() {
// //   const onInputChange = (event) => {
// //     console.log(event.target.value);
// //   }

// //   return (
// //     <div>
// //       <form>
// //         <label>Enter text</label>
// //         <input type="text" onChange={onInputChange} />
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;

// //KEYS
// // import React from 'react';

// // function App() {
// //   const numbers = [1, 2, 3, 4, 5];
// //   const updatedNums = numbers.map((number, index) => (
// //     <li key={index}>
// //       {number}
// //     </li>
// //   ));

// //   return (
// //     <ul>
// //       {updatedNums}
// //     </ul>
// //   );
// // }

// // export default App;

import React from "react";
import Header from "./components/Header";
import FunctionalComponent from "./components/FunctionalComponent"
import ClassBasedComponent from "./components/ClassBasedCommponent"
import PropTypesComponent from "./components/PropTypesComponent"
import AppButton from "./components/App/AppButton";
import AppHeader from "./components/App/AppHeader"
function App() {
  return (
    <div className="container">
      {/* <Header title='Hello World'/>  
      <FunctionalComponent />  
      <ClassBasedComponent /> 
      <PropTypesComponent title = {1} /> */}
      <AppHeader />
    </div>
  )
}

export default App;

// import PropTypes from 'prop-types'
// import AppButton from './components/App/AppButton'

// const AppHeader = ({title}) => {
//     return (
//         <header className='header'>
//             <h1>{title}</h1>
//             {/* <button className='btn'>Add</button> */}
//             <AppButton/>

//         </header>
//     )
// }

// AppHeader.defaultProps = {
//     title: 'Yapılacaklar',
// }

// AppHeader.propTypes = {
//     title: PropTypes.string.isRequired,
// }

// export default AppHeader;