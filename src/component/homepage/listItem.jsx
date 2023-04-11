import React from 'react';
import { Card } from 'antd';
import '../homepage/homepage.css';

const { Meta } = Card;
const ListProduct = ({ productName, productprice, productAddress }) => {
  const address = '/image/' + productAddress.toString() + '.jpg';
  console.log(address);
  return (
    <div className="product_grid">
      <Card
        hoverable
        style={{
          width: 180,
        }}
        cover={<img alt="example" src={address} />}
      >
        <Meta title={productName} description={productprice} />
      </Card>
    </div>
  );
};

export default ListProduct;
