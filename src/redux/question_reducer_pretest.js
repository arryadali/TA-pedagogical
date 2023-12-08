import { createSlice } from "@reduxjs/toolkit"

export const questionReducerPretest = createSlice({
    name : 'questionsPretest',
    initialState : {
        queuePretest : [],
        answersPretest : [],
        tracePretest : 0
    },
    reducers : {
        startExamActionPretest : (state, action) => {
            let {questionPretest, answersPretest} = action.payload
            return {
                ...state,
                queue : questionPretest,
                answersPretest
            }
        },
        moveNextActionPretest : (state, action) => {
            return {
                ...state, 
                trace : state.trace + 1
            }
        },
        movePrevActionPretest : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllActionPretest : () => {
            return {
                queuePretest : [],
                answersPretest : [],
                tracePretest : 0
            }
        }
    }
})

export const {startExamActionPretest, moveNextActionPretest, movePrevActionPretest, resetAllActionPretest} = questionReducerPretest.actions;

export default questionReducerPretest.reducer;