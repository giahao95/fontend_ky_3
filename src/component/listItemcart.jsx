import React, { useEffect } from 'react';
import { Card, InputNumber, Space, Button, Table } from 'antd';
import './cart.css';
import { DeleteOutlined } from '@ant-design/icons';
import { useCartContext } from '../context/cart.context';

// const datasach = [
//   {
//     name: ' Những Tù Nhân  của địa lý ',
//     address: 1,
//     tag: ['like', 'best seller'],
//     id: 1,
//     Click: 0,
//     author: 'Tim Marshall',
//     pulish: '30-11-2020',
//     tran: 'Phan Linh Lan',
//     price: 11900,
//     nxb: 'Hội nhà văn',
//     page: 432,
//     Rate: 4,
//     category: ['Kinh Tế Chính Trị', 'like', 'best seller'],
//     description: [
//       '“Khi chúng ta đang vươn tới những vì sao, chính bởi những thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung tay để ứng phó: du hành vào vũ trụ không phải với tư cách người Nga, người Trung Quốc hay người Mỹ, mà là những đại diện của nhân loại. Nhưng cho đến nay, mặc dù đã thoát khỏi sự kìm hãm của trọng lực, chúng ta vẫn đang bị giam giữ trong tâm trí của chính mình, bị giới hạn bởi sự nghi ngờ của mình về ‘kẻ khác’, và do đó bởi cuộc cạnh tranh chính yếu về tài nguyên. Phía trước chúng ta còn cả một chặng đường dài.”',
//       '“Người Nga vẫn sẽ lo âu dõi mắt về phía tây, nơi có dải đất vẫn còn là bình nguyên, dễ bị xâm nhập; Ấn Độ và Trung Quốc vẫn sẽ bị cách ngăn bởi dãy Himalaya sừng sững, và địa lý sẽ xác định bản chất của những cuộc xung đột giữa hai nước trong tương lai, bất chấp sự phát triển của công nghệ và quân sự; “Đại gia đình châu Âu” đói khát năng lượng, bị phụ thuộc vào những đường ống dẫn dầu từ Nga, và do đó họ không thực sự có nhiều lựa chọn trên bàn đàm phán; sự suy yếu của Hoa Kỳ trong vị thế một siêu cường số một dường như đã bị thổi phồng quá mức, nếu xét tới những lợi thế địa lý mà nước này đã dày công gây dựng…',
//       'Và còn rất nhiều dẫn chứng cho thấy vai trò then chốt của các nhân tố địa lý trong bối cảnh chính trị hiện đại. Nhân loại đang trên đường hiện thực hóa giấc mơ vươn vào không gian. Nhưng Tim Marshall vẫn xác quyết rằng: “Các nhân tố địa lý vốn đã góp phần xác định lịch sử đa phần sẽ tiếp tục xác định tương lai của chúng ta”, và rằng: “Địa lý vẫn luôn luôn là một loại nhà tù định nghĩa một quốc gia là gì, hoặc có thể là gì, và là một nhà tù mà các nhà lãnh đạo thế giới thường phải nỗ lực để thoát ra”.',
//       'Hay nói cách khác, theo luận điểm của Tim Marshall, thì một thế kỷ nữa kể từ bây giờ, nhân loại vẫn sẽ là “những tù nhân của địa lý”.“Một suy ngẫm cốt lõi và chi tiết về những động lực địa chính trị tồn tại trên toàn cầu.” - Tiến sĩ Sajjan M. Gohel',
//     ],
//     review: {
//       rating: 5,
//       comment:
//         'Sách phân tích sâu sắc những khía cạnh địa lý, chính trị và đặc thù các dân tộc. Sự khác nhau của tinh thần dân tộc trên cơ sở sự khác nhau giữa đặc tính từng vùng đất...',
//       user: 1,
//     },
//   },
// ];

const ListItemcart = () => {
  const { cart, setCart } = useCartContext();
  const cartData = JSON.parse(localStorage.getItem('cart'));

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
