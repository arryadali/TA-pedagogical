import { postServerData,  postServerDataPretest} from '../helper/helper'
import * as Action from '../redux/result_reducer_posttest'
import * as ActionPretest from '../redux/result_reducer_pretest'

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
    const { result, username } = resultData;
    (async () => {
        try {
            if(result !== [] && !username) throw new Error("Couldn't get Result")
            await postServerData('http://localhost:5000/api/result', resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
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
            if(result !== [] && !username) throw new Error("Couldn't get Result")
            await postServerDataPretest('http://localhost:5000/api/resultPretest', resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}