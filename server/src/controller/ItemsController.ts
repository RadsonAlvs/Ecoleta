import knex from '../database/connection'

class ItemsController {
    async index(req: any, res: any)  {
        const items = await knex("items").select("*");
        // const items = await knex('items').delete('*')
      
        const serializedItems = items.map((item: any) => {
          return {
            id: item.id,
            titulo: item.titulo,
            image_url: `http://localhost:3333/uploads/${item.image}`,
          };
        });
      
        return res.json(serializedItems);
      }

    // async delete(req: any, res: any) {
    //   const items = await knex('items').delete('*')
    // }
}

export default ItemsController