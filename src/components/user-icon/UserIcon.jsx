import React, { useEffect, useMemo, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Popover, notification } from 'antd';
import { useUserContext } from '../../context/user.context';

const UserIcon = () => {
  const { user, setUser } = useUserContext();

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    openNotification('success', 'Đăng xuất thành công');
  };

  const content = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
      <Link to="/accountInfo">Thông tin cá nhân</Link>
      <Link onClick={logout}>Đăng xuất</Link>
    </div>
  );

  return user ? (
    <Popover placement="bottom" content={content}>
      <span style={{ fontSize: '1rem' }}>{user.name}</span>
    </Popover>
  ) : (
    <Link to="/login">
      <UserOutlined />
    </Link>
  );
};

export default UserIcon;
