setTimeout(function noop() {
  try {
    throw new Error('123');
  } catch {}
}, 1000);
