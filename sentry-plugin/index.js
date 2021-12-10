export function noop() {
  try {
    return nonexistent
  } catch {
    console.log(ignore);
  }
}

export function bar() {
  return fetch('https://google.com').json().then(console.log)
}

export function baz() {
  return fetch('https://google.com')
    .json()
    .then(console.log)
    .catch(e => {
      console.error(e)
    })
}
