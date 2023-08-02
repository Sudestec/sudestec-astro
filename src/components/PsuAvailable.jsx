import { currencyFormat } from '../../functions/formatters/currencyFormat' ;
import { roundSignificant } from '../../functions/rules/rounding';

const getPSU = async () => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=fuente 550&shipping_cost=free&category=MLA3794&power_seller=yes&sort=price_asc&limit=1');
  return await response.json(); 
};

//const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=fuente 550&shipping_cost=free&category=MLA3794&power_seller=yes&sort=price_asc&limit=1'),
//  data = await response.json(),
//  item = {
//    descripcion: data.results[0].title,
//    precio: currencyFormat.format(roundSignificant(data.results[0].price*1.1)),
//    link: data.results[0].permalink,
//    foto: data.results[0].thumbnail
//  };
  
export default function PsuAvailable() {

  const [weekly] = createResource(() => getWeeklyCost(url));

  console.log(weekly());

  return (
    <article>
      <header>
        { item.descripcion }
      </header>
      <img src={item.foto} alt={item.descripcion} />
      <footer>
        <span>
          { item.precio }
        </span>
      </footer>
    </article>
  );

}
