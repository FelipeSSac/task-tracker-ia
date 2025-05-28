"use client";

import { useDroppable } from "@dnd-kit/core";
import { DroppableProps } from "./props";

function Droppable({ id, children, ...rest }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...rest}>
      {children}
    </div>
  );
}

export default Droppable;
