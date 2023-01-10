// // Task 1
// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const Employee = function(employee) { 
   this.id = employee.id;
   this.name = employee.name;
   this.surname = employee.surname;
   this.salary = employee.salary;
   this.workExperience = employee.workExperience;
   this.isPrivileges = employee.isPrivileges;
   this.gender = employee.gender;
};

const employeeDescription = new Employee(employeeArr[2]);
console.log(employeeDescription)

// Task 2
// Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки

Employee.prototype.getFullName = function() {
 return `${this.surname} ${this.name}`
}
console.log (employeeDescription.getFullName())


// Task 3
// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.

let createEmployesFromArr = (arr) => {
  const employeeList = [];
  for (let employee of arr) {
   employeeList.push(new Employee(employee));

  }
  return employeeList;

};

const emplyeeConstructArr = createEmployesFromArr(employeeArr);
console.log(emplyeeConstructArr)

// Task 4
// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;

const getFullNamesFromArr = (arr) => {
 const employeesFullName = [];
 for (let employee of arr) {
  const fullName = employee.getFullName();
  employeesFullName.push(fullName)
 }
 return employeesFullName;
      
}
       
console.log(getFullNamesFromArr(emplyeeConstructArr))

// Task5
// Создать функцию которая вернет среднее значение зарплаты всех employee

const getMiddleSalary = (arr) => {
 let salarySum = null;
 let middleSalary = null;



 for (let employee of arr) {
   salarySum += employee.salary;
   
 }
 return middleSalary = Math.round(salarySum / arr.length);

}

console.log (getMiddleSalary(emplyeeConstructArr));

// Task 6 
// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random

const getRandomEmployee = (arr) => {

 return arr [Math.floor(Math.random() * arr.length)];


}

console.log (getRandomEmployee(emplyeeConstructArr))
