import { Col, Descriptions, Divider, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useOrder } from '../OrderContext';
import { calculateTotalOrderPrice } from '../utils';

const OrderSummary = () => {
  const [total, setTotal] = useState(0);

  const orders = useOrder();

  useEffect(() => {
    const totalSum = calculateTotalOrderPrice(orders);
    setTotal(totalSum);
  }, [orders]);

  return (
    <>
      <Divider orientation="left" plain>
        <h3>Summering</h3>
      </Divider>
      <Row justify="start" align="top">
        <Col span={8} offset={2}>
          <Descriptions column={1} size="small" layout="horizontal">
            <Descriptions.Item label=" Antal ordrar"> {orders.length}</Descriptions.Item>
            <Descriptions.Item label="Totalt"> {total.toFixed(2)} kr</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default OrderSummary;
