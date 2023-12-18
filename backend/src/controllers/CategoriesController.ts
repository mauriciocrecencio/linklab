import { Request, Response } from "express";

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

class CategoriesController {
  async list(req: Request, res: Response) { 
    res.status(201).json(categories)
  }
}

export default new CategoriesController()