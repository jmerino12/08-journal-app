import { loginWithEmailAndPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/provider";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSingIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/provider')

describe('Prueba en AuthThunks', () => { 
        const dispatch = jest.fn();
        beforeEach(() => jest.clearAllMocks());
    test('Debe de invocar el checkingCredentials', async() => { 

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
     });

     test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async() => { 
        const loginData = {
            ok: true,
            ...demoUser
        }

        await singInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSingIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
      });

     test('startGoogleSignIn debe de llamar checkingCredentials y login - Error', async() => { 
        const loginData = {
            ok: false,
            errorMsg: "Un error en google"
        }

        await singInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSingIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMsg))
      });

      test('startCreatingUserWithEmailPassword debe de llamar a checkingCredential y login -exito', async() => { 
        const loginData = {
            ok: true,
            ...demoUser
        }
        const formData = {email: demoUser.email, password: '123456'}

        await loginWithEmailAndPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
       })

       test('Debe de llamar logoutFirebase, clearNotes y logout', async() => { 
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout({}));
        });
 });