import "./styles.css"  

export default function App(){
 return (
  <>
  <form className="item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label type="checkbox"/>
      Item 1
    </li>
    <button className="btn btn-danger">Delete</button>
  </ul>
  </>
 )

}