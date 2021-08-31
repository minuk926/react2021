import React, {useMemo} from 'react';

/*
function Person({name, age}) {
  console.log('Person render');
  return (
      <div>{name} / {age}</div>
  );
}
*/

// React.memo : shouldComponentUpdate or PureComponent 와 동일한 역할
const Person = React.memo(({name, age}) => {
  console.log('Person render');
  return (
      <div>{name} / {age}</div>
  );
})

function App2() {
  const [state, setState] = React.useState({
    text: '',
    persons: [
      {id: 1, name: 'Mark', age: 39},
      {id: 2, name: 'Anna', age: 28},
    ]
  });

  const {text, persons} = state;
  const _click = React.useCallback(() => {}, []);

  return (
      <div>
        <input type="text" value={text} onChange={_change}/>
        <ul>
          {persons.map(person =>{
            return <Person {...person} key={person.id} onClick={_click}/>  // 인라인 함수 사용치 말것(매번생성) => 렌더링 발생
          })}
        </ul>
      </div>
  );

  function _change(e) {
    setState({
      ...state,
      text: e.target.value
    })
  }
}

export default App2;
