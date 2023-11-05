import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function AddStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const handleAddStudent = async (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('birthday', birthday);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('image', image);
        axios.post('/add', formData)
            .then(() => toast.success('Add Student Successfully!'))
            .catch(() => toast.warn('Add Student Failed!'))
        navigate('/');
    }
    return (
        <div className="container">
            <h1 className="text-center text-primary my-4">Add Student</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleAddStudent}>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Birthday</label>
                            <div className="col-sm-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    name="date"
                                    value={birthday}
                                    onChange={ev => setBirthday(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={ev => setEmail(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={ev => setPhone(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Address</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={address}
                                    onChange={ev => setAddress(ev.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={ev => setImage(ev.target.files[0])}
                                />
                            </div>
                        </div>
                        <input type="hidden" value={image} />
                        <div className="mb-3 row mt-2">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-primary mb-3 w-100">Add student</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}