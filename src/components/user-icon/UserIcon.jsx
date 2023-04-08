import React, { useEffect, useMemo, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';

const UserIcon = () => {
  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLogin(false);
  };

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <a to="/signin" onClick={logout}>
        Đăng xuất
      </a>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return isLogin ? (
    <Popover placement="bottom" content={content}>
      <UserOutlined style={{ color: isLogin ? 'green' : 'black' }} />
    </Popover>
  ) : (
    <Link to="/dangnhap">
      <UserOutlined style={{ color: isLogin ? 'green' : 'black' }} />
    </Link>
  );
};

export default UserIcon;
