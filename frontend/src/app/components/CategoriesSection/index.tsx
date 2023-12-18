import { CategoryCard } from '../CategoryCard'
import './styles.scss'

const categories = [{
  title: 'PRODUTOS',
  name: 'Vidrarias e Equipamentos',
  icon: 'products',
},
{
  title: 'QUÍMICOS',
  name: 'Materiais Químicos',
  icon: 'chemicals',
  },
  {
    title: 'LABORATÓRIOS',
    name: 'Ferramentas e utensílios',
    icon: 'tools',
  }
]

export const CategoriesSection = () => (
  <section className="l-categories-container">
    {categories.map(category => <CategoryCard key={category.title} category={category}/>)}
  </section>
)