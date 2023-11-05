import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { formattedDate } from "../../untils";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [students, setStudents] = useState([]);
    const loadStudents = async () => {
        await axios.get('/')
            .then((res) => setStudents(res.data))
            .catch((err) => console.log(err))
    }
    const navigate = useNavigate();
    useEffect(() => {
        const timeOut = setTimeout(loadStudents, 500);
        return () => {
            clearTimeout(timeOut)
        }
      
    }, [])
    const handleDeleteStudent = (id) => {
        const isDelete = window.confirm('Do you want to delete this student?');
        if (isDelete) {
            axios.delete('/delete/' + id)
                .then(() => {
                    loadStudents();
                    toast.success('Deleted Successfully!');
                })
                .catch(() => toast.warn('Deleted Failed!'));
        }
    }
    return (
        <div className="container w-100">
            <h1 className="text-center text-primary my-4">Manage Student App</h1>
            <ToastContainer />
            <div className="row align-items-start">
                <div className="col-11">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark text-center">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Birthday</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students && students.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><img src={`https://manage-student-app-server-3cb3e158c512.herokuapp.com/api/uploads/${student.image}`} width='80px' height='80px' alt="" /></td>
                                    <td>{student.name}</td>
                                    <td>{formattedDate(student.birthday)}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.address}</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-primary btn-sm m-1" onClick={() => navigate('/edit/' + student._id)}>
                                            <i className="fa-solid fa-pen-to-square fa-lg"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-sm m-1" onClick={() => handleDeleteStudent(student._id)}>
                                            <i className="fa-solid fa-trash fa-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <Link to='/add'><i className="fa-solid fa-plus fa-2xl"></i></Link>
                </div>
            </div>
        </div >
    );
}