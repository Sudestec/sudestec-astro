import { fetcher } from './fetcher';
import { formatCost } from './formatters/pricingFormat';

export async function onRequestGet({ env, request }) {
  const { body, status, statusText } = await fetcher(env.API_URL + '/api/collections/weekly_rate/records', request, formatCost);
  return new Response(body, { status: status, statusText: statusText });
}
