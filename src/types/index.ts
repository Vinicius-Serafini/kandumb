export interface Card {
  id: number;
  title: string;
  description: string;
}

export interface Group {
  id: number;
  title: string;
  cards: Card[];
}
