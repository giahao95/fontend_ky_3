import React, { useState } from 'react';
import { Input, Checkbox, Radio, Form, Row, Col, Card, Space, Layout, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;

const datasach = [
  {
    name: ' Những Tù Nhân  của địa lý ',
    address: 1,
    tag: ['like', 'best seller'],
    id: 1,
    Click: 0,
    author: 'Tim Marshall',
    pulish: '30-11-2020',
    tran: 'Phan Linh Lan',
    price: 11900,
    nxb: 'Hội nhà văn',
    page: 432,
    Rate: 4,
    category: ['Kinh Tế Chính Trị', 'like', 'best seller'],
    description: [
      '“Khi chúng ta đang vươn tới những vì sao, chính bởi những thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung tay để ứng phó: du hành vào vũ trụ không phải với tư cách người Nga, người Trung Quốc hay người Mỹ, mà là những đại diện của nhân loại. Nhưng cho đến nay, mặc dù đã thoát khỏi sự kìm hãm của trọng lực, chúng ta vẫn đang bị giam giữ trong tâm trí của chính mình, bị giới hạn bởi sự nghi ngờ của mình về ‘kẻ khác’, và do đó bởi cuộc cạnh tranh chính yếu về tài nguyên. Phía trước chúng ta còn cả một chặng đường dài.”',
      '“Người Nga vẫn sẽ lo âu dõi mắt về phía tây, nơi có dải đất vẫn còn là bình nguyên, dễ bị xâm nhập; Ấn Độ và Trung Quốc vẫn sẽ bị cách ngăn bởi dãy Himalaya sừng sững, và địa lý sẽ xác định bản chất của những cuộc xung đột giữa hai nước trong tương lai, bất chấp sự phát triển của công nghệ và quân sự; “Đại gia đình châu Âu” đói khát năng lượng, bị phụ thuộc vào những đường ống dẫn dầu từ Nga, và do đó họ không thực sự có nhiều lựa chọn trên bàn đàm phán; sự suy yếu của Hoa Kỳ trong vị thế một siêu cường số một dường như đã bị thổi phồng quá mức, nếu xét tới những lợi thế địa lý mà nước này đã dày công gây dựng…',
      'Và còn rất nhiều dẫn chứng cho thấy vai trò then chốt của các nhân tố địa lý trong bối cảnh chính trị hiện đại. Nhân loại đang trên đường hiện thực hóa giấc mơ vươn vào không gian. Nhưng Tim Marshall vẫn xác quyết rằng: “Các nhân tố địa lý vốn đã góp phần xác định lịch sử đa phần sẽ tiếp tục xác định tương lai của chúng ta”, và rằng: “Địa lý vẫn luôn luôn là một loại nhà tù định nghĩa một quốc gia là gì, hoặc có thể là gì, và là một nhà tù mà các nhà lãnh đạo thế giới thường phải nỗ lực để thoát ra”.',
      'Hay nói cách khác, theo luận điểm của Tim Marshall, thì một thế kỷ nữa kể từ bây giờ, nhân loại vẫn sẽ là “những tù nhân của địa lý”.“Một suy ngẫm cốt lõi và chi tiết về những động lực địa chính trị tồn tại trên toàn cầu.” - Tiến sĩ Sajjan M. Gohel',
    ],
    review: {
      rating: 5,
      comment:
        'Sách phân tích sâu sắc những khía cạnh địa lý, chính trị và đặc thù các dân tộc. Sự khác nhau của tinh thần dân tộc trên cơ sở sự khác nhau giữa đặc tính từng vùng đất...',
      user: 1,
    },
  },
];

const Checkout = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [inputContact, setinputContact] = useState('');
  const [inputCountry, setinputCountry] = useState('');
  const [inputRegion, setinputRegion] = useState('');
  const [inputFirstname, setinputFirstname] = useState('');
  const [inputLastname, setinputLastname] = useState('');
  const [inputAddress, setinputAddress] = useState('');
  const [inputApartment, setinputApartment] = useState('');
  const [inputCity, setinputCity] = useState('');
  console.log(inputContact);
  console.log(inputCountry);
  console.log(inputRegion);
  console.log(inputFirstname);
  console.log(inputApartment);
  console.log(inputCity);
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header></Header>
        <Content>
          <Row justify="center">
            <div className="Checkout_container">
              <Col span={16} offset={4}>
                <div className="order_imformation">
                  <Card title="Chase Cricket Limited" bordered={false}>
                    <div>
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
                    </div>
                    <div className="shipping_address">
                      <h4 htmlFor="Contact information">Shipping address</h4>
                      <Input
                        onChange={(e) => setinputCountry(e.target.value)}
                        value={inputCountry}
                        placeholder="Country"
                      />
                      <Input
                        onChange={(e) => setinputRegion(e.target.value)}
                        value={inputRegion}
                        placeholder="Region"
                      />
                      <div className="Shiping_name">
                        <Input
                          onChange={(e) => setinputFirstname(e.target.value)}
                          value={inputFirstname}
                          placeholder="First name (optional)"
                        />
                        <Input
                          onChange={(e) => setinputLastname(e.target.value)}
                          value={inputLastname}
                          placeholder="Last name"
                        />
                      </div>
                      <Input
                        onChange={(e) => setinputAddress(e.target.value)}
                        value={inputAddress}
                        placeholder="Address"
                      />
                      <Input
                        onChange={(e) => setinputApartment(e.target.value)}
                        value={inputApartment}
                        placeholder="Apartment"
                      />
                      <Input onChange={(e) => setinputCity(e.target.value)} value={inputCity} placeholder="City" />
                    </div>
                    <div className="Product_order">
                      <Button type="text">
                        <LeftOutlined />
                        Return to cart
                      </Button>
                      <Button>Create Order</Button>
                    </div>
                  </Card>
                </div>

                <div className="product_list_order">
                  <Card>
                    <div className="order_product_item">
                      <div className="product_image">
                        <img src="/image/1.jpg" alt="Smiley face" width="120px" />
                      </div>
                      <div className="product_info">
                        <p>{datasach[0].name}</p>
                        <p>Tác giả : {datasach[0].author}</p>
                        <p> Giá : {datasach[0].price}</p>
                      </div>
                      <div className="total_line_price">
                        <span> 20$</span>
                      </div>
                    </div>
                  </Card>
                  <div className="dicount_code">
                    <Input placeholder="Discount code" />
                    <Button>Apply</Button>
                  </div>
                  <div className="file_two">
                    <p>Shipping</p>
                    <p>Calculated at next step</p>
                  </div>
                  <div className="file_two">
                    <p>Total:</p>
                    <p>20$</p>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Content>
        <Footer></Footer>
      </Layout>
    </Space>
  );
};

export default Checkout;
