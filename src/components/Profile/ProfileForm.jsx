import React, { useState, useEffect } from 'react';
// import api from '../services/api';
import config from "./../../config"
import "./ProfileForm.css"
const ProfileForm = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        height: '',
        weight: '',
        weightGoal: '',
    });

    // useEffect(() => {
    //     // Fetch the user's profile data when the component mounts
    //     const fetchProfileData = async () => {
    //         try {
    //             const response = await api.get(`${config.API_BASE_URL}/profile`);
    //             setProfileData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching profile data', error);
    //         }
    //     };

    //     fetchProfileData();
    // }, []);

    // const handleChange = (e) => {
    //     setProfileData({
    //         ...profileData,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await api.put(`${config.API_BASE_URL}/profileData`);
    //         alert('Profile updated successfully!');
    //     } catch (error) {
    //         console.error('Error updating profile', error);
    //     }
    // };
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch(`${config.API_BASE_URL}/profile`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setProfileData(data);
            } catch (error) {
                console.error('Error fetching profile data', error);
            }
        };

        fetchProfileData();
    }, []);

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.API_BASE_URL}/profile`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });
            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                console.error('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={profileData.password} onChange={handleChange} placeholder="Password" required />
            <input type="number" name="age" value={profileData.age} onChange={handleChange} placeholder="Age" />
            <input type="number" name="height" value={profileData.height} onChange={handleChange} placeholder="Height (cm)" />
            <input type="number" name="weight" value={profileData.weight} onChange={handleChange} placeholder="Weight (kg)" />
            <select name="weightGoal" value={profileData.weightGoal} onChange={handleChange}>
                <option value="gain">Gain Weight</option>
                <option value="lose">Lose Weight</option>
            </select>
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default ProfileForm;