import {
  Divider,
  InputNumber,
  Form,
  Button,
  Select,
  Row,
  Col,
  Popconfirm,
  Popover,
  message,
} from 'antd';
import { useState } from 'react';
import { DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useModel, useModelUpdate } from '../ModelContext';
import { useOrderUpdate } from '../OrderContext';
import {
  calculateSingleOrderPrice,
  generateUniqeId,
  transformValueToScale,
} from '../utils';

const SettingsForm = () => {
  const updateModel = useModelUpdate();
  const model = useModel();
  const updateOrder = useOrderUpdate();

  const [quantity, setQuantity] = useState(1);

  const onMaterialChange = (value) => {
    updateModel((model) => ({ ...model, material: value }));
  };

  const onScaleChange = (value) => {
    console.log(value);
    updateModel((model) => ({
      ...model,
      scale: [1, 1, transformValueToScale(value)],
    }));
  };

  const onQuantityChange = (value) => {
    setQuantity(value);
  };

  const updateOrderList = () => {
    updateOrder((order) => [
      ...order,
      {
        id: generateUniqeId(order),
        quantity,
        model: { ...model },
        price: calculateSingleOrderPrice(model.material, quantity),
      },
    ]);
    message.success('Order tillagd');
  };

  const removeAllOrders = () => {
    updateOrder(() => []);
    message.success('Alla ordrar borttagna');
  };

  const informationContent = (
    <div>
      <p>
        Här kan längdmåttet på gångjärnet ändras.
        <br />
        <b>standardmått:</b> längd x 100 x 35 mm
      </p>
    </div>
  );

  return (
    <Form
      name="form"
      onFinish={updateOrderList}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
    >
      <Divider orientation="left" plain>
        <h3>Inställningar</h3>
      </Divider>

      <Form.Item label="Utförande" name="material">
        <Select
          defaultValue="stainless"
          style={{
            width: 120,
          }}
          onChange={onMaterialChange}
          options={[
            {
              value: 'stainless',
              label: 'Rostfri',
            },
            {
              value: 'brass',
              label: 'Mässing',
            },
            {
              value: 'black',
              label: 'Svart',
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="Längd" name="length">
        <InputNumber
          style={{
            width: 120,
          }}
          min={220}
          max={260}
          step={10}
          defaultValue={220}
          onChange={onScaleChange}
        />
        {' mm'}

        <Popover
          placement="right"
          title="Gångjärnsmått:"
          content={informationContent}
          trigger="click"
        >
          <Button
            type="standard"
            shape="circle"
            icon={<InfoCircleOutlined />}
            size="small"
          />
        </Popover>
      </Form.Item>

      <Form.Item label="Antal" name="quantity">
        <InputNumber
          style={{
            width: 120,
          }}
          min={1}
          max={100}
          defaultValue={1}
          onChange={onQuantityChange}
        />
        {' st'}
      </Form.Item>

      <Divider orientation="left" plain>
        <h3>Hantera</h3>
      </Divider>

      <Row justify="start" align="top">
        <Col span={8} offset={2}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Lägg till order
            </Button>
          </Form.Item>

          <Form.Item>
            <Popconfirm
              title="Ta bort alla ordrar?"
              okText="Ja"
              cancelText="Nej"
              placement="right"
              icon={<DeleteOutlined style={{ color: 'red' }} />}
              onConfirm={removeAllOrders}
            >
              <Button type="default">Ta bort alla ordrar</Button>
            </Popconfirm>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SettingsForm;
