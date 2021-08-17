import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <SubMenu title={<span>Artist</span>}>
      <MenuItemGroup title="Perormer">
        <Menu.Item key="setting:1"><a href={"https://www.instagram.com/yeni_cho/"}>Yenicho</a></Menu.Item>
        <Menu.Item key="setting:2"><a href={"https://www.instagram.com/amillionrockface/"}>Amillionrockface</a></Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Designer">
        <Menu.Item key="setting:3">디자이너1</Menu.Item>
        <Menu.Item key="setting:4">디자이너2</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu