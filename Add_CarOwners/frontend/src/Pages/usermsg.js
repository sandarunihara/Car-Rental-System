import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import axios from 'axios';

const Usermsg = () => {
  const [pay, setPay] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [carNo, setCarNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8050/api/addfeedback', {
        name,
        comment: feedback,
        carNo,
      });
      if (response.data.success) {
        alert('Feedback submitted successfully');
        setName('');
        setFeedback('');
        setCarNo('');
        setPay(false);
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback');
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
    </div>
  );
};

export default Usermsg;
