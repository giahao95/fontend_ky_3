import React, { useEffect } from 'react';
import ListItemcart from '../component/listItemcart';
import CheckOut from '../component/cart/checkOut';
import { Row, Col } from 'antd';
import { useUserContext } from '../context/user.context';
import '../component/cart.css';
import { useNavigate } from 'react-router-dom';

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

const Cart = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);
  // console.log(datasach);
  return (
    <div className="cart_container">
      <Row>
        <Col span={24}>
          <h2 className="Cart_header">Giỏ hàng</h2>
          <ListItemcart />
        </Col>
        <Col span={24}>
          <CheckOut />
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
