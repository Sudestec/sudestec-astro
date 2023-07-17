import { fetchData } from '../fetchCustom';
import { api } from '../backendUrl';

export async function onRequestGet(context = null) {
  return await getServiceWeekly();
}

export function roundSignificant (input, significant = 2) {
  return Number(Intl.NumberFormat(undefined,
    { useGrouping: false, roundingMode: 'ceil', maximumSignificantDigits: significant })
    .format(input));
}

function formatCost (data) {
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

export async function getServiceWeekly (method) {
  const url = `${api}/api/collections/weekly_rate/records`;
  const options = {
    method: method
  };
  return await fetchData(url, options, formatCost);
}
