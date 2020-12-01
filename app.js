/* Creating and rendering a React component */

// var GroceryList = () => (
//   <ul>
//     <li>Eggs</li>
//     <li>Bread</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));

/* Creating and rendering nested React components */

// const GroceryList = () => (
//   <ul>
//     <Eggs/>
//     <Bread/>
//   </ul>
// );

// const Eggs = () => (
//   <li>Eggs</li>
// );

// const Bread = () => (
//   <li>Bread</li>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));

/* Component Properties aka "props" */

const GroceryList = () => (
  <GroceryListItem groceryItems = {['Eggs', 'Bread']}/>
);

const GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
);

ReactDOM.render(<GroceryList/>, document.getElementById('app'));

/* Class components */

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.item}</li>
//     );
//   }
// }

// const GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map((item, index) =>
//       <GroceryListItem item={item} key={index}/>
//     )}
//   </ul>
// );

// ReactDOM.render(<GroceryList groceryItems={['Eggs', 'Bread']}/>, document.getElementById('app'));

/* State */

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       done: false
//     };
//   }
//   onListItemOver() {
//     this.setState({
//       done: !this.state.done
//     });
//   }
//   render() {
//     var style = {
//       fontWeight: this.state.done ? 'bold' : 'none'
//     };
//     return (
//       <li style={style} onMouseOver={this.onListItemOver.bind(this)}>{this.props.item}</li>
//     );
//   }
// }

// const GroceryList = (props) => (
//   <ul>
//     {props.items.map((item, index) =>
//       <GroceryListItem item={item} key={index}/>
//     )}
//   </ul>
// );

// ReactDOM.render(<GroceryList items={['Eggs', 'Bread']}/>, document.getElementById('app'));