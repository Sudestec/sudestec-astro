import type { EmployeeData } from 'functions/formatters/formatEmployeeLogin';
import { userProfile } from './stores';

const refreshAuth = async (token: Headers) => {
  const response = await fetch(import.meta.env.API_URL + '/employee/refresh', { headers: token, method: 'POST' }),
    data: EmployeeData = await response.json();
  userProfile.set(data);
  return data;
};

export const getAuth = async (body: Request) => {
  const url = import.meta.env.API_URL + '/employee/login',
    response = await fetch(url, body);
  const data: EmployeeData | null = response.ok ? await response.json() : null;
  userProfile.set(data);
  return data;
};



export async function getUser(req: Request) {
  const c = req.headers;
  if (c.has('Authorization')) {
    console.log('has headers');
    return await refreshAuth(c);
  }
}