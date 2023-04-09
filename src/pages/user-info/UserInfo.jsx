import { Button, Form, Input, Modal, Typography, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import './user-info.css';
import { useUserContext } from '../../context/user.context';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const { user, updateUserDB } = useUserContext();
  const [isUserLoad, setIsUserLoad] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

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
    const { name, email } = values;

    updateUserDB(name, email);
    openNotification('success', 'Cập nhật thành công');
    setIsUpdate(false);
  };

  const updatePassword = (values) => {
    const password = form.getFieldValue('password');
    const confirmPassword = form.getFieldValue('confirm');

    if (confirmPassword) {
      if (password === confirmPassword) {
        updateUserDB('', '', form.getFieldValue('confirm'));
        openNotification('success', 'Cập nhật thành công');
        setIsModalOpen(false);
        form.resetFields();
      } else {
        openNotification('error', 'Cập nhật thất bại');
      }
    } else {
      openNotification('warning', 'Mật khẩu mới chưa được nhập');
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="userInfo">
      {isUserLoad && (
        <>
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            Thông tin cá nhân
          </Typography.Title>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            name="normal_login"
            className="update-form"
            labelAlign="left"
            onFinish={updateUser}
            onFieldsChange={(_, allFields) => {
              if (user.name.trim() !== allFields[0].value.trim() || user.email.trim() !== allFields[1].value.trim()) {
                setIsUpdate(true);
              } else {
                setIsUpdate(false);
              }
            }}
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

            <div className="form-button">
              <Form.Item>
                <Button type="default" className="update-form-button" onClick={showModal}>
                  Sửa mật khẩu
                </Button>
              </Form.Item>
              <Modal
                title="Cập nhật mật khẩu"
                open={isModalOpen}
                onOk={updatePassword}
                onCancel={handleCancel}
                okText="Đồng ý"
                cancelText="Hủy"
              >
                <Form
                  form={form}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  name="normal_login"
                  labelAlign="left"
                >
                  <Form.Item label="Mật khẩu mới" name="password">
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
                        message: 'Vui lòng xác thực lại mật khẩu!',
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
                </Form>
              </Modal>
              {isUpdate && (
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Cập nhật
                  </Button>
                </Form.Item>
              )}
            </div>
          </Form>
        </>
      )}
    </div>
  );
};

export default UserInfo;
