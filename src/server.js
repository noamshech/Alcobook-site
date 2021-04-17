const serverURL = 'http://localhost:8080';

export async function postData(url = serverURL, token = null, data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(console.error);

  return response;
}

export async function getData(url = serverURL, token = null) {
  const response = await fetch(url, {
    method: 'GET',
    headers: token
      ? {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      : {
          'Content-Type': 'application/json',
        },
  })
    .then((res) => res.json())
    .catch(console.error);

  return response;
}

export async function patchData(url = serverURL, token = '', data = {}) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(console.error);

  return response;
}

export async function deleteData(url = serverURL, token = '', data = {}) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch(console.error);

  return response;
}

export default serverURL;
