
test('should npm run test', () => {
  const isActive = true;

  if(!isActive) {
    throw new Error('Is not active');
  }
})