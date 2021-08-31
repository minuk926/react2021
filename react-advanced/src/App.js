import logo from './logo.svg';
import './App.css';
import React from "react";

class Foo extends React.Component {
  componentDidMount() {
    console.log('Foo.componentDidMount', this.props.children);
  }
  componentWillUnmount() {
    console.log('Foo.componentWillUnmount', this.props.children);
  }
  static getDerivedStateFromProps(nextProps, prevProps){
    console.log('Foo.getDerivedStateFromProps', nextProps, prevProps);
    return {};
  }
  render(){
    console.log("Foo render", this.props.children);
    return <p>foo</p>
  }
}
class App extends React.Component {
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        count: this.state.count + 1
      });
    }, 3000)
  }

  render(){
    // if(this.state.count % 2 === 0) {
    //   return (
    //       <div>
    //         <Foo/>
    //       </div>
    //   )
    // }
    // return (
    //     <span>
    //       <Foo/>
    //     </span>
    // )

    // if(this.state.count % 2 === 0) {
    //   return (
    //       <div className="before" title="stuf1" style={{color: 'red', fontWeight: 'bold'}}/>
    //   )
    // }
    // return (
    //     <div className="after" title="stuf2" style={{color: 'blue', fontWeight: 'bold'}}/>
    // )

    // if(this.state.count % 2 === 0) {
    //   return <Foo name='Mark'/>
    // }
    // return <Foo name='Anna'/>

    if(this.state.count % 2 === 0) {
      return (
          <ul>
            <Foo key="2">second</Foo>
            <Foo key="3">third</Foo>
          </ul>
      )
    }
    return (
        <ul>
          <Foo key="1">first</Foo>
          <Foo key="2">second</Foo>
          <Foo key="3">third</Foo>
        </ul>
    )
  }
}

export default App;
