import React, { useState } from 'react';
import { Drawer, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartIcon = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ShoppingCartOutlined onClick={showDrawer} />
      <Drawer placement="right" closable={false} onClose={onClose} open={open}>
        <Typography.Title level={2}>Giỏ hàng</Typography.Title>
      </Drawer>
    </>
  );
};

export default CartIcon;
