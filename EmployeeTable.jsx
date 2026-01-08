import { useState } from "react";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");

    const filtered = employees.filter((e) => {
        return (
            e.name.toLowerCase().includes(search.toLowerCase()) &&
            (gender ? e.gender === gender : true) &&
            (status ? String(e.active) === status : true)
        );
    });

    return (
        <>
            <input placeholder="Search Name" onChange={(e) => setSearch(e.target.value)} />

            <select onChange={(e) => setGender(e.target.value)}>
                <option value="">All Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>

            <select onChange={(e) => setStatus(e.target.value)}>
                <option value="">All Status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Gender</th><th>Status</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.gender}</td>
                            <td>{e.active ? "Active" : "Inactive"}</td>
                            <td>
                                <button onClick={() => onEdit(e)}>Edit</button>
                                <button onClick={() => onDelete(e.id)}>Delete</button>
                                <button onClick={() => window.print()}>Print</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}