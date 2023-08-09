import { fetcher } from 'functions/fetcher';

export const onRequestGet = async ({ request, env, params }) => {
  const { id } = params;
  const { body, status, statusText } = await fetcher(env.API_URL + `/api/collections/employees/records/${id}`, request);
  console.log(id);
  return new Response(body, { status: status, statusText: statusText });

};
