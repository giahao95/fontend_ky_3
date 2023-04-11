import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography, notification } from 'antd';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const openNotification = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const loginDB = async (values) => {
    const { email, password } = values;

    const response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const result = await response.json();
      localStorage.setItem('accessToken', result.token);
      openNotification('success', 'Đăng nhập thành công');
      setUser({ _id: result._id, name: result.name, email: result.email });
      navigate(-1);
    } else {
      openNotification('error', 'Đăng nhập thất bại');
    }
  };

  return (
    <div className="login-container">
      <Typography.Title level={2}>Đăng nhập</Typography.Title>
      <Form name="normal_login" className="login-form" onFinish={loginDB}>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Bạn nhập không phải là email!',
            },
            {
              required: true,
              message: 'Vui lòng nhập email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng nhập
          </Button>
        </Form.Item>
        <Divider plain>Hoặc</Divider>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Nếu bạn đã có tài khoản, hãy chọn{' '}
          <Link to="/register" className="link">
            đăng ký!
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
