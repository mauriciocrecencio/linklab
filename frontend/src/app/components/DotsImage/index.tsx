import Image from 'next/image';
import Dots from '@/app/assets/images/dots.svg';
import './styles.scss';

export const DotsImage = () => (
  <div className="l-position-image">
    <Image className="c-dots-image" src={Dots} alt="Image of little dots" />
  </div>
);
