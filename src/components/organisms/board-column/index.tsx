import { Button } from "@/components/atoms/button";
import { Plus } from "lucide-react";
import { ColumnCard } from "@/components/molecules/column-card";
import { ColumnHeader } from "@/components/molecules/column-header";
import { BoardColumnProps } from "./props";

const BoardColumn = ({
  column,
  handleDragOver,
  handleDrop,
  handleDragStart,
  getPriorityColor,
}: BoardColumnProps) => {
  return (
    <div
      key={column.id}
      className="bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, column.id)}
    >
      <ColumnHeader column={column} />

      <div className="p-4 space-y-3 min-h-[200px]">
        {column.cards.map((card) => (
          <ColumnCard
            key={card.id}
            card={card}
            column={column}
            handleDragStart={handleDragStart}
            getPriorityColor={getPriorityColor}
          />
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
  );
};

export { BoardColumn };
