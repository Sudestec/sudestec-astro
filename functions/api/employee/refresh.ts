import { fetcher } from 'functions/fetcher';
import { formatEmployeeLogin } from 'functions/formatters/formatEmployeeLogin';

export async function onRequestPost({ env, request }) {
  const url = env.API_URL + '/api/collections/employees/auth-refresh',
    { body, status, statusText } = await fetcher(url, request, formatEmployeeLogin);
  return new Response(body, { status: status, statusText: statusText });
}
