export const prerender = false;
import { createResource } from 'solid-js';
import { roundSignificant } from '../../functions/rules/rounding';
import { currencyFormat } from '../../functions/formatters/currencyFormat';

async function fetchData() {
  const response = await fetch(`${import.meta.env.APP_URL}/weekly`),
    data = await response.json();
  console.log(data);
  return currencyFormat.format(roundSignificant(data.cost, 3));

}

export default function WeeklyPrice() {
  const [data] = createResource(fetchData);

  return <span>{data()}</span>;
}
