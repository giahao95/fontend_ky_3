import React, { useRef, useState } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './search-icon.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const { Search } = Input;

const SearchIcon = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const onSearch = async (value) => {
    navigate(`/products/all?name=${value}`);
  };

  const openCloseSearch = (e) => {
    if (e.target.matches('svg') || e.target.matches('path')) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div onClick={openCloseSearch}>
      <Link to="/products/all" style={{ color: '#000' }}>
        <SearchOutlined />
      </Link>

      {/* <div className={`search-content ${isOpen ? 'search-open' : null}`} ref={searchRef}>
        <Search
          placeholder=" Tìm kiếm tên sách"
          enterButton="Search"
          onSearch={onSearch}
          allowClear
          style={{
            width: '60%',
          }}
        />
        <CloseOutlined onClick={openCloseSearch} />
      </div> */}
    </div>
  );
};

export default SearchIcon;
