const list = (
  <ul>
    <li>Book</li>
    <li>Table</li>
    <li>Pen</li>
  </ul>
);

const temp = (
  <div>
    <h1 style={{"color":"red"}}>Hello React</h1>
    {list}
    {list}
    {list}
    {list}
  </div>
);

ReactDOM.render(temp, document.querySelector("#root"));
