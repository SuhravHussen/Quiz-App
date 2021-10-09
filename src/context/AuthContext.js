import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    // eslint-disable-next-line prettier/prettier
    updateProfile
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // sign up method
    async function signup(email, password, userName) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: userName,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    }

    // login method

    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout method

    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
