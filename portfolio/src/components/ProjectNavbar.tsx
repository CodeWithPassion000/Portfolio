import React, { FunctionComponent } from 'react';
import { Category } from '../../data/types';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlelFilterCateogary: Function;
  active: string;
}> = ({ value, handlelFilterCateogary, active }) => {
  let className = 'cursor-pointer hover:text-green capitalize';
  if (active == value) {
    className += ' text-green';
  }

  return (
    <li className={className} onClick={() => handlelFilterCateogary(value)}>
      {value}
    </li>
  );
};

function ProjectNavbar(props: {
  handlelFilterCateogary: Function;
  active: string;
}) {
  return (
    <div className="flex space-x-3 px-3 py-2 list-none overflow-x-auto ">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="node" {...props} />
    </div>
  );
}

export default ProjectNavbar;
