import './App.css';
import React from 'react';

// 1. shouldComponentUpdate 사용
// class Person extends React.Component {
//   ////////////////////////////////////////////////////////////////////////////////////////
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     for(const key in this.props){
//       if(nextProps[key] !== this.props[key])  return true;
//     }
//     return false;
//   }
//   ////////////////////////////////////////////////////////////////////////////////////////
//
//   render(){
//     console.log('Person render');
//     const {name, age} = this.props
//     return (
//       <div>{name} / {age}</div>
//     );
//   }
// }

// 2. PureComponent 사용
class Person extends React.PureComponent {
  render(){
    console.log('Person render');
    const {name, age} = this.props
    return (
        <div>{name} / {age}</div>
    );
  }
}

class App extends React.Component {
  state = {
    text: '',
    persons: [
      {id: 1, name: 'Mark', age: 39},
      {id: 2, name: 'Anna', age: 28},
    ]
  }
  render(){
    const {text, persons} = this.state;

    return (
        <div>
          <input type="text" value={text} onChange={this._change}/>
          <ul>
            {persons.map(person =>{
              return <Person {...person} key={person.id} onClick={this._click}/>  // 인라인 함수 사용치 말것(매번생성) => 렌더링 발생
            })}
          </ul>
        </div>
    )
  }

  _change = e => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  _click = e => {};
}

export default App;
