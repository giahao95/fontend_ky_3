import React, { useRef, useState } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './search-icon.css';

const { Search } = Input;

const SearchIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const onSearch = (value) => {
    console.log(value);
  };

  const openCloseSearch = (e) => {
    if (e.target.matches('svg') || e.target.matches('path')) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div onClick={openCloseSearch}>
      <SearchOutlined />
      <div className={`search-content ${isOpen ? 'search-open' : null}`} ref={searchRef}>
        <Search
          placeholder="Tìm kiếm sách"
          enterButton="Search"
          allowClear
          onSearch={onSearch}
          style={{
            width: '60%',
          }}
        />
        <CloseOutlined onClick={openCloseSearch} />
      </div>
    </div>
  );
};

export default SearchIcon;
