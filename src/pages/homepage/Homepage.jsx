import React from 'react';
import cl from './Homepage.module.css';
import Card from './components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { datasach } from '../../constants/darasach';
import { images } from '../../constants/images';
import { Link } from 'react-router-dom';
import { CCarousel, CCarouselItem, CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react';
import ListProduct from '../../component/homepage/listItem';
import { Layout } from 'antd';
import '../../component/homepage/homepage.css';

const { Content } = Layout;

const Homepage = () => {
  const bestSellers = [];
  const recommendations = [];

  const getFilteredList = (arr, tag) => {
    datasach.forEach((obj) => {
      obj.tag.filter((item) => {
        if (item === tag) {
          arr.push(obj);
        }
      });
    });
    return arr;
  };

  getFilteredList(bestSellers, 'best seller');
  getFilteredList(recommendations, 'moi');

  const popularItems = bestSellers.slice(0, 4);
  const otherPopularItems = bestSellers.slice(4);
  const recommendationsItems = recommendations.slice(0, 4);

  const ListGridItem = popularItems.map((e) => {
    return <ListProduct productAddress={e.address} productName={e.name} productprice={e.price} />;
  });

  const src =
    'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg';
  const img = images[0].image;

  return (
    <Content>
      <div className="homepage_header">
        <CCarousel controls>
          <CCarouselItem>
            <Link to="/" className={cl.homepage_header_link}>
              <div className={cl.homepage_header_bg}>
                <h1 className={cl.homepage_header_title}>Books is Life</h1>
              </div>
            </Link>
          </CCarouselItem>
          <CCarouselItem>
            <Link to="/" className={cl.homepage_header_link}>
              <div className={cl.homepage_header_bg2}></div>
            </Link>
          </CCarouselItem>
          <CCarouselItem>
            <Link to="/" className={cl.homepage_header_link}>
              <div className={cl.homepage_header_bg3}></div>
            </Link>
          </CCarouselItem>
        </CCarousel>
      </div>
      <div className={cl.homepage_content}>
        <div className={cl.homepage_about}>
          <img src={img} alt="" />
          <hr />
          <p>
            Sách là sản phẩm trí tuệ của con người, được tích lũy thông qua những kiến thức thực tiễn, nền văn hóa, lịch
            sử của các dân tộc trên thế giới, đây là công cụ để chứng minh cho những thành tựu của loài người trong quá
            trình hình thành và phát triển.
          </p>
          <hr />
        </div>
        <div className={cl.homepage_popular}>
          <h2 className={cl.title}>Best seller books</h2>
          <div className={cl.homepage_popular_items}>
            <div className={cl.homepage_item}>{ListGridItem}</div>
            <div className={cl.accordion}>
              <CAccordion>
                <CAccordionItem>
                  <CAccordionHeader>See more</CAccordionHeader>
                  <CAccordionBody>
                    <div className={cl.homepage_item2}>
                      {otherPopularItems.map((item) => (
                        <Card src={src} item={item} key={item.name} />
                      ))}
                    </div>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>
          </div>
        </div>
        <div className={cl.homepage_about}>
          <hr />
          <p>
            Đằng sau thành công của một con người không thể thiếu một cuốn sách gối đầu. Sách là kho báu tri thức của cả
            nhân loại, là kết tinh trí tuệ qua bao thế hệ con người. Một cuốn sách hay chính là chìa khóa quan trọng để
            mỗi con người có thể chinh phục mọi khó khăn và chạm đến thành công
          </p>
          <hr />
        </div>
        <div className={cl.homepage_recommendation}>
          <h2 className={cl.title}>Recommendation books</h2>
          <div className={cl.homepage_recommendation_items}>
            <div className={cl.homepage_item}>
              {recommendationsItems.map((item) => (
                <Card src={src} item={item} key={item.name} />
              ))}
            </div>
          </div>
        </div>
        <div className={cl.homepage_about}>
          <h1>About us</h1>
          <p>
            Cửa hàng Books là một trong những cửa hàng sách cũ lớn tại MindX, chuyên bán buôn bán lẻ sách cũ và truyện
            tranh các loại. Nơi đây thu hút rất nhiều sự quan tâm của mọi người khắp nơi, thu hút cả những vị khách tham
            quan du lịch bởi những đầu sách muôn hình vạn trạng, đa chủng loại phù hợp với nhiều đối tượng độc giả, đặc
            biệt là những "mọt sách''. Nằm nép mình giữa chốn đô thị ồn ã, tiệm sách vẫn giữ bên mình vẻ điềm tĩnh với
            nét đẹp cổ xưa nhưng không kém phần hiện đại đúng như tên gọi.
          </p>
          <hr />
        </div>
      </div>
    </Content>
  );
};

export default Homepage;
