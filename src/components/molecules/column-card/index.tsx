import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import { Badge } from "@/components/atoms/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Calendar, MessageSquare, Paperclip } from "lucide-react";
import { ColumnCardProps } from "./props";

const ColumnCard = ({
  card,
  column,
  handleDragStart,
  getPriorityColor,
}: ColumnCardProps) => {
  return (
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
                <span>{new Date(card.dueDate).toLocaleDateString()}</span>
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
  );
};

export { ColumnCard };
