"use client";

import { useState } from "react";
import { BoardColumn } from "@/components/organisms/board-column";
import { Column } from "@/types/column";

const Board = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "todo",
      title: "To Do",
      color: "bg-slate-100",
      cards: [
        {
          id: "1",
          title: "Design new landing page",
          description:
            "Create wireframes and mockups for the new website landing page",
          assignee: "JD",
          dueDate: "2024-01-15",
          comments: 3,
          attachments: 2,
          priority: "high",
          tags: ["Design", "UI/UX"],
        },
        {
          id: "2",
          title: "Research user feedback",
          description: "Analyze customer surveys and interview results",
          assignee: "SM",
          dueDate: "2024-01-12",
          comments: 1,
          priority: "medium",
          tags: ["Research", "UX"],
        },
        {
          id: "3",
          title: "Setup development environment",
          assignee: "AL",
          priority: "low",
          tags: ["Development"],
        },
      ],
    },
    {
      id: "progress",
      title: "In Progress",
      color: "bg-blue-100",
      cards: [
        {
          id: "4",
          title: "Implement authentication system",
          description:
            "Build login/logout functionality with security features",
          assignee: "RK",
          dueDate: "2024-01-18",
          comments: 5,
          attachments: 1,
          priority: "high",
          tags: ["Backend", "Security"],
        },
        {
          id: "5",
          title: "Create API documentation",
          assignee: "MJ",
          comments: 2,
          priority: "medium",
          tags: ["Documentation", "API"],
        },
      ],
    },
    {
      id: "review",
      title: "Review",
      color: "bg-yellow-100",
      cards: [
        {
          id: "6",
          title: "Code review for payment module",
          description: "Review implementation of Stripe payment integration",
          assignee: "TB",
          comments: 8,
          priority: "high",
          tags: ["Review", "Payment"],
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "bg-green-100",
      cards: [
        {
          id: "7",
          title: "Setup CI/CD pipeline",
          description: "Configured automated testing and deployment",
          assignee: "LP",
          comments: 4,
          priority: "medium",
          tags: ["DevOps", "Automation"],
        },
        {
          id: "8",
          title: "Database schema design",
          assignee: "NK",
          comments: 2,
          priority: "high",
          tags: ["Database", "Backend"],
        },
      ],
    },
  ]);

  const [draggedCard, setDraggedCard] = useState<{
    cardId: string;
    fromColumn: string;
  } | null>(null);

  const handleDragStart = (cardId: string, columnId: string) => {
    setDraggedCard({ cardId, fromColumn: columnId });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    if (!draggedCard) return;

    const { cardId, fromColumn } = draggedCard;
    if (fromColumn === targetColumnId) return;

    setColumns((prev) => {
      const newColumns = [...prev];
      const fromColumnIndex = newColumns.findIndex(
        (col) => col.id === fromColumn
      );
      const toColumnIndex = newColumns.findIndex(
        (col) => col.id === targetColumnId
      );

      const cardToMove = newColumns[fromColumnIndex].cards.find(
        (card) => card.id === cardId
      );
      if (!cardToMove) return prev;

      newColumns[fromColumnIndex].cards = newColumns[
        fromColumnIndex
      ].cards.filter((card) => card.id !== cardId);
      newColumns[toColumnIndex].cards.push(cardToMove);

      return newColumns;
    });

    setDraggedCard(null);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <BoardColumn
            key={column.id}
            column={column}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            handleDragStart={handleDragStart}
            getPriorityColor={getPriorityColor}
          />
        ))}
      </div>
    </div>
  );
};

export { Board };
