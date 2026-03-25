import React from "react";
import { Formelement, Birthday } from "./formelement.jsx";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        contactnumber: "",
        email: "",
        day: "",
        month: "",
        year: "",
        password: "",
        confirmpassword: "",

    });

    const handleCancel = () => {
        setFormData({
            fullname: "",
            contactnumber: "",
            email: "",
            day: "",
            month: "",
            year: "",
            password: "",
            confirmpassword: "",
        });
        setErrors({});
    };

    //validation password function
    const validatePassword = (password) => {
        if (!password) {
            return "Password is required*";
        }

        if (!/^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)) {
            return "Password must contain uppercase, lowercase and special character.";
        }

        return "";
    };
    //validation name function
    const validateName = (name) => {
        if (!name) {
            return "Name is required*"
        }
        if (/\s/.test(name)) {
            return "Spaces not allowed";
        }
        if (!/^[A-Za-z]+$/.test(name)) {
            return "Please enter valid name";
        }
        return "";
    }

    //validation email function
    const validateEmail = (email) => {
        if (!email) {
            return "email address is required*"
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return "sorry this email address is not valid";
        }
        return "";
    }


    //validation contact function
    const validateContact = (contact) => {
        if (!contact) {
            return "Contact is required*"
        }
        if (!/^\+1[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(contact)) {
            return "Enter a valid Canadian phone number with +1";
        }
        return "";
    }




    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === "contactnumber") {
            const ContactError = validateContact(value);
            setErrors({
                ...errors,
                contactnumber: ContactError
            });
        }

        if (name === "fullname") {
            const nameError = validateName(value);
            setErrors({
                ...errors,
                fullname: nameError
            });
        }

        if (name === "email") {

            const emailError = validateEmail(value);

            setErrors({
                ...errors,
                email: emailError
            });
        }
        if (name === "password") {
            const passwordError = validatePassword(value);
            setErrors({
                ...errors,
                password: passwordError
            });
        }
        setErrors(prev => ({
            ...prev,
            day: "",
            month: "",
            year: ""
        }));
    };

    const validate = () => {
        const newErrors = {};
        const nameError = validateName(formData.fullname);
        if (nameError) {
            newErrors.fullname = nameError;
        }

        const contactError = validateContact(formData.contactnumber);
        if (contactError) {
            newErrors.contactnumber = contactError;
        }

        const emailError = validateEmail(formData.email);
        if (emailError) {
            newErrors.email = emailError;
        }


        if (!formData.day) newErrors.day = "Day is required*";
        if (!formData.month) newErrors.month = "Month is required*";
        if (!formData.year) newErrors.year = "Year is required*";


        const passwordError = validatePassword(formData.password);
        if (passwordError) {
            newErrors.password = passwordError;
        }

        if (!formData.confirmpassword) newErrors.confirmpassword = "Please confirm the password*";
        else if (formData.password && formData.confirmpassword && formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "Passwords do not match";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        console.log(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData);


            setFormData({
                fullname: "",
                contactnumber: "",
                email: "",
                day: "",
                month: "",
                year: "",
                password: "",
                confirmpassword: "",
            });
            toast.success("User created successfully!", {
                icon: <span className="flex items-center justify-center w-6 h-6 border-2 border-black-800 text-black-800 rounded-full text-xs font-bold">✓</span>,
                hideProgressBar: true,
                className: "!bg-green-100 !text-black-800 !border !border-green-400  !shadow-md",
                bodyClassName: "!text-sm font-medium"
            });

            setErrors({});
        }
        else {
            toast.warning("Please fill all fields!", {
                icon: <span className="flex items-center justify-center w-6 h-6 border-2 border-black-800 text-black-800 rounded-full text-xs font-bold">
                    ✕
                </span>,
                hideProgressBar: true,
                className: "!bg-red-100 !text-black-800 !border !border-red-400  !shadow-md",
                bodyClassName: "!text-sm font-medium",
                position: window.innerWidth < 640 ? "bottom-center" : "top-right"
            });

        }
    };
    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-8 py-16">
            <div className="w-auto ">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 ">
                    <span >Create User Account</span>
                </h2>
                <div className="bg-white px-6 sm:px-8 py-10 rounded-lg shadow-lg">
                    <div className="space-y-1">
                        <Formelement
                            label="Full Name"
                            name="fullname"
                            placeholder="Full Name"
                            value={formData.fullname}
                            onChange={handleChange}
                            error={errors.fullname}
                        />
                        {errors.fullname && (
                            <p className="text-red-500 text-sm">{errors.fullname}</p>
                        )}

                        <Formelement
                            label="Contact Number"
                            name="contactnumber"
                            placeholder="Contact Number"
                            value={formData.contactnumber}
                            onChange={handleChange}
                            error={errors.contactnumber}
                        />
                        {errors.contactnumber && (
                            <p className="text-red-500 text-sm ">{errors.contactnumber}</p>
                        )}
                        <Birthday
                            label="Birthday"
                            day={formData.day}
                            month={formData.month}
                            year={formData.year}
                            onChange={handleChange}
                            errors={errors}

                        />
                        <div className="flex gap-4 mt-1">
                            <div className="flex-1">
                                {errors.day && (
                                    <p className="text-red-500 text-sm">{errors.day}</p>
                                )}
                            </div>
                            <div className="flex-1">
                                {errors.month && (
                                    <p className="text-red-500 text-sm">{errors.month}</p>
                                )}
                            </div>
                            <div className="flex-1">
                                {errors.year && (
                                    <p className="text-red-500 text-sm">{errors.year}</p>
                                )}
                            </div>
                        </div>
                        <Formelement
                            label="Email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        )}


                        <Formelement
                            label="Password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password}</p>
                        )}

                        <Formelement
                            label="Confirm Password"
                            name="confirmpassword"
                            placeholder="Confirm Password"
                            value={formData.confirmpassword}
                            onChange={handleChange}
                            error={errors.confirmpassword}
                        />
                        {errors.confirmpassword && (
                            <p className="text-red-500 text-sm">{errors.confirmpassword}</p>
                        )}
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                    <button className="w-full sm:w-36 h-12 border border-[#127C95] rounded-md text-[#127C95] font-medium hover:bg-gray-100 transition-colors" onClick={handleCancel}>
                        Cancel
                    </button>

                    <button
                        className="w-full sm:w-36 h-12 bg-[#127C95] text-white font-bold rounded-md hover:bg-[#305a64] transition-colors"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;

