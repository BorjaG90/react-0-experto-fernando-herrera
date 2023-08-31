import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { useAuthStore } from '../../src/hooks/useAuthStore';

jest.mock('../../src/hooks/useAuthStore');

describe('Pruebas en <AppRouter />', () => { 
  const mockCheckAuthToken = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test('debe de mostrar la pantalla de carga y llamar a checkAuthToken', () => {
    useAuthStore.mockReturnValue({
      status: 'checking',
      checkAuthToken: mockCheckAuthToken
    });
    render( <AppRouter /> );
    
    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(mockCheckAuthToken).toHaveBeenCalled();
  });
});