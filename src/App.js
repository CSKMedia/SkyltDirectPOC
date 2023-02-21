import './App.css';
import {
  Layout,
  Space,
  ConfigProvider,
} from 'antd';
import CanvasContainer from './components/CanvasContainer';
import SettingsForm from './components/SettingsForm';
import OrderSummary from './components/OrderSummary';
import { ModelProvider } from './ModelContext';
import { OrderProvider } from './OrderContext';
import OrderList from './components/OrderList';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'left',
  color: '#000',
  height: 80,
  padding:10,
  backgroundColor: '#00689e',
};
const siderStyle = {
  textAlign: 'left',
  color: '#000',
  padding: '30px 0px 0px 25px',
  backgroundColor: '#E0E0E0',
};
const contentStyle = {
  textAlign: 'left',
  minHeight: '800px',
  color: '#000',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#00689e',
  paddingBottom: 20,
};

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00689e',
          fontFamily: 'Tahoma, Verdana, Geneva, sans-serif;',
        },
      }}
    >
      <OrderProvider>
        <ModelProvider>
          <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
              <Header style={headerStyle}>
                <img
                  src="site_logo.png"
                  alt="skyltDirect"
                  style={{ maxHeight: 60}}
                />
              </Header>
              <Layout>
                <Sider style={siderStyle} width={400}>
                  <SettingsForm />
                  <OrderSummary />
                </Sider>
                <Content style={contentStyle}>
                  <CanvasContainer />
                  <OrderList />
                </Content>
              </Layout>
              <Footer style={footerStyle}>
                Skylt Direct ©2023 
              </Footer>
            </Layout>
          </Space>
        </ModelProvider>
      </OrderProvider>
    </ConfigProvider>
  );
}

export default App;
