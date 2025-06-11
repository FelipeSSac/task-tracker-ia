import { Column } from "@/types/column";

export interface BoardColumnProps {
  column: Column;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent, targetColumnId: string) => void;
  handleDragStart: (cardId: string, columnId: string) => void;
  getPriorityColor: (priority?: string) => string;
}
