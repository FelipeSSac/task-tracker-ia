import { Badge } from "@/components/atoms/badge";

import { Button } from "@/components/atoms/button";
import { Column } from "@/components/organisms/board-column";
import { MoreHorizontal } from "lucide-react";

interface ColumnHeaderProps {
  column: Column;
}

const ColumnHeader = ({ column }: ColumnHeaderProps) => {
  return (
    <div
      className={`${column.color} p-4 rounded-t-xl border-b border-white/20`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 flex items-center">
          {column.title}
          <Badge variant="secondary" className="ml-2 bg-white/50 text-black">
            {column.cards.length}
          </Badge>
        </h2>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export { ColumnHeader };
