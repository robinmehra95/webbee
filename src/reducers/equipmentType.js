const initState = {
    equipments: [],
    equipmentsList: [],
};

export default function addEquipmentType(state = initState, action) {
    switch (action.type) {
        case 'ADD_EQUIPMENT_TYPE': {
            return {
                ...state,
                equipments: action.payload,
            };
        }
        case 'ADD_EQUIPMENTS': {
            return {
                ...state,
                equipmentsList: action.payload,
            };
        }
        default:
            return state;
    }
}
