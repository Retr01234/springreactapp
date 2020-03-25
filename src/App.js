import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Counter by= {5} />
        <Counter by= {10} />
      </div>
    );
  }
}

export default App;

// import First from './components/First';
// import Second from './components/Second';
// import Third from './components/Third';
// import Fourth from './components/Fourth';

// class LearningComponent extends Component {
//   render() {
//     return (
//       <div className="LearningComponent">
//         <h1>Spring React App</h1>
//         {/* List all Component in the App Component - App is Parent & All other are Children */}
//         <First />
//         <Second />
//         <Third />
//         <Fourth />
//       </div>
//     );
//   }
// }