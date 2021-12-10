import * as Sentry from "@sentry/browser";
export function noop() {
  try {
    return nonexistent;
  } catch (e) {
    Sentry.captureException(e);
    console.log(ignore);
  }
}
export function bar() {
  return fetch('https://google.com').json().then(console.log);
}
export function baz() {
  return fetch('https://google.com').json().then(console.log).catch(e => {
    console.error(e);
  });
}
