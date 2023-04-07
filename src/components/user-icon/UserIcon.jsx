import React, { useMemo, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';

const content = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <a to="/signin">Đăng xuất</a>
  </div>
);

const UserIcon = () => {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Popover placement="bottom" content={content}>
      <UserOutlined style={{ color: isLogin ? 'green' : 'black' }} />
    </Popover>
  ) : (
    <UserOutlined style={{ color: isLogin ? 'green' : 'black' }} />
  );
};

export default UserIcon;
