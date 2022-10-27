import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('Pruebas en authSlice', () => { 
    test('Debe de regrear el estado inicial y llamarse "auth"', () => { 
        expect(authSlice.name).toBe('auth');

        const state =  authSlice.reducer(initialState, {});
        

        expect(state).toEqual(initialState);
     });

     test('Debe de realizar la autenticación', () => { 
        const state = authSlice.reducer(initialState, login(demoUser))
        expect(state).toEqual({
          status: 'authenticated', //'not-authenticated', 'authenticated', 'checking'
          uid: demoUser.uid,
          email: demoUser.email,
          displayName: demoUser.displayName,
          photoURL: demoUser.photoURL,
          errorMsg: null,
        })
      });

      test('Debe de realizar le logout sin argumentos', () => { 
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
          status: 'not-authenticated',
          uid: null,
          email: null,
          displayName: null,
          photoURL: null,
          errorMsg: undefined,
        })
       });

      test('Debe de realizar le logout y mostrar un mensaje de error', () => {
        const errorMsg = 'Credenciales no son correctas'
        const state = authSlice.reducer(
          authenticatedState,
          logout({ errorMsg })
        )
        expect(state).toEqual({
          status: 'not-authenticated',
          uid: null,
          email: null,
          displayName: null,
          photoURL: null,
          errorMsg,
        })
      })

      test('Debe de cambiar el estado a checking', () => { 
        const state = authSlice.reducer(authenticatedState, checkingCredentials)
        expect(state.status).toBe('checking')
       });
 });