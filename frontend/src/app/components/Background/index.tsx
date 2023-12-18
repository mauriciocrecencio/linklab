import './styles.scss';

type Props = {
  type: 'bg-highlight' | 'bg-white';
  children: JSX.Element | JSX.Element[];
};

export const Background = ({ type, children }: Props) => (
  <div className={type}>{children}</div>
);
