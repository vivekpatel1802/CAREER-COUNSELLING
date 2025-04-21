// import React, { useEffect, useState } from 'react';

// const CourseList = () => {
//     const [courses, setCourses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCourses = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/api/courses/');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setCourses(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCourses();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div className="course-list">
//             {courses.map(course => (
//                 <div key={course.id} className="course-item">
//                     <img src={course.image} alt={course.fieldname} />
//                     <h3>{course.fieldname}</h3>
//                     <p>Branch: {course.branchname}</p>
//                     <p>Price: ${course.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CourseList;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({});
    const [editingCourse, setEditingCourse] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/courses/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const addCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in newCourse) {
            formData.append(key, newCourse[key]);
        }
        try {
            await axios.post('http://127.0.0.1:8000/api/courses/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Course added successfully!');
            fetchCourses();
            setNewCourse({});
        } catch (error) {
            console.error('Error adding course:', error);
            alert('Failed to add course. Please try again.');
        }
    };

    const updateCourse = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in newCourse) {
            formData.append(key, newCourse[key]);
        }
        try {
            await axios.put(`http://127.0.0.1:8000/api/courses/${editingCourse.id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Course updated successfully!');
            fetchCourses();
            setNewCourse({});
            setEditingCourse(null);
        } catch (error) {
            alert('Failed to update course. Please try again.');
        }
    };

    const deleteCourse = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/courses/${id}/`);
            alert('Course deleted successfully!');
            fetchCourses();
        } catch (error) {
            console.error('Error deleting course:', error);
            alert('Failed to delete course. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({ ...newCourse, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewCourse({ ...newCourse, image: e.target.files[0] });
    };

    const startEditing = (course) => {
        setEditingCourse(course);
        setNewCourse(course); // Populate the form with the selected course details
    };

    const cancelEditing = () => {
        setEditingCourse(null);
        setNewCourse({});
    };

    return (
        <>
            <form onSubmit={editingCourse ? updateCourse : addCourse} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input type="file" name="image" onChange={handleImageChange} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="fieldname"
                        placeholder="Field Name"
                        value={newCourse.fieldname || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="branchname"
                        placeholder="Branch Name"
                        value={newCourse.branchname || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newCourse.price || ''}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {editingCourse ? 'Update Course' : 'Add Course'}
                    </button>
                    {editingCourse && (
                        <button
                            type="button"
                            onClick={cancelEditing}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                    <li key={course.id} className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-2">{course.fieldname} - ${course.price}</h2>
                        {course.image && (
                            <img
                                src={course.image}
                                alt={course.fieldname}
                                className="w-full h-32 object-cover mb-4"
                            />
                        )}
                        <div className="flex justify-between">
                            <button
                                onClick={() => startEditing(course)}
                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteCourse(course.id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CourseList;
