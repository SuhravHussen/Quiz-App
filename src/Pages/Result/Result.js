import _ from 'lodash';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import Analysis from '../../Components/Result/Analysis';
import Summary from '../../Components/Result/Summary';
import { useAuth } from '../../context/AuthContext';

const Result = () => {
    const { id } = useParams();
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state;

    const { useAnswers, answersError, answerLoading, answers } = useAuth();
    useAnswers(id);

    function calculate() {
        let score = 0;

        // prottek ques a loop kora hocce
        answers.forEach((qus, index1) => {
            const correctIndexes = [];
            const checkedIndexes = [];

            // qus er prottek option a loop kora hocce
            qus.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    // checked hole answer er options er moddhew check kore dewa hocce
                    // eslint-disable-next-line no-param-reassign
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score += 5;
            }
        });

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {answerLoading && <div>Loading...</div>}
            {answersError && <div>Error!</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
};

export default Result;
