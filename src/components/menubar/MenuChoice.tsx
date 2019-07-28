import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

type MenuChoiceProps = {
  to: string,
  label: string,
  id?: string,
  className?: string
};

const MenuChoice: React.FC<any> = ({ to, label, id, className }) => {
  return (
    <Button component={RouterLink} to={to} id={id} className={className}>
      {label}
    </Button>
  );
}

export default MenuChoice;