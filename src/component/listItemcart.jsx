import React, { useEffect } from 'react';
import { Card, InputNumber, Space, Button, Table } from 'antd';
import './cart.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useCartContext } from '../context/cart.context';

const ListItemcart = () => {
  const { cart, setCart } = useCartContext();

  const handleDelete = (id) => {
    const index = cart.findIndex((book) => book._id === id);
    console.log(cart[index].cartNum);
    if (cart[index].cartNum === 1) {
      console.log('1', index);
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([...cart]);
    } else {
      cart[index].cartNum -= 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart([...cart]);
    }
  };
  // console.log(cartData);
  const columns = [
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (url) => <img width={100} src={url} />,
    },
    {
      title: 'Tên sách',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p style={{ textTransform: 'capitalize' }}>{text}</p>,
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Xóa',
      dataIndex: 'remove',
      key: 'remove',
      render: (_, record) => (
        <DeleteOutlined style={{ fontSize: '1.2rem', color: 'red' }} onClick={() => handleDelete(record.key)} />
      ),
    },
  ];

  const data = cart?.map((book, index) => {
    return {
      key: book._id,
      image: book.address,
      name: book.name,
      quantity: book.cartNum,
    };
  });

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart([...cartData]);
    }
  }, []);

  console.log(cart);

  return (
    <div className="Cart__Item">
      {/* <div className="cart_header">
        <span className="u-h2 Left">Product</span>
        <span className="u-h4 ">Quanity</span>
        <span className="u-h4 Right">Total</span>
      </div>
      <Card>
        <div className="Cart__ItemList">
          <div className="product_item">
            <div className="product_image">
              <img src="/image/1.jpg" alt="Smiley face" width="120px" />
            </div>
            <div className="product_info">
              <p>{datasach[0].name}</p>
              <p>Tác giả : {datasach[0].author}</p>

              <p> Giá : {datasach[0].price}</p>
            </div>
          </div>
          <div className="button_Quanity">
            <Space>
              <InputNumber defaultValue={3} min={1} max={100000} />
              <Button type="text">Remove</Button>
            </Space>
          </div>
          <div>
            <span> 20$ </span>
          </div>
        </div>
      </Card> */}
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default ListItemcart;
