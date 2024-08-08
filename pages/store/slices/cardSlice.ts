import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  src: string;
  alt: string;
}

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
  },
});

export const { setCards, addCard } = cardSlice.actions;
export default cardSlice.reducer;