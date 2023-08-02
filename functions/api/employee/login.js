import { fetchData } from '../../fetchCustom';
import { formatEmployeeLogin } from '../../formatters/formatEmployeeLogin';

export async function onRequestPost({env, request}) {
  const url = `${env.API_URL}/api/collections/employees/auth-with-password`,
    newRequest = new Request(request);
  
  return await fetchData(url, newRequest, formatEmployeeLogin);
}
