import { roundSignificant } from '../rules/rounding';

export function formatCost (data) {
  if (data.items.length > 0) {
    const { id, price } = data.items[0],
      cost = roundSignificant(price, 3);
    return {
      id: id,
      cost: cost
    };
  } else return {
    id: null,
    cost: null
  };
}
