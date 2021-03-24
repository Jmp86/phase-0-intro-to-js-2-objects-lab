// Write your solution in this file!
const employee = {
    name: 'Justin',
    streetAddress: '160 Keonekai'
};

console.log(employee);

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign(employee, { [key]: value });
}
function deleteFromEmployeeByKey (employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee
}
