import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';

export default function OptimizedImage({ publicId }) {
  // Create and configure Cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dpkreativ',
    },
  });

  const myImage = cld.image(`${publicId}`);

  myImage.quality('auto').format('auto').resize(scale().width(480));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}
