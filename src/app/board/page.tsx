"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Board {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
  cancelled: Task[];
}

interface Task {
  id: string;
  name: string;
}

const initialTasks: Board = {
  todo: [
    { id: "1", name: "Task 1" },
    { id: "2", name: "Task 2" },
  ],
  inProgress: [{ id: "3", name: "Task 3" }],
  done: [{ id: "4", name: "Task 4" }],
  cancelled: [{ id: "5", name: "Task 5" }],
};

const BoardPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragEndEvent) => {
    const { active } = event;
    const [section, taskId] = active.id.toString().split("-");
    const task = tasks[section as keyof Board].find((t) => t.id === taskId);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const [sourceSection, taskId] = active.id.toString().split("-");
    const targetSection = over.id;

    if (sourceSection === targetSection) return;

    setTasks((prev) => {
      const sourceTasks = prev[sourceSection as keyof Board];
      const targetTasks = prev[targetSection as keyof Board];

      const taskIndex = sourceTasks.findIndex((t) => t.id === taskId);
      const task = sourceTasks[taskIndex];

      return {
        ...prev,
        [sourceSection]: sourceTasks.filter((_, index) => index !== taskIndex),
        [targetSection]: [...targetTasks, task],
      };
    });

    setActiveTask(null);
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Task Board</h1>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(tasks).map(([section, sectionTasks]) => (
            <SortableContext
              key={section}
              items={sectionTasks.map((task: Task) => `${section}-${task.id}`)}
              strategy={verticalListSortingStrategy}
            >
              <div id={section} className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-4 capitalize">
                  {section}
                </h2>
                <div className="space-y-2">
                  {sectionTasks.map((task: Task) => (
                    <SortableTask
                      key={`${section}-${task.id}`}
                      id={`${section}-${task.id}`}
                      task={task}
                    />
                  ))}
                </div>
              </div>
            </SortableContext>
          ))}
        </div>
        <DragOverlay>
          {activeTask ? (
            <div className="bg-blue-500 text-white p-2 rounded-md shadow">
              {activeTask.name}
            </div>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

const SortableTask = ({ id, task }: { id: string; task: Task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-blue-500 text-white p-2 rounded-md shadow cursor-pointer"
    >
      {task.name}
    </div>
  );
};

export default BoardPage;
