"use client";

import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import {
  Calendar,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
} from "lucide-react";
import { useState } from "react";

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

interface Card {
  id: string;
  title: string;
  description?: string;
  assignee?: string;
  dueDate?: string;
  comments?: number;
  attachments?: number;
  priority?: string;
  tags?: string[];
}

interface Column {
  id: string;
  title: string;
  color: string;
  cards: Card[];
}

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
          <div
            key={column.id}
            className="bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div
              className={`${column.color} p-4 rounded-t-xl border-b border-white/20`}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-800 flex items-center">
                  {column.title}
                  <Badge variant="secondary" className="ml-2 bg-white/50">
                    {column.cards.length}
                  </Badge>
                </h2>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Cards */}
            <div className="p-4 space-y-3 min-h-[200px]">
              {column.cards.map((card) => (
                <Card
                  key={card.id}
                  className="cursor-move hover:shadow-lg transition-all duration-200 bg-white/80 backdrop-blur-sm border-white/30 hover:scale-[1.02]"
                  draggable
                  onDragStart={() => handleDragStart(card.id, column.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-medium text-gray-800 leading-tight">
                        {card.title}
                      </CardTitle>
                      {card.priority && (
                        <div
                          className={`w-2 h-2 rounded-full ${getPriorityColor(
                            card.priority
                          )} flex-shrink-0 mt-1`}
                        />
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-3">
                    {card.description && (
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    )}

                    {card.tags && (
                      <div className="flex flex-wrap gap-1">
                        {card.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        {card.comments && (
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{card.comments}</span>
                          </div>
                        )}
                        {card.attachments && (
                          <div className="flex items-center space-x-1">
                            <Paperclip className="h-3 w-3" />
                            <span>{card.attachments}</span>
                          </div>
                        )}
                        {card.dueDate && (
                          <div className="flex items-center space-x-1 text-orange-600">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(card.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                      </div>

                      {card.assignee && (
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs bg-gradient-to-r from-purple-400 to-blue-400 text-white">
                            {card.assignee}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                variant="ghost"
                className="w-full border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gray-50/50 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add a card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Board };
