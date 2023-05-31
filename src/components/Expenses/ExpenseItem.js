// make build process aware of the css file
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react"; // named import inside curly braces

function ExpenseItem(props) {
  // recieve key-value pairs from the props parameter
  // retrieving data from outside the componenet (app.js)
  // array destructuring:
  // const [title, setTitle] = useState(props.title); // a react hook, must be called inside original component function

  // // common convetion to use "Handler" for event functions:
  // function clickHandler() {
  //   // calling this function executes the component function again
  //   setTitle("Updated!");
  // }

  return (
    // add class name to retrieve css properties
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>{" "}
    </li>
    // can only have one root element, one main div
  );
}
// to use the component we need to export it
export default ExpenseItem;
