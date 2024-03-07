
export const getData = async (url: string, queryParams: Record<string, any>) => {
  // Construct the URL with query parameters
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
  const apiUrl = url + (queryString ? `?${queryString}` : '');

  const res = await fetch(apiUrl, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};