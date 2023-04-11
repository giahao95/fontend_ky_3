import React, { useEffect, useRef, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '../search-icon/SearchIcon';
import UserIcon from '../user-icon/UserIcon';
import CartIcon from '../cart-icon/CartIcon';
import { useUserContext } from '../../context/user.context';

const Header = () => {
  const dropdownContentDiv = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { getUserDB } = useUserContext();

  useEffect(() => {
    getUserDB();
  }, []);

  const openDropdownMenu = () => {
    dropdownContentDiv.current.classList.toggle('dropdown-content-open');

    if (!openDropdown) {
      span2.current.style.opacity = '0';
      span1.current.style.transform = 'translateY(8px) rotate(45deg)';
      span3.current.style.transform = 'translateY(-8px) rotate(-45deg)';
      setOpenDropdown(!openDropdown);
    } else {
      span2.current.style.opacity = '1';
      span1.current.style.transform = 'translateY(0) rotate(0)';
      span3.current.style.transform = 'translateY(0) rotate(0)';
      setOpenDropdown(!openDropdown);
    }
  };

  return (
    <header className="header-container">
      <Link to="/">
        <img src="/books-logo.png" alt="Books logo" className="header-logo" />
      </Link>
      <nav className="navbar" onClick={openDropdownMenu}>
        <div className="dropdown-hambuger">
          <span ref={span1}></span>
          <span ref={span2}></span>
          <span ref={span3}></span>
        </div>
        <div className="dropdown-content" ref={dropdownContentDiv}>
          <div className="category">
            <Link to="/products/all">Thể Loại Sách</Link>
            <div className="category-content">
              <Link to={`/products/Tiểu thuyết`}>Tiểu thuyết</Link>
              <Link to={`/products/Triết học`}>Triết học</Link>
              <Link to={`/products/Tâm lý học`}>Tâm lý học</Link>
              <Link to={`/products/Thời sự - Chính trị`}>Thời sự - Chính trị</Link>
              <Link to={`/products/Thiếu nhi`}>Thiếu nhi</Link>
            </div>
          </div>
          <Link to="/contact">Liên Hệ</Link>
        </div>
      </nav>
      <div className="header-icon">
        <SearchIcon />
        <UserIcon />
        <Link to="/cart" style={{ color: '#000' }}>
          <CartIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
