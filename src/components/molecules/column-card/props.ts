import { Card } from "@/types/card";
import { Column } from "@/types/column";

export interface ColumnCardProps {
  card: Card;
  column: Column;
  handleDragStart: (cardId: string, columnId: string) => void;
  getPriorityColor: (priority?: string) => string;
}
