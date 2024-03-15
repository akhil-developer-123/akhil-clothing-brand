

export const createAction = (actionType, actionPayload) => {
    return {
        type: actionType,
        payload: actionPayload
    };
}