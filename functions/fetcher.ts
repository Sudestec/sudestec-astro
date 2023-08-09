export async function fetcher(url, options = {}, formatter = null) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const json = await response.json();
    return {
      body: json.message ? json.message : JSON.stringify(json),
      status: response.status,
      statusText: response.statusText
    };
  } else if (typeof formatter === 'function') {
    const json = await response.json(),
      formated = formatter(json);
    return {
      body: JSON.stringify(formated),
      status: response.status,
      statusText: response.statusText
    };
  } else {
    const json = await response.json();
    return {
      body: JSON.stringify(json),
      status: response.status,
      statusText: response.statusText
    };
  }
}
