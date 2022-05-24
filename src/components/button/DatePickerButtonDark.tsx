import { Button } from '@mui/material';
import React, { FC } from 'react';
import { BorderContainerDark } from '../container/BorderContainerDark';
import Image from 'next/image';

interface IProps {
  onClick?: () => void;
  label: string;
}

/**
 * @author
 * @function @DatePickerButtonDark
 **/

export const DatePickerButtonDark: FC<IProps> = (props) => {
  return (
    <BorderContainerDark>
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <h6 className="text-xs text-white">Date of birth</h6>
        <Button
          onClick={props.onClick}
          className="rounded-md p-3 button-text-lower text-white bg-[#121212] hover:bg-[#121212]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(225, 225, 255, 0.2) !important',
            },
          }}
        >
          <div className="flex space-x-2">
            <Image
              height={20}
              width={20}
              className="opacity-50"
              src="/icons/balloon.svg"
            />
            <h6 className="text-white text-[11px] font-normal">{props.label}</h6>
          </div>
        </Button>
        <h6 className="text-[10px] opacity-60 font-[350] text-white">
          Get special discount and offers on your special day.
        </h6>
      </div>
    </BorderContainerDark>
  );
};