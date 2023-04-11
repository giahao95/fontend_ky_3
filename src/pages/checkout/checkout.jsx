import React, { useEffect, useState } from 'react';
import { Input, Checkbox, Radio, Form, Row, Col, Card, Space, Layout, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useCartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import './checkout.css';
import useFetchApiOrders from '../../hook/useFetchOrders';
import { useUserContext } from '../../context/user.context';
const { Header, Footer, Content } = Layout;

const Checkout = () => {
  const { user } = useUserContext();
  const { cart, setCart } = useCartContext();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [inputApartment, setinputApartment] = useState('');
  const [inputCity, setinputCity] = useState('');
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();
  // console.log(inputContact);
  // console.log(inputCountry);
  // console.log(inputRegion);
  // console.log(inputFirstname);
  // console.log(inputApartment);
  // console.log(inputCity);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart([...cartData]);
    }
  }, []);

  const { orders, createOrder } = useFetchApiOrders({ url: 'http://localhost:5000/orders' });
  console.log(orders);

  const handleSubmit = () => {
    if ((address, paymentMethod)) {
      const orderItems = cart?.map((item) => {
        return {
          name: item.name,
          qty: item.cartNum,
          image: item.address,
          price: item.price,
          product: item._id,
        };
      });

      console.log(localStorage.get('accessToken'));
      createOrder(
        {
          userID: user._id,
          orderItems,
          shippingAddress: address,
          paymentMethod,
          shippingPrice: 30,
          tototalPrice:
            (cart?.reduce((sum, item) => {
              return (sum += item.price * item.cartNum);
            }, 0) +
              30000) *
            ((100 - discount) / 100).toFixed(1),
        },
        localStorage.get('accessToken'),
      );

      if (orders) {
        console.log('success');
      }
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header></Header>
        <Content>
          <div className="Checkout_container">
            <Row justify="center" align="top">
              <Col xs={{ span: 20 }} lg={{ span: 11 }}>
                <div className="order_imformation">
                  <Card bordered={false}>
                    {/* <div>
                      <h2 className="order_imformation_header"> </h2>
                      <label htmlFor="Contact information">Contact information</label>
                      <Input onChange={(e) => setinputContact(e.target.value)} value={inputContact} />
                      <Checkbox checked={componentDisabled} onChange={(e) => setComponentDisabled(e.target.checked)}>
                        Email me with news and offers
                      </Checkbox>
                      <Form.Item label="Delivery method">
                        <Radio.Group>
                          <Radio value="Ship"> Ship </Radio>
                          <Radio value="Pick up"> Pick up </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div> */}
                    <div className="shipping_address">
                      <h4 htmlFor="Contact information">Thông tin giao hàng</h4>
                      <Input onChange={(e) => setName(e.target.value)} value={name} placeholder="Họ tên" />
                      <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                      <Input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        placeholder="Số điện thoại"
                      />
                      <Input onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Địa chỉ" />
                      <Input
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value={paymentMethod}
                        placeholder="Hình thúc thanh toán"
                      />
                    </div>
                    <div className="Product_order">
                      <Button type="text" onClick={() => navigate('/cart')}>
                        <LeftOutlined />
                        Trở về giỏ hàng
                      </Button>
                      <Button onSubmit={() => handleSubmit}>Tạo đơn hàng</Button>
                    </div>
                  </Card>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 11 }}>
                <div className="product_list_order">
                  {cart?.map((item, index) => {
                    return (
                      <Card key={index}>
                        <div className="order_product_item">
                          <div className="product_image">
                            <img src={item.address} alt="Smiley face" width="120px" />
                          </div>
                          <div className="product_info">
                            <p>{item.name}</p>
                            <p>Tác giả : {item.author}</p>
                            <p>Số lượng: {item.cartNum}</p>
                            <p>Đơn giá : {item.price}đ</p>
                          </div>
                          <div className="total_line_price">
                            <span>{item.cartNum * item.price}đ</span>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                  <div className="dicount_code">
                    <Input placeholder="Giảm giá" onChange={(e) => setDiscount(Number(e.target.value))} />
                  </div>
                  <div className="file_two">
                    <p>Shipping</p>
                    <p>30000đ</p>
                  </div>
                  <div className="file_two">
                    <p>Total:</p>
                    <p>
                      {(cart?.reduce((sum, item) => {
                        return (sum += item.price * item.cartNum);
                      }, 0) +
                        30000) *
                        ((100 - discount) / 100).toFixed(1)}
                      đ
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Space>
  );
};

export default Checkout;
