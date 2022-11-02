import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from 'react-redux'
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { startGoogleSingIn } from "../../../src/store/auth/thunks";
import { noAuthenticatedState } from "../../fixtures/authFixtures";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: noAuthenticatedState
    }
})
const mockStartGoogleSingIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();
jest.mock('../../../src/store/auth/thunks', () => ({
    startGoogleSingIn: () => mockStartGoogleSingIn,
    startLoginWithEmailPassword: (email, password) => {
        return () => mockStartLoginWithEmailPassword({ email, password });
    },
}))
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

describe('Pruebas en LoginPage', () => {
    beforeEach(() => jest.clearAllMocks());
    test('Debe de mostrar el componente correctamente', () => {
        render(
            <Provider store={store}>
                <MemoryRouter >
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
    });

    test('Boton de google debe de llamar al startGoogleSingIn', () => {
        render(
            <Provider store={store}>
                <MemoryRouter >
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);
        expect(mockStartGoogleSingIn).toHaveBeenCalled();


    })

    test('submit debe de llamar startLoginWithEmailAndPassword', () => {
        const email = 'jmerio1204@gmail.com'
        const password = '12366'
        render(
            <Provider store={store}>
                <MemoryRouter >
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        const emailField = screen.getByRole('textbox', { name: 'Correo' });
        fireEvent.change(emailField, { target: { name: 'email', value: email } });

        const passwordField = screen.getByTestId('password');
        fireEvent.change(passwordField, { target: { name: 'password', value: password } });

        const onSubmit = screen.getByLabelText('submitForm');
        fireEvent.submit(onSubmit);

        expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
            email: email,
            password: password
        })

    });
});