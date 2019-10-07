import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

import {HashRouter,Link,Route,Switch,Redirect} from 'react-router-dom'
import Page from './containers/page/page'

/* class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />

      </div>
    );
  }
}

export default App; */
function Page01(props){
  return <p>页面内容一</p>
}

// 定义子组件02
function Page02(props){
  return <p>页面内容二</p>
}

// 定义子组件03
function Page03(props){
  return (
      <div>
          <p>页面内容三</p>
          <ul>
              {/* 链接地址传递参数 */}
              <li><a href="#/page03/detail/1001">新闻标题一</a></li>
              <li><a href="#/page03/detail/1002">新闻标题二</a></li>
              <li><a href="#/page03/detail/1003">新闻标题三</a></li>
          </ul>
      </div>

  ) 
}


// 定义负责路由的组件
class Myrouter extends Component{
  render(){
      return (
          <HashRouter>
              <p>
                  <Link to="/counter">页面一</Link> &nbsp; &nbsp;
                  <Link to="/page">页面二</Link> &nbsp; &nbsp;
                                     
              </p>
              <hr />

              {/* 加上exact是为了让path精确匹配，否则“/”和“/china”的路径会同时匹配 */}
              <Route exact path="/" component={ Page01 } />
              <Route path="/counter" component={ Counter } />
              <Route path="/page" component={ Page } />
              
                   
          </HashRouter>
      )
  }
}
export default Myrouter;
