import { Button, Card, Col, Descriptions, Divider, message, Popconfirm, Row } from 'antd';
import React from 'react';
import { useOrder, useOrderUpdate } from '../OrderContext';
import { DeleteOutlined } from '@ant-design/icons';
import { transformScaleToValue, translateMaterialToSwedish } from '../utils';

const OrderList = () => {
  const orders = useOrder();
  const updateOrder = useOrderUpdate();

  const deleteOrder = (id) => {
    updateOrder((order) => order.filter((o) => o.id !== id));
    message.success("order borttagen");
  };

  return (
    <div style={{ padding: '1rem' }}>
      <Row gutter={[16, 16]} justify="left">
        <Divider orientation="left" plain>
          <h3>Orderlista</h3>
        </Divider>
        {orders.length ? (
          orders.map((order) => (
            <Col span={6} offset={0}>
              <Card
                title={`Order #${order.id}`}
                bordered={false}
                extra={
                  <Popconfirm
                    title="Ta bort order"
                    okText="Ja"
                    cancelText="Nej"
                    icon={<DeleteOutlined style={{ color: 'red' }} />}
                    onConfirm={() => deleteOrder(order.id)}
                  >
                    <Button type="primary" icon={<DeleteOutlined />} />
                  </Popconfirm>
                }
              >
             <Descriptions column={1} size="small" layout="horizontal">
                <Descriptions.Item label="Utförande">{translateMaterialToSwedish(order.model.material)}</Descriptions.Item>
                <Descriptions.Item label="Mått">{transformScaleToValue(order.model.scale[2])} x 100 x 35 mm</Descriptions.Item>
                <Descriptions.Item label="Antal">{order.quantity}</Descriptions.Item>
                <Descriptions.Item label="Pris">{order.price.toFixed(2)}</Descriptions.Item>
              </Descriptions>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={8} offset={1}>
            <h4>Inga ordrar tillaga</h4>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default OrderList;
