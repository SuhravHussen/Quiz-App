import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    // eslint-disable-next-line prettier/prettier
    updateProfile
} from 'firebase/auth';
import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from 'firebase/database';
import { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const [videoLoading, setVideoLoading] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [questionsLoading, setQuestionsLoading] = useState(true);
    const [questionsError, setQuestionsError] = useState(false);
    const [questions, setQuestions] = useState([]);

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

    // fetch videos
    async function useVideoList(page) {
        useEffect(() => {
            async function fetchVideos() {
                // database related works
                const db = getDatabase();
                const videosRef = ref(db, 'videos');
                const videoQuery = query(
                    videosRef,
                    orderByKey(),
                    startAt(page.toString()),
                    limitToFirst(8)
                );
                try {
                    setVideoError(false);
                    setVideoLoading(true);
                    // request firebase api request
                    const result = await get(videoQuery);
                    setVideoLoading(false);
                    console.log(Object.values(result.val()), 'shdjsdh');

                    if (result.exists()) {
                        setVideos((prv) => [...prv, ...Object.values(result.val())]);
                        console.log(videos);
                    } else {
                        setHasMore(false);
                    }
                } catch (err) {
                    console.log(err);
                    setVideoError(true);
                    setVideoLoading(false);
                }
            }
            fetchVideos();
        }, [page]);
    }

    // fetch questions
    async function useFetchQuestions(videoId) {
        useEffect(() => {
            async function getQuestions() {
                const db = getDatabase();
                const quizRef = ref(db, `quiz/${videoId}/questions`);
                const quizQuery = query(quizRef);

                try {
                    setQuestionsError(false);
                    setQuestionsLoading(true);

                    const result = await get(quizQuery);
                    setQuestionsLoading(false);

                    if (result.exists()) {
                        setQuestions(() => [...Object.values(result.val())]);
                    }
                } catch (err) {
                    console.log(err);
                    setQuestionsLoading(false);
                    setQuestionsError(true);
                }
            }
            getQuestions();
        }, [videoId]);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        useVideoList,
        videoLoading,
        videoError,
        videos,
        hasMore,
        questions,
        questionsError,
        questionsLoading,
        useFetchQuestions,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
