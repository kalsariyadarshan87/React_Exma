const initialState = {
  students: [],
  editStudent: null,
};

const myReducer = (state = initialState, action) => {
  if (action.type === 'SET_STUDENT') {
    return {
      ...state,
      students: action.payload,
    };
  } else if (action.type === 'ADD_STUDENT') {
    return {
      ...state,
      students: [...state.products, action.payload],
    };
  } else if (action.type === 'UPDATE_STUDENT') {
    return {
      ...state,
      students: state.students.map(student =>
        student.id === action.payload.id ? action.payload : student
      ),
    };
  } else if (action.type === 'DELETE_STUDENT') {
    return {
      ...state,
      students: state.students.filter(student => student.id !== action.payload),
    };
  }

  else if (action.type === 'SET_EDIT_STUDENT') {
    return {
      ...state,
      editStudent: action.payload,
    };
  } else if (action.type === 'CLEAR_EDIT_STUDENT') {
    return {
      ...state,
      editStudent: null,
    };
  } else {
    return state;
  }
};

export default myReducer;