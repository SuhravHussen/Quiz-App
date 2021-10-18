// eslint-disable-next-line import/no-extraneous-dependencies
import { getDatabase, ref, set } from '@firebase/database';
import _ from 'lodash';
import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Answers from '../../Components/Quiz/Answers';
import MiniPlayer from '../../Components/Quiz/MiniPlayer';
import ProgressBar from '../../Components/Quiz/ProgressBar';
import { useAuth } from '../../context/AuthContext';

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    // eslint-disable-next-line no-param-reassign
                    option.checked = false;
                });
            });
            return action.value;

        case 'answer':
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state;
    }
};

const Quiz = () => {
    const { id } = useParams();
    const [currentQues, setCurrentQuestion] = useState(0);
    const { useFetchQuestions, questions, questionsError, questionsLoading, currentUser } =
        useAuth();
    useFetchQuestions(id);
    const history = useHistory();
    const [qna, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions,
        });
    }, [questions]);

    const handleAnswerChange = (e, index) => {
        dispatch({
            type: 'answer',
            questionID: currentQues,
            optionIndex: index,
            value: e.target.checked,
        });
    };

    // handle when user click next
    function nextQuestion() {
        if (currentQues + 1 < questions.length) {
            setCurrentQuestion((prv) => prv + 1);
        }
    }

    // handle previous button
    function previousQuestion() {
        if (currentQues >= 1 && currentQues <= questions.length) {
            setCurrentQuestion((prv) => prv - 1);
        }
    }

    // calculate percentage
    const percentage = questions.length > 0 ? ((currentQues + 1) / questions.length) * 100 : 0;

    // submit quiz
    async function submit() {
        const { uid } = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        try {
            await set(resultRef, {
                [id]: qna,
            });
        } catch (err) {
            console.log(err);
        }
        history.push({
            pathname: `/result/${id}`,
            state: {
                qna,
            },
        });
    }

    return (
        <>
            {questionsLoading && <div>Loading...</div>}
            {questionsError && <div>Error!</div>}
            {!questionsLoading && !questionsError && qna.length && (
                <>
                    <h1 className="text-3xl tracking-wider">{qna[currentQues]?.title}</h1>
                    <h4 className="text-gray-500 mt-3 border-b-2 border-gray-200 pb-3 ">
                        Question can have multiple answers{' '}
                    </h4>
                    <Answers
                        options={qna[currentQues]?.options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        next={nextQuestion}
                        previous={previousQuestion}
                        progress={percentage}
                        handleSubmit={submit}
                    />
                    <MiniPlayer />
                </>
            )}
        </>
    );
};

export default Quiz;
