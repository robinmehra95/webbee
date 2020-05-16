const initState = {
    equipments: [],
};

export default function addEquipmentType(state = initState, action) {
    switch (action.type) {
        case 'ADD_EQUIPMENT_TYPE': {
            return {
                ...state,
                equipments: action.payload,
            };
        }
        default:
            return state;
    }
}
