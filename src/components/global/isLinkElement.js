import { NavLink } from 'react-router-dom';

const isLinkElement = (item) => {
  if (item?.type === NavLink) {
    return true;
  }
  return false;
};

export default isLinkElement;
