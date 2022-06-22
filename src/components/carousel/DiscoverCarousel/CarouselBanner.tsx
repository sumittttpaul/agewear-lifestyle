import { motion } from 'framer-motion';
import React, { FC, MutableRefObject } from 'react';
import { Button } from '@mui/material';
import { HeartIcon } from '@heroicons/react/outline';
import { CarouselBannerImage } from './CarouselBannerImage';

interface IProps {
  ElementRef: MutableRefObject<null>;
  ImageURL: string;
}

/**
 * @author
 * @function @CarouselBanner
 **/

export const CarouselBanner: FC<IProps> = (props) => {
  return (
    <motion.div
      ref={props.ElementRef}
      className="text-white relative items-start justify-end rounded-t-xl w-full h-[600px] pl-12 pb-[130px] flex flex-col overflow-hidden bg-gradient-to-r from-[rgba(0,0,0,0.7)]"
    >
      <CarouselBannerImage
        className="-z-[1]"
        src={props.ImageURL}
        alt="Carousel-Image"
        objectPosition="center"
      />
      <div className="space-y-8 box-border z-[1]">
        <h6 className="text-3xl font-[500]">Full Sleeves T-shirts</h6>
        <div className="max-w-[500px] w-full space-y-1.5">
          <h6 className="uppercase tracking-[0.5px] font-[500] leading-[1.3333] text-[11px]">
            new winter collection
          </h6>
          <h6 className="text-[15px] leading-6">
            Save up to 50% off on our brand new full sleeve winter collection
            full printed T-shirts.
          </h6>
        </div>
        <div className="space-y-3 box-border">
          <div className="text-xs flex items-center space-x-[4px] my-1">
            <h6 className="bg-primary-blue-rgb text-[11px] py-1 px-2.5 mr-[2px] rounded-[4px]">
              -75%
            </h6>
            <h6>Starting at</h6>
            <h6 className="line-through opacity-70">₹1499.00</h6>
            <h6>₹499.00</h6>
          </div>
          <div className="flex space-x-3">
            <Button
              disableFocusRipple
              className="py-4 px-8 text-[11.5px] tracking-[0.075em] bg-white hover:bg-white text-black"
            >
              order now
            </Button>
            <Button
              disableFocusRipple
              className="p-4 tracking-[0.075em] bg-transparent hover:bg-white hover:bg-opacity-10 text-white"
            >
              <div className="flex space-x-2">
                <HeartIcon className="h-4 w-4" />
                <h6 className="text-[10px]">add to wishlist</h6>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};