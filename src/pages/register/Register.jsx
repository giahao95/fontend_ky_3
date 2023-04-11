import React, { useEffect } from 'react';
import { Button, Divider, Form, Input, Typography, notification } from 'antd';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user.context';

const Register = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

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

  const registerUser = async (values) => {
    const { name, email, confirm } = values;

    const response = await fetch('http://localhost:5000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password: confirm }),
    });

    if (response.status >= 200 && response.status < 300) {
      console.log('success');
      openNotification('success', 'Đăng ký thành công');
      navigate('/login');
    } else {
      const error = await response.json();
      openNotification('error', error.message);
    }
  };

  return (
    <div className="register-container">
      <Typography.Title level={2}>Đăng ký</Typography.Title>
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name="normal_login"
        className="register-form"
        onFinish={registerUser}
      >
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập họ tên!',
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
              message: 'Vui lòng nhập email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Mật khẩu" name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Xác thực mật khẩu"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập xác thực mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Đăng ký
          </Button>
        </Form.Item>
        <Divider plain>Hoặc</Divider>
        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Nếu bạn chứa có tài khoản, hãy chọn{' '}
          <Link to="/login" className="link">
            đăng nhập!
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
