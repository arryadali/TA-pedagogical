import { postServerData,  postServerDataPretest} from '../helper/helper'
import * as Action from '../redux/result_reducer_posttest'
import * as ActionPretest from '../redux/result_reducer_pretest'
import { useEffect, useState } from 'react'

// Post - Test
export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async(dispatch) => {
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error)
    }
}

export const usePublishResult = (resultData) => {
    console.log(resultData);
    const [isDataSent, setIsDataSent] = useState(false);

    useEffect(() => {
        if (resultData && !isDataSent) {
            const { result, username } = resultData;

            (async () => {
                try {
                    if (result !== 0 && username) {
                        await postServerData('http://localhost:5000/api/result', resultData, (data) => data);
                        console.log('Successfully posted data');
                        setIsDataSent(true);
                    } else {
                        throw new Error("Couldn't get result or username");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
        } else {
            console.log("resultData is undefined or data has been sent");
        }
    }, [resultData, isDataSent]);
}

// Pre - Test
export const PushAnswerPretest = (result) => async (dispatch) => {
    try {
        await dispatch(ActionPretest.pushResultActionPretest(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResultPretest = (index) => async(dispatch) => {
    try {
        dispatch(ActionPretest.updateResultActionPretest(index))
    } catch (error) {
        console.log(error)
    }
}

// insert user data
export const usePublishResultPretest = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            // if(result !== [] && !username) throw new Error("Couldn't get Result")
            await postServerDataPretest('http://localhost:5000/api/resultPretest', resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}

// insert user data
export const PublishResultPretest = async (resultData) => {
    const { result, username } = resultData;
    try {
        await postServerDataPretest('http://localhost:5000/api/resultPretest', resultData, data => data)
        console.log('success')
    } catch (e){
        console.log(e)
    }
}
// insert user data
export const PublishResultPosttest = async (resultData) => {
    const { result, username } = resultData;
    try {
        await postServerDataPretest('http://localhost:5000/api/result', resultData, data => data)
        console.log('success')
    } catch (e){
        console.log(e)
    }
}

