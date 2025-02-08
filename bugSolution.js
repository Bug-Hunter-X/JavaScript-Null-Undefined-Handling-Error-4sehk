function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Or throw an error, handle based on requirements
  }

  // ... rest of the function, calculations safe to proceed
}