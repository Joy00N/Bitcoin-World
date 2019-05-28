let nextTodoId = 0
export const addTodo = (name, text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const calculator = (id, text) => ({
    type: 'CALCULATOR',
    id: id,
    text
});