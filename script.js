const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

const empdata = [];

function addEmployee(employee) {
  for (let i = 0; i < empdata.length; i++) {
    let e = empdata[i];
    if (e.email === employee.email) {
      alert(`Email already exists ${e.email}`);
      return;
    }
    if (e.empId === employee.empId) {
      alert(`Email already exists ${e.empId}`);
      return;
    }
  }
  const tr = document.createElement("tr");
  tr.innerHTML = ` <td>${employee.name}</td> 
                   <td> ${employee.email} </td>
                   <td> ${employee.empid} </td> 
                   <td> ${employee.company} </td>
                   <td> ${employee.designation} </td> 
                   <td>
                       <button onclick="deleteEmployee(this)" data-empid="${employee.empId}">Delete</button>
                  </td>`;  

  tbody.appendChild(tr);
  empdata.push(employee);
  form.reset();
}
// deleteInfo(this)




function deleteEmployee(buttonRef) {
    let empId = buttonRef.getAttribute("data-empid");
  
    // using the above empId delete the corresponding object in the employess array
    for (let i = 0; i < empdata.length; i++) {
      if (empdata[i].empId === empId) {
         console.log(empdata[i].empId, empId);
        empdata.splice(i, 1);
        break;
      }
    }
  
    // also remove the employee from the DOM tree.
    let parentTd = buttonRef.parentNode;
    let parentTr = parentTd.parentNode;
  
    // the below line removed the <tr></tr> from the DOM tree
    parentTr.remove();
  }
// function deletebtn(btnref){
//     //               getAttribute
//   let empdt = btnref.getAttribute("empid");
//   for (let x = 0; x < empdata.length; x++) {
//     if (empdata[x].empid === empdt){
//         empdata.splice(x, 1);
//         break;
//     } 
  
//   }
//   let btnparent = btnref.parentNode;
//   let tdparent = btnparent.parentNode;
//   tdparent.remove();
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let employee = {
    name: event.target.name.value,
    email: event.target.email.value,
    empId: event.target.empid.value,
    company: event.target.company.value,
    designation: event.target.designation.value,
  };
  addEmployee(employee);
});
