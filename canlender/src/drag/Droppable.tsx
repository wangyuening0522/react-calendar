import "./Droppable.less";
import { useDrop } from "react-dnd";
function Droppable({ text, state, handleDrop, children }: any) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    item: { id: "1" },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item) => {
      console.log("handle", handleDrop);
      handleDrop(item);
    },
  }));
  return (
    <div id="Droppable" ref={drop}>
      {text}
      {children}
    </div>
  );
}
export default Droppable;
