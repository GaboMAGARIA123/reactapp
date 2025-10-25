import { useState } from "react";
import { TodoList } from "./component/finishlist";

const handleleftitemtoggle = (index, leftList, setLeftList, rightList, setRightList) => {
  const itemToMove = leftList[index];
  const newLeftList = leftList.filter((_, i) => i !== index);
  const newRightList = [...rightList, itemToMove];
  setLeftList(newLeftList);
  setRightList(newRightList);
}

const selectedleftitems = [];
const selectedrighrtitems = [];

if (selectedleftitems.length > 0) {
  
}

  export default function App() {
    const [leftList, setLeftList] = useState([
      "Buy groceries",
      "Clean the house",
      "Pay bills",
    ]);
    const [rightList,setRightList] = useState([
      "Go for a walk",
      "Finish project",
    ]);


    return (
      <div className="container">
        <TodoList title="Left To-Do List" items={leftList} />

        <TodoList title="Right To-Do List" items={rightList} />
      </div>
    );
  }