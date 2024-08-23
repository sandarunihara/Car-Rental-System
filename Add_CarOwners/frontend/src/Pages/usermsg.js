import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

const Usermsg = () => {
  const [pay, setPay] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [carNo, setCarNo] = useState('');
  const [feedbackId, setFeedbackId] = useState(''); // Store the _id of the feedback

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8050/api/addfeedback', {
        name,
        comment: feedback,
        carNo,
      });
      if (response.data.success) {
        setFeedbackId(response.data.data._id); // Save the _id of the new feedback
        setShowDetails(true); // Show the details modal
        setPay(false); // Close the payment modal
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback');
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:8050/api/deletefeedback', {
        data: { id: feedbackId }, // Use the feedbackId for deletion
      });
      if (response.data.success) {
        alert('Feedback deleted successfully');
        setShowDetails(false); // Close the details modal
        // Clear the form fields
        setName('');
        setFeedback('');
        setCarNo('');
      } else {
        alert('Failed to delete feedback');
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
      alert('An error occurred while deleting feedback');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.put('http://localhost:8050/api/updatefeedback', {
        _id: feedbackId, 
        name,
        comment: feedback,
        carNo,
      });
      if (response.data.success) {
        alert('Feedback updated successfully');
        setIsEditing(false); // Switch back to view mode
        setName('');
        setFeedback('');
        setCarNo('');
        setShowDetails(false);
      } else {
        alert('Failed to update feedback');
      }
    } catch (error) {
      console.error('Error updating feedback:', error);
      alert('An error occurred while updating feedback');
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 to-blue-200 flex justify-center items-center">
      <div className="w-[800px] bg-white p-10 rounded-2xl shadow-2xl ml-52">
        <h2 className="text-3xl font-bold mb-6">Car Return Confirmation</h2>
        <p className="mb-6">
          Thank you for returning car <span>[Car number]</span>. Here are the details of your rental:
        </p>
        <div className="text-lg mb-4">
          <p>Car Owner: [Car Owner name]</p>
          <p>Car Name: [Car Name]</p>
        </div>
        <p className="mb-6">
          We hope you had a great experience with your rental. To complete the process, please proceed with your payment for the rental period. Thank you for choosing our service!
        </p>
        <div className="text-lg font-semibold mb-6">Total Amount Due: [Total Amount]</div>
        <div className="flex justify-center">
          <Button
            gradientDuoTone="pinkToOrange"
            className="px-8 py-3 rounded-full text-white text-lg font-medium"
            onClick={() => setPay(true)}
          >
            Pay Now
          </Button>
        </div>
      </div>

      {/* Feedback Form Modal */}
      <Modal show={pay} size="md" onClose={() => setPay(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
              Add Your Feedback For Vehicle
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" value="Name" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="carNo" value="Car Number" className="mb-2 block" />
                <TextInput
                  type="text"
                  id="carNo"
                  name="carNo"
                  value={carNo}
                  onChange={(e) => setCarNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="feedback" value="Feedback" className="mb-2 block" />
                <textarea
                  className="w-full rounded-xl resize-none bg-gray-50 border border-gray-300 p-2"
                  id="feedback"
                  name="feedback"
                  rows="5"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex justify-center">
                <button className="bg-gradient-to-r from-green-400 to-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-600">
                  Done
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {/* Feedback Details Modal */}
      <Modal show={showDetails} size="md" onClose={() => setShowDetails(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Your Feedback</h3>
            {isEditing ? (
              <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                  <Label htmlFor="name" value="Name" className="mb-2 block" />
                  <TextInput
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="carNo" value="Car Number" className="mb-2 block" />
                  <TextInput
                    type="text"
                    id="carNo"
                    name="carNo"
                    value={carNo}
                    onChange={(e) => setCarNo(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="feedback" value="Feedback" className="mb-2 block" />
                  <textarea
                    className="w-full rounded-xl resize-none bg-gray-50 border border-gray-300 p-2"
                    id="feedback"
                    name="feedback"
                    rows="5"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                    type="submit" 
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-gray-50 p-6 mb-4 max-w-sm mx-auto border border-gray-300 rounded-lg shadow-sm">
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Name:
                  </label>
                  <p className="text-gray-800 bg-white border border-gray-300 rounded-lg p-2">
                    {name}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Car Number:
                  </label>
                  <p className="text-gray-800 bg-white border border-gray-300 rounded-lg p-2">
                    {carNo}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-1">
                    Feedback:
                  </label>
                  <p className="text-gray-800 bg-white border border-gray-300 rounded-lg p-2">
                    {feedback}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
                    onClick={handleDelete}
                  >
                    <MdDelete className="inline-block mr-1" />
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
                    onClick={() => setIsEditing(true)}
                  >
                    <MdModeEdit className="inline-block mr-1" />
                    Edit
                  </button>
                  <button
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    onClick={() => setShowDetails(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>


            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Usermsg;



