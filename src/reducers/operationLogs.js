import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGOS } from '../actions'

const operationLogs = (state = [], action ) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [operationLog, ...state]
        case DELETE_ALL_OPERATION_LOGOS:
            return []
        default:
            return state  
        
    }
}

export default operationLogs
