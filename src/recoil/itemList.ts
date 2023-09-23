import { atom, selectorFamily } from 'recoil';

export type Item = {
  name: string;
  image: string;
  description: string;
};

const items: Item[] = [
  {
    name: 'items1',
    image: 'https://picsum.photos/200',
    description: 'items2 ',
  },
  {
    name: 'items2',
    image: 'https://picsum.photos/200',
    description: 'items2',
  },
  {
    name: 'items3',
    image: 'https://picsum.photos/200',
    description: 'items3',
  },
];

// export const itemListState = atom<Item[]>({
//   key: 'itemListState',
//   default: items,
// });

export const itemListState = selectorFamily({
  key: 'itemListState',
  get: (userId: number) => async () => {
    const userData = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    return userData;
  },
});
