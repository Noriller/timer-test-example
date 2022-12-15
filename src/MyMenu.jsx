import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export const MyMenu = ({ cb }) => (
  <Menu mode='horizontal' defaultSelectedKeys={['mail']}>
    <Menu.Item key='mail' icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.SubMenu
      key='SubMenu'
      id='SubMenu'
      data-testid='SubMenu'
      title='Navigation Two - Submenu'
      icon={<SettingOutlined />}>
      <Menu.Item key='two' icon={<AppstoreOutlined />}>
        Navigation Two
      </Menu.Item>
      <Menu.Item key='three' icon={<AppstoreOutlined />}>
        Navigation Three
      </Menu.Item>
      <Menu.ItemGroup title='Item Group'>
        <Menu.Item key='four' icon={<AppstoreOutlined />}>
          Navigation Four
        </Menu.Item>
        <Menu.Item key='five' icon={<AppstoreOutlined />}>
          Navigation Five
        </Menu.Item>
        <Menu.Item
          key='click'
          icon={<AppstoreOutlined />}
          onClick={() => cb(x => !x)}>
          Click Me!!!
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);
