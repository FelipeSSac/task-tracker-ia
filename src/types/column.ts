import { Card } from "./card";

interface Column {
  id: string;
  title: string;
  cards: Card[];
  color: string;
}

export { type Column };
