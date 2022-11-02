import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSingIn } from "../../../src/store/auth/authSlice";
import { noAuthenticatedState } from "../../fixtures/authFixtures";

const store  = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: noAuthenticatedState
    }
})
const mockStartGoogleSingIn = jest.fn();
jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSingIn: () => mockStartGoogleSingIn
}))

describe('Pruebas en LoginPage', () => { 
    test('Debe de mostrar el componente correctamente', () => { 
        render(
            <Provider store={ store}>
                <MemoryRouter >
                    <LoginPage />
                </MemoryRouter>       
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
     });

     test('Boton de google debe de llamar al startGoogleSingIn', () => { 
        render(
            <Provider store={ store}>
                <MemoryRouter >
                    <LoginPage />
                </MemoryRouter>       
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSingIn).toHaveBeenCalled();
        

      })
 });