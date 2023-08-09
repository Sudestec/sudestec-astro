import { roundSignificant } from '../rules/rounding';

export function formatCost (data) {
  if (data.items.length > 0) {
    const { id, amount, unit } = data.items[0],
      cost = roundSignificant((amount*unit), 3);
    return {
      id: id,
      cost: cost
    };
  } else return {
    id: null,
    cost: null
  };
}
