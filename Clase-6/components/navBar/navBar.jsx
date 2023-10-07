import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CartWidget from '../cartWidget/cartWidget';
import styles from './styles.module.css'
const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ];
  
const NavBar = () => {
    return (
      <>
      <h1 className={styles.navbar}>Soy el navbar</h1>
      <CartWidget />
      </>
    )
}

export default NavBar