import React from 'react';
import { Menu } from './Menu';

export default function CardMenu() {
  return (
    <Menu>
      <Menu.Toggle />
      <Menu.List>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu.List>
    </Menu>
  );
}
