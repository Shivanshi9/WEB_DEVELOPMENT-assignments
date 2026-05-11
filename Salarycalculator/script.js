function calculateSalary(){

    let basicSalary = Number(document.getElementById("salary").value);

    let hra = basicSalary * 0.20;
    let da = basicSalary * 0.10;
    let pf = basicSalary * 0.05;

    let totalSalary = basicSalary + hra + da - pf;

    document.getElementById("result").innerText =
    "Net Salary = ₹" + totalSalary;
}