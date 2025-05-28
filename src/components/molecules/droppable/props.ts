import { DroppableContainer } from "@dnd-kit/core";

interface DroppableProps extends DroppableContainer {
  id: string;
  children?: React.ReactNode;
}

export type { DroppableProps };
