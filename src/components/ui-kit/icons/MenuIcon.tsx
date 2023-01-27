import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

const MenuIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width={'34px'} height={'34px'} viewBox={'0 0 34 34'}>
      <g clipPath="url(#clip0_429_11066)">
        <path
          d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
          stroke="#292929"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11066">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000915527)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default MenuIcon;
