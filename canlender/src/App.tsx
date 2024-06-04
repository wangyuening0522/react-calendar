import Calendar from "./views/Calendar";
import "./App.css";
import Draggable from "./drag/Draggable";
import Droppable from "./drag/Droppable";
import { useState } from "react";
/* 向布局组件传递组件 */
function App() {
  const [box1, setBox1] = useState([
    {
      id: "1",
    },
    {
      id: "2",
    },
  ]);
  const [box2, setBox2] = useState<any>([]);
  const handleBox1 = (item: any) => {
    // remove from box1
    const copyArr = box1.filter((drag) => drag.id !== item.id);
    setBox1([...copyArr]);
    // add to box2
    setBox2((prev: any) => [...prev, item]);
  };
  return (
    <div>
      <Calendar></Calendar>
      <div className="drag">
        <Droppable text="box1" state={box1}>
          {box1.map((drag) => {
            return <Draggable key={drag.id} id={drag.id}></Draggable>;
          })}
        </Droppable>
        <Droppable text="box2" state={box2} handleDrop={handleBox1}>
          {box2.map((drag: any) => {
            return <Draggable key={drag.id} id={drag.id}></Draggable>;
          })}
        </Droppable>
      </div>
    </div>
  );
}

export default App;
