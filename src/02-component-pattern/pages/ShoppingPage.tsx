import '../styles/custom-styles.css';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/';
const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png',
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title={product.title} />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage
            img={product.img}
            className='custom-image'
          />
          <ProductTitle
            title={'aer'}
            className='text-white'
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8',
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
