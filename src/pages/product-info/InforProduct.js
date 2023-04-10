import React from 'react';
import './InforProduct.css';
import { Button } from 'antd';

const InforProduct = () => {
  return (
    <div className="book">
      <div className="book-image-container">
        <img
          src={'https://cdn.shopify.com/s/files/1/0592/0695/9288/products/EPS_Micellar_WebNew_568x756.jpg?v=1632175208'}
          alt="Book Cover"
        />
      </div>
      <div className="book-details-container">
        <div className="book-details-header">
          <div className="book-title">Những Tù Nhân của địa lý</div>
          <div className="book-author">Tên tác giả: Tim Marshall</div>
          <div className="book-publisher">Nhà xuất bản: Hội nhà văn</div>
        </div>
        <div className="book-details">
          <div className="book-pages">Số trang: 281</div>
          <div className="book-year">Năm phát hành: 1960</div>
        </div>

        <Button
          style={{
            width: '500px',
            height: '48px',
            border: '1px solid black',
            backgroundColor: 'Black',
            fontSize: '24px',
          }}
          type="primary"
        >
          Thêm vào giỏ hàng
        </Button>
        {/* <div className="book-description">
            <h2>Giới Thiệu Sách</h2>
          <p>
          Khi chúng ta đang vươn tới những vì sao, chính bởi những thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung tay để ứng phó: du hành vào vũ trụ không phải với tư cách người Nga, người Trung Quốc hay người Mỹ, mà là những đại diện của nhân loại. Nhưng cho đến nay, mặc dù đã thoát khỏi sự kìm hãm của trọng lực, chúng ta vẫn đang bị giam giữ trong tâm trí của chính mình, bị giới hạn bởi sự nghi ngờ của mình về ‘kẻ khác’, và do đó bởi cuộc cạnh tranh chính yếu về tài nguyên. Phía trước chúng ta còn cả một chặng đường dài.”",
            "“Người Nga vẫn sẽ lo âu dõi mắt về phía tây, nơi có dải đất vẫn còn là bình nguyên, dễ bị xâm nhập; Ấn Độ và Trung Quốc vẫn sẽ bị cách ngăn bởi dãy Himalaya sừng sững, và địa lý sẽ xác định bản chất của những cuộc xung đột giữa hai nước trong tương lai, bất chấp sự phát triển của công nghệ và quân sự; “Đại gia đình châu Âu” đói khát năng lượng, bị phụ thuộc vào những đường ống dẫn dầu từ Nga, và do đó họ không thực sự có nhiều lựa chọn trên bàn đàm phán; sự suy yếu của Hoa Kỳ trong vị thế một siêu cường số một dường như đã bị thổi phồng quá mức, nếu xét tới những lợi thế địa lý mà nước này đã dày công gây dựng…",
            "Và còn rất nhiều dẫn chứng cho thấy vai trò then chốt của các nhân tố địa lý trong bối cảnh chính trị hiện đại. Nhân loại đang trên đường hiện thực hóa giấc mơ vươn vào không gian. Nhưng Tim Marshall vẫn xác quyết rằng: “Các nhân tố địa lý vốn đã góp phần xác định lịch sử đa phần sẽ tiếp tục xác định tương lai của chúng ta”, và rằng: “Địa lý vẫn luôn luôn là một loại nhà tù định nghĩa một quốc gia là gì, hoặc có thể là gì, và là một nhà tù mà các nhà lãnh đạo thế giới thường phải nỗ lực để thoát ra”.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default InforProduct;
