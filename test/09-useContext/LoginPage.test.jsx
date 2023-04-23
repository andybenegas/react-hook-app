import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPage/>', () => {

    const user = {
        id: 2,
        name: 'Paulina'
    }

    const setUserMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('Debe mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');

        // screen.debug()
        
    });
    
    test('Debe llamar el setUser cuando se hace click en el botón', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        ); 
        
        const addUserButton = screen.getByRole('button');
        fireEvent.click(addUserButton);

        expect( setUserMock ).toHaveBeenCalledWith( {"email": "pepehongo@google.com", "id": 2134, "name": "Pepe"} );

    });
})