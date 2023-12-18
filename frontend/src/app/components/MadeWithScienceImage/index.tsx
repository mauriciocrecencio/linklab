import Image from 'next/image';
import MadeWithScience from '@/app/assets/images/made-with-science.png';
import './styles.scss';

export const MadeWithScienceImage = () => (
  <Image
    className="l-image-position"
    src={MadeWithScience}
    alt="Circle formed by writing Made With Science"
  />
);
