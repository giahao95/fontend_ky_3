import { Button, Form, Input, Typography, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import './user-info.css';
import { useUserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const { user, updateUserDB } = useUserContext();
  const [isUserLoad, setIsUserLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsUserLoad(false);
    if (user) {
      setIsUserLoad(true);
    }

    if (!localStorage.getItem('accessToken')) {
      setIsUserLoad(false);
      navigate('/login');
    }
  }, [user]);

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const updateUser = (values) => {
    const { name, email, password } = values;
    updateUserDB(name, email, password);
    openNotification('success', 'Cập nhật thành công');
  };

  return (
    <div className="userInfo">
      {isUserLoad ? (
        <>
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            Thông tin cá nhân
          </Typography.Title>
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            name="normal_login"
            className="update-form"
            labelAlign="left"
            onFinish={updateUser}
          >
            <Form.Item
              label="Họ tên"
              name="name"
              initialValue={user?.name}
              rules={[
                {
                  required: true,
                  message: 'Họ tên không được để trống!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Bạn nhập không phải là email!',
                },
                {
                  required: true,
                  message: 'Email không được để trốnng!',
                },
              ]}
              initialValue={user?.email}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Mật khẩu" name="password">
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="update-form-button">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : null}
    </div>
  );
};

export default UserInfo;
