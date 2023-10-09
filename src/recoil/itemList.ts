import { selector, atom, selectorFamily, atomFamily } from 'recoil';

export type Item = {
  name: string;
  image: string;
  description: string;
};

export const itemState = atom({
  key: 'item',
  default: [
    {
      name: '',
      image: '',
      description: '',
    },
  ],
});

export const currentItem = selector({
  key: 'currentItem',
  get: async ({ get }) => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/items`);

    if (!response.ok) {
      throw new Error('데이터를 가져올 수 없습니다.');
    }

    const items: Item[] = await response.json();

    return items;
  },
});
