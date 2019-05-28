let nextRecordId = 0
export const addRecord = (name, text) => ({
    type: 'ADD_RECORD',
    id: nextRecordId++,
    name,
    text
});