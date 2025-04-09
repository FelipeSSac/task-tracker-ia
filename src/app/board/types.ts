export interface Board {
  columns: {
    [K in TypedColumn]: Column;
  };
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
}

export type TypedColumn = "todo" | "inProgress" | "done" | "cancelled";
