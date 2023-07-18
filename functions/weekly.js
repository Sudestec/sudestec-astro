import { fetchData } from './fetchCustom';
import { formatCost } from './formatters/pricingFormat';

export async function onRequestGet(context) {
  const url = `${context.env.API_URL}/api/collections/weekly_rate/records`,
    options = {
      method: 'GET'
    };
  return await fetchData(url, options, formatCost);
}
