export const initialState = {
    status: 'checking', //'not-authenticated', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
}

export const authenticatedState = {
    status: 'authenticated', //'not-authenticated', 'authenticated', 'checking'
    uid: '123AB',
    email: 'micorreo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMsg: null,
}

export const noAuthenticatedState = {
    status: 'not-authenticated', //'not-authenticated', 'authenticated', 'checking'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMsg: null,
}

export const demoUser = {
    uid: '123AB',
    email: 'micorreo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg'
}