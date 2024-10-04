import React, { useState } from 'react';

const FormComponent = () => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        fname: '',
        mname: '',
        primaryContact: '',
        secondaryContact: '',
        faddress: '',
        fcity: '',
        fstate: '',
        femail: '',
        contact: '',
        gender: '',
        dob: '',
        email: '',
        cls: '',
        department: '',
        category: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the payload
        const payload = {
            name: formData.name,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            familyDetails: {
                stdo_FatherName: formData.fname,
                stdo_MotherName: formData.mname,
                stdo_primaryContact: formData.primaryContact,
                stdo_secondaryContact: formData.secondaryContact,
                stdo_address: formData.faddress,
                stdo_city: formData.fcity,
                stdo_state: formData.fstate,
                stdo_email: formData.femail,
            },
            contact: formData.contact,
            gender: formData.gender,
            dob: formData.dob,
            email: formData.email,
            cls: formData.cls,
            department: formData.department,
            category: formData.category
        };

        try {
            // Make the POST request using fetch
            const response = await fetch('http://localhost:8080/student/save', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(payload),
                mode: 'cors',
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Form successfully submitted:', result);
                alert('Form submitted successfully!');
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit form');
        }
    };

    return (
        <div>
            <h2>Student Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Student Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Student Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>State:</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date of Birth (YYYY-MM-DD):</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Class:</label>
                    <input
                        type="text"
                        name="cls"
                        value={formData.cls}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h3>Student Family Details</h3>
                <div>
                    <label>Father Name:</label>
                    <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Mother Name:</label>
                    <input
                        type="text"
                        name="mname"
                        value={formData.mname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Primary Contact:</label>
                    <input
                        type="text"
                        name="primaryContact"
                        value={formData.primaryContact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Secondary Contact:</label>
                    <input
                        type="text"
                        name="secondaryContact"
                        value={formData.secondaryContact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Family Address:</label>
                    <input
                        type="text"
                        name="faddress"
                        value={formData.faddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Family City:</label>
                    <input
                        type="text"
                        name="fcity"
                        value={formData.fcity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Family State:</label>
                    <input
                        type="text"
                        name="fstate"
                        value={formData.fstate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Family Email:</label>
                    <input
                        type="email"
                        name="femail"
                        value={formData.femail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;
