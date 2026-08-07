import { useState } from "react";
import "./UserForm.css";

function UserForm({ initialUser, onSubmit, onCancel }) {

    const [user, setUser] = useState({
        name: initialUser?.name || "",
        email: initialUser?.email || "",
        phone: initialUser?.phone || "",
        company: initialUser?.company || "",
        website: initialUser?.website || "",
    });

    const [errors, setErrors] = useState({});

    // Handle Input Change
    const handleChange = (event) => {

        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value,
        });

    };

    // Form Validation
    const validateForm = () => {

        let newErrors = {};

        if (!user.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!user.email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!user.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit Form
    const handleSubmit = (event) => {

        event.preventDefault();

        if (!validateForm()) return;

        onSubmit(user);

    };

    return (

        <form onSubmit={handleSubmit} className="user-form">
            <h1>User Form</h1>

            <div className="form-group">
                <label>Name</label>

                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                />

                {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
                <label>Email</label>

                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                />

                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
                <label>Phone</label>

                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                />

                {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-group">
                <label>Company</label>

                <input
                    type="text"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                />
            </div>

            <div className="form-group">
                <label>Website</label>

                <input
                    type="text"
                    name="website"
                    value={user.website}
                    onChange={handleChange}
                    placeholder="Enter Website"
                />
            </div>

            <div className="form-buttons">

                <button type="button" onClick={onCancel} className="a-btn"> 
                    Cancel
                </button>

                <button type="submit" className="a-btn">
                    {initialUser ? "Update User" : "Add User"}
                </button>

            </div>

        </form>

    );

}

export default UserForm;