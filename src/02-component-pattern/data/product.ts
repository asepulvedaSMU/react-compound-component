import { Product } from '../interfaces/interfaces';

const product1 = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
};
const product2 = {
  id: '2',
  img: './coffee-mug2.png',
  title: 'Coffee Mug - Card',
};
export const products: Product[] = [product1, product2];
