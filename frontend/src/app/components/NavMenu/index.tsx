import './styles.scss';

const ItensMenu = [
  {
    name: 'Início',
    url: 'xxx'
  },
  {
    name: 'Produtos',
    url: 'xxx'
  },
  {
    name: 'Laudos',
    url: 'xxx'
  },
  {
    name: 'Sobre nós',
    url: 'xxx'
  },
  {
    name: 'Certificações',
    url: 'xxx'
  },
  {
    name: 'Contato',
    url: 'xxx'
  }
];

export const NavMenu = () => (
  <nav>
    {ItensMenu.map((item) => (
      <button key={item.name} className="c-nav-menu-item">
        <span>{item.name}</span>
      </button>
    ))}
  </nav>
);
