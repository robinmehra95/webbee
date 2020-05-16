export const addEquipmentType = (params) => {
    return function(dispatch) {
        return dispatch({
            type: 'ADD_EQUIPMENT_TYPE',
            payload: params
        });
    };
};