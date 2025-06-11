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

export { type Card };
