import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PricingState } from './typedefs';

const initialState: PricingState = {
  pricing: [
    {
      id: 1,
      service: 'Ніжки до/вище колін (+пальчики)',
      price: 350,
      part: 'legs',
    },
    {
      id: 2,
      service: 'Ніжки повністю (+пальчики)',
      price: 500,
      part: 'legs',
    },
    {
      id: 3,
      service: 'Руки до ліктя',
      price: 250,
      part: 'arms',
    },
    {
      id: 4,
      service: 'Руки повністю',
      price: 350,
      part: 'arms',
    },
    {
      id: 5,
      service: 'Бікіні класичне (+доріжка)',
      price: 300,
      part: 'body',
    },
    {
      id: 6,
      service: 'Бікіні глибоке (+доріжка)',
      price: 450,
      part: 'body',
    },
    {
      id: 25,
      service: 'Лобок',
      price: 200,
      part: 'body',
    },
    {
      id: 7,
      service: 'Сіднички',
      price: 200,
      part: 'body',
    },
    {
      id: 8,
      service: 'Стегна',
      price: 250,
      part: 'body',
    },
    {
      id: 9,
      service: 'Живіт',
      price: 200,
      part: 'body',
    },
    {
      id: 10,
      service: 'Поясничка',
      price: 200,
      part: 'body',
    },
    {
      id: 11,
      service: 'Пахви',
      price: 180,
      part: 'arms',
    },
    {
      id: 12,
      service: 'Верхня губа (вусики)',
      price: 80,
      part: 'face',
    },
    {
      id: 13,
      service: 'Підборіддя',
      price: 80,
      part: 'face',
    },
    {
      id: 14,
      service: 'Віски',
      price: 80,
      part: 'face',
    },
    {
      id: 15,
      service: 'Щічки',
      price: 80,
      part: 'face',
    },
    {
      id: 16,
      service: 'Ніс',
      price: 80,
      part: 'face',
    },
    {
      id: 17,
      service: 'Брови',
      price: 80,
      part: 'face',
    },
    {
      id: 18,
      service: 'Обличчя повністю',
      price: 300,
      part: 'face',
    },
    {
      id: 19,
      service: 'Спина',
      price: 300,
      part: 'body',
    },
    {
      id: 20,
      service: 'Біла лінія живота',
      price: 80,
      part: 'body',
    },
    {
      id: 21,
      service: 'Ареоли',
      price: 80,
      part: 'face',
    },
    {
      id: 22,
      service: 'Лікування врослого волосся',
      include: [
        'Зона бікіні',
        'кислотний або ензимний пілінг',
        'механічна чистка',
        'SOS маска',
      ],
      price: 400,
    },
    {
      id: 23,
      service: 'Скраб/ензими перед епіляцією',
      price: 120,
    },
    {
      id: 24,
      service: 'SOS маска відбілююча і протизапальна',
      price: 150,
    },
    {
      id: 26,
      service: 'Крем знеболювальний',
      price: 120,
    },
    {
      id: 27,
      service: 'Механічна чистка від врослого',
      price: 100,
    },
    {
      id: 28,
      service: 'Кислотний пілінг',
      price: 120,
    },
    {
      id: 29,
      service: 'SPA для бікіні',
      price: 750,
    },
  ],
  partOfPrice: null,
};

const pricingSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrentPricePartOfBody(state, action: PayloadAction<string>) {
      state.partOfPrice = state.pricing.filter(
        (item) => item.part === action.payload,
      );
    },
  },
});

export default pricingSlice;
