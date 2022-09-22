describe('Pruebas en <DemoComponent />', () => {
  test('Esta prueba no debe de fallar', () => {
    // 1. inicialización
    const message1 = 'Hola Mundo';
    
    // 2. estímulo
    const message2 = message1.trim();
    
    // 3. aserciones (observar el comportamiento)
    expect(message1).toBe(message2)
  });
});