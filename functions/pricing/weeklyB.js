import { api } from '../backendUrl';
import { fetchData } from '../fetchCustom';

export const PRICING = Object.freeze({
  weekly: '/pricing/weekly',
  daily: '/pricing/daily',
  fuel: '/pricing/fuel',
});

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

function formatFuel (input) {
  if (input.items.length > 0) {
    const { id, amount, unit } = input.items[0];
    return {
      id: id,
      amount: amount,
      unit: unit,
    };
  } else return {
    id: null,
    cost: null
  };
}

export async function getServiceDaily (method) {
  const url = `${api}/api/collections/daily_rate/records`;
  const options = {
    method: method
  };
  return await fetchData(url, options, formatCost);
}

export async function getServiceWeekly (method) {
  const url = `${api}/api/collections/weekly_rate/records`;
  const options = {
    method: method
  };
  return await fetchData(url, options, formatCost);
}

export async function getFuelMonthly (token, method) {
  const url = `${api}/api/collections/monthly_fuel/records`,
    headers = new Headers();
  headers.append('Authorization', token);
  const options = {
    headers: headers,
    method: method
  };
  return await fetchData(url, options, formatFuel);
}
