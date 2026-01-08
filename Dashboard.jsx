import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";
import { getEmployees, saveEmployees } from "../utils/storage";
import { logout } from "../utils/auth";

export default function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [editEmp, setEditEmp] = useState(null);

    useEffect(() => {
        setEmployees(getEmployees());
    }, []);

    const addOrUpdate = (emp) => {
        let updated;
        if (editEmp) {
            updated = employees.map((e) => (e.id === emp.id ? emp : e));
        } else {
            updated = [...employees, emp];
        }
        setEmployees(updated);
        saveEmployees(updated);
        setEditEmp(null);
    };

    const delEmp = (id) => {
        if (window.confirm("Delete employee?")) {
            const updated = employees.filter((e) => e.id !== id);
            setEmployees(updated);
            saveEmployees(updated);
        }
    };

    return (
        <div className="container">
            <button onClick={() => { logout(); window.location.reload(); }}>Logout</button>
            <h2>Employee Dashboard</h2>
            <p>Total Employees: {employees.length}</p>

            <EmployeeForm onSave={addOrUpdate} editEmp={editEmp} />
            <EmployeeTable
                employees={employees}
                onEdit={setEditEmp}
                onDelete={delEmp}
            />
        </div>
    );
}