const serverURL = 'http://localhost:8080';

export async function postData(url = serverURL, token = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(console.error);

  return response;
}

export async function getData(url = serverURL, token = '') {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    redirect: 'follow',
  })
  .then(res => res.json())
  .catch(console.error);

  return response;
}

export async function patchData(url = serverURL, token = '', data = {}) {
  const response = await fetch(url, {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(console.error);

  return response;
}

export async function deleteData(url = serverURL, token = '', data = {}) {
  const response = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    redirect: 'follow',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .catch(console.error);

  return response;
}

export default serverURL;