export const setStudent = (students) => ({
    type: 'SET_STUDENT',
    payload: students,
});

export const addStudent = (student) => ({
    type: 'ADD_STUDENT',
    payload: student,
});

export const updateStudent = (student) => ({
    type: 'UPDATE_STUDENT',
    payload: student,
});

export const deleteStudent = (id) => ({
    type: 'DELETE_STUDENT',
    payload: id,
});

export const setEditStudent = (student) => ({
    type: 'SET_EDIT_STUDENT',
    payload: student,
});

export const clearEditStudent = () => ({
    type: 'CLEAR_EDIT_STUDENT',
});
