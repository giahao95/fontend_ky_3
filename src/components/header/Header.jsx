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
        <img src="./books-logo.png" alt="Books logo" className="header-logo" />
      </Link>
      <nav className="navbar" onClick={openDropdownMenu}>
        <div className="dropdown-hambuger">
          <span ref={span1}></span>
          <span ref={span2}></span>
          <span ref={span3}></span>
        </div>
        <div className="dropdown-content" ref={dropdownContentDiv}>
          <div className="category">
            <Link to="/sach">Thể Loại Sách</Link>
            <div className="category-content">
              <Link to="">Tiểu thuyết</Link>
              <Link to="">Triết học</Link>
              <Link to="">Tâm lý học</Link>
              <Link to="">Thời sự - Chính trị</Link>
              <Link to="">Thiếu nhi</Link>
            </div>
          </div>
          <Link to="/lienhe">Liên Hệ</Link>
        </div>
      </nav>
      <div className="header-icon">
        <SearchIcon />
        <UserIcon />
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
