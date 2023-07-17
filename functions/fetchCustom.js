export async function fetchData(url, options = {}, formatter = null) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const options = { headers: { 'Content-Type': 'application/json' }, status: response.status };
    return new Response(response.body, options);
  }
  if (formatter && typeof formatter === 'function') {
    const data = await formatter(await response.json());
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: response.status,
      statusText: response.statusText,
    });
  } else {
    return new Response(response.body, {
      headers: { 'Content-Type': 'application/json' },
      status: response.status,
      statusText: response.statusText,
    });
  }
}
