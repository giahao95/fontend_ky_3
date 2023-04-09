import React from 'react';
import './user-icon.css';
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
      <Link to="/account" className="user-link">
        Thông tin cá nhân
      </Link>
      <Link onClick={logout} className="user-link">
        Đăng xuất
      </Link>
    </div>
  );

  return user ? (
    <Popover placement="bottom" content={content}>
      <div className="user-icon">{user.name}</div>
    </Popover>
  ) : (
    <Link to="/login">
      <UserOutlined style={{ color: '#000' }} />
    </Link>
  );
};

export default UserIcon;
