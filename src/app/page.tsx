"use client";

import Header from "@/components/molecules/header";
import {
  DndContext,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Page = () => {
  const { setNodeRef: refA } = useDroppable({
    id: "aid",
    data: { type: "section", name: "Section A" },
  });
  const { setNodeRef: refB } = useDroppable({
    id: "bid",
    data: { type: "section", name: "Section B" },
  });
  const { setNodeRef: refC } = useDroppable({
    id: "cid",
    data: { type: "section", name: "Section C" },
  });

  const {
    attributes: a12,
    listeners: l12,
    setNodeRef: ref12,
    transform: t12,
  } = useDraggable({
    id: "card12",
    data: { type: "card", name: "Card 12" },
  });
  const {
    attributes: a31,
    listeners: l31,
    setNodeRef: ref31,
    transform: t31,
  } = useDraggable({
    id: "card31",
    data: { type: "card", name: "Card 31" },
  });
  const {
    attributes: a43,
    listeners: l43,
    setNodeRef: ref43,
    transform: t43,
  } = useDraggable({
    id: "card43",
    data: { type: "card", name: "Card 43" },
  });

  const style12 = {
    transform: CSS.Translate.toString(t12),
    transition: "transform 250ms ease",
    padding: "1rem",
    margin: "0.5rem",
  };

  const style31 = {
    transform: CSS.Translate.toString(t31),
    transition: "transform 250ms ease",
    padding: "1rem",
    margin: "0.5rem",
  };

  const style43 = {
    transform: CSS.Translate.toString(t43),
    transition: "transform 250ms ease",
    padding: "1rem",
    margin: "0.5rem",
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      console.log(`Dragged ${active.id} over ${over.id}`);
    }
  };

  return (
    <main>
      <Header />
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-3 gap-4 p-4">
          <section className="block w-full min-h-96 bg-amber-200 p-4 rounded-lg">
            <h2 className="mb-4 text-lg font-bold">Section A</h2>
            <button
              ref={ref12}
              style={style12}
              {...l12}
              {...a12}
              className="bg-blue-500 text-white rounded-lg shadow-md w-full cursor-grab active:cursor-grabbing"
            >
              <h1>Card 12</h1>
              <p>This is the content of card 12.</p>
              <p>Draggable item.</p>
            </button>
          </section>

          <section className="block w-full min-h-96 bg-green-200 p-4 rounded-lg">
            <h2 className="mb-4 text-lg font-bold">Section B</h2>
            <button
              ref={ref31}
              style={style31}
              {...l31}
              {...a31}
              className="bg-blue-500 text-white rounded-lg shadow-md w-full cursor-grab active:cursor-grabbing"
            >
              <h1>Card 31</h1>
              <p>This is the content of card 31.</p>
              <p>Draggable item.</p>
            </button>
          </section>

          <section className="block w-full min-h-96 bg-red-200 p-4 rounded-lg">
            <h2 className="mb-4 text-lg font-bold">Section C</h2>
            <button
              ref={ref43}
              style={style43}
              {...l43}
              {...a43}
              className="bg-blue-500 text-white rounded-lg shadow-md w-full cursor-grab active:cursor-grabbing"
            >
              <h1>Card 43</h1>
              <p>This is the content of card 43.</p>
              <p>Draggable item.</p>
            </button>
          </section>
        </div>
      </DndContext>
    </main>
  );
};

export default Page;
