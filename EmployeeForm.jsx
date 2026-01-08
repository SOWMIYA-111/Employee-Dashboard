import { useState, useEffect } from "react";

export default function EmployeeForm({ onSave, editEmp }) {
    const [emp, setEmp] = useState({
        id: Date.now(),
        name: "",
        gender: "",
        dob: "",
        state: "",
        active: true,
        image: ""
    });

    useEffect(() => {
        if (editEmp) setEmp(editEmp);
    }, [editEmp]);

    const handleImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => setEmp({ ...emp, image: reader.result });
        reader.readAsDataURL(e.target.files[0]);
    };

    const submit = () => {
        if (!emp.name || !emp.gender) return alert("Validation error");
        onSave(emp);
        setEmp({ ...emp, id: Date.now(), name: "" });
    };

    return (
        <div>
            <h3>{editEmp ? "Edit" : "Add"} Employee</h3>
            <input placeholder="Name" value={emp.name} onChange={(e) => setEmp({ ...emp, name: e.target.value })} />
            <select onChange={(e) => setEmp({ ...emp, gender: e.target.value })} value={emp.gender}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <input type="date" onChange={(e) => setEmp({ ...emp, dob: e.target.value })} />
            <input type="file" onChange={handleImage} />
            {emp.image && <img src={emp.image} width="50" />}
            <button onClick={submit}>Save</button>
        </div>
    );
}