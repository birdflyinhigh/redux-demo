### redux memo 
##### 1.redux work flow 

it is all about the central store. 

the store stores every states. 

##### 2. set up reducer and store 

 + 1. store 
 + 2. reducer 
 + 3. dispatching actions 
 + 4. subscriptions
 + 5. connect react to redux 
 + 6. connect store to react
 + 7. dispatch actions to react component within the component 
 
 
 
 
 - how do we get value from store in the containers? 
 
  we need to do subscriptions in the containers. 
  we use features built-in
  
  React的数据模型分为共有数据和私有数据，共有数据可以在组件间进行传递，私有数据为当前组件私有。共有数据在React中使用props对象来调用，它包含标签所有的属性名称和属性值，props对象有三个特性，单向流动性、显示传递性和只读性。单向流动性是指React的数据只能由父组件传递到子组件，而不能由子组件传递到父组件；显示传递性是指必须明确地在子组件中通过属性赋值，数据才可以传递到子组件；只读性是指props数据是只读的，数据修改后并未改变原始的数据模型，而是会新生成一份数据模型，并将新的数据模型加载到原始父元素，从而完成数据的传递和组件状态的更改。私有数据为组件私有，在React使用state对象来调用，state数据模型可以方便地进行更新操作，并且不会影响到其他组件。

　　需要理解的是，props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件。而state代表的是一个组件内部自身的状态（可以是父组件、子孙组件）。改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染。而props是父组件传递的参数，可以被用于显示内容，或者用于此组件自身状态的设置（部分props可以用来设置组件的state），不仅仅是组件内部state改变才会导致重渲染，父组件传递的props发生变化，也会执行。
 
 should every react state be updated by the redux?
 for small project  = > state set_state 
 for medium or bigger project  = > redux 
 
 ##### 3. what kind of state can be used in redux 
 
type   example    use redux?

local ui state => local component   show /hide backdrop   mostly handled with components 
persistent state => redux 
client state => redux 
 
 