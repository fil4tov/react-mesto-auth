import React from 'react';
import {classNames} from "../../../utils/helpers";
import menu from "../../../assets/images/icons/burger-menu.svg";

const MenuIcon = ({className, ...props}) => {
  return (
    <img
      {...props}
      className={classNames(['icon', className])}
      src={menu}
      alt="Меню"
    />
  );
};

export default MenuIcon;