// Write your solution in this file!
const employee = {
    name: 'Paul Allen',
    streetAddress: '100 W 21st street'
};

function updateEmployeeWithKeyAndValue(object, key, value) {
    const updatedEmployeeInfo = {...employee};
    updatedEmployeeInfo[key]= value;
    return updatedEmployeeInfo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]= value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
    const deletedEmployeeInfo = {...employee}
    delete deletedEmployeeInfo[key];
    return deletedEmployeeInfo;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
     delete employee[key];
     return employee;
}
