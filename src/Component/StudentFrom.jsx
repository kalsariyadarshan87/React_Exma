import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, clearEditStudent, deleteStudent, setEditStudent, setStudent, updateStudent } from '../Redux/Action';

export default function StudentFrom() {
    const dispatch = useDispatch();
    const { students, editStudents } = useSelector(store => store);
    const [newStudent, setNewStudent] = useState({
        id: '',
        name: '',
        address: '',
        phone: '',

    });

    useEffect(() => {
        FetchData();
    }, []);

    const FetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Details');
            dispatch(setStudent(response.data));
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    const handleChange = (e) => {
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editStudents) {
                if (newStudent.id !== editStudents.id) {
                    await axios.delete(`http://localhost:3000/Details/${editStudents.id}`);
                    await axios.post('http://localhost:3000/Details', newStudent);
                    dispatch(deleteStudent(editStudents.id));
                    dispatch(addStudent(newStudent));
                } else {
                    await axios.put(`http://localhost:3000/Details/${editStudents.id}`, newStudent);
                    dispatch(updateStudent(newStudent));
                }
                dispatch(clearEditStudent());
            } else {
                await axios.post('http://localhost:3000/Details', newStudent);
                dispatch(addStudent(newStudent));
            }
            setNewStudent({
                id: '',
                name: '',
                address: '',
                phone: '',

            });
        } catch (error) {
            console.error('Error adding or updating Student', error);
        }
    };

    const handleDelete = async (id) => {
            try {
              await axios.delete(`http://localhost:3000/Details/${id}`);
              dispatch(deleteStudent(id));
            } catch (error) {
              console.error('Error deleting product', error);
            }
          };
    const handleUpdate = (data) => {
            setNewStudent(data);
            dispatch(setEditStudent(data));
          };

    return (
        <div>
            <h1>ProductsFrom</h1>


            <form onSubmit={handleSubmit} className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="id">Products Id:</label>
                    <div className="col-sm-10">
                        <input type="text" name="id" placeholder="Products Id" value={newStudent.id} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="name">Products Name:</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" placeholder="product Name" value={newStudent.name} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="Address">Student Address:</label>
                    <div className="col-sm-10">
                        <input type="text" name="address" placeholder="owner Address" value={newStudent.address} onChange={handleChange} className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" >Products Phone:</label>
                    <div className="col-sm-10">
                        <input type="number" name="phone" placeholder="owner Mo." value={newStudent.phone} onChange={handleChange} className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-primary">{editStudents ? 'Edit' : 'Add'}</button>
                    </div>
                </div><br />
                <table className="table table-striped table-bordered">
         <thead>
           <tr>
             <th>Products Name</th>
             <th>Products Address</th>
             <th>Products Mo.</th>
             <th>Delete</th>
             <th>Update</th>
           </tr>
         </thead>
         <tbody>
           {students.map((item, index) => (
             <tr key={index}>
               <td>{item.name}</td>
               <td>{item.age}</td>
               <td>{item.address}</td>
               <td>{item.phone}</td>
             
               <td><button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button></td>
               <td><button onClick={() => handleUpdate(item)} className="btn btn-primary">Update</button></td>
             </tr>
           ))}
         </tbody>
       </table>
            </form>
            
        </div>
        
    )
}



