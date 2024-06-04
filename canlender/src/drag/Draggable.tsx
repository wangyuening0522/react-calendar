import "./Draggable.less";
import { useDrag } from "react-dnd";
function Draggable({ id }: any) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  if (isDragging) {
    // 移动消失
    return <div id="drag" ref={drag}></div>;
  }
  return (
    <div ref={drag} id="Draggable">
      {id}
    </div>
  );
}
export default Draggable;
