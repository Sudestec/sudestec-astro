import { fetcher } from 'functions/fetcher';
import { formatEmployeeLogin } from 'functions/formatters/formatEmployeeLogin';

export async function onRequestPost({ env, request }) {
  const { body, status, statusText } = await fetcher(env.API_URL + '/api/collections/employees/auth-with-password', request, formatEmployeeLogin);
  return new Response(body, { status: status, statusText: statusText });
}
