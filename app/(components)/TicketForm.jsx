'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === 'new' ? false : true;
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 1,
    progress: 0,
    status: 'not started',
    category: 'Hardware Problem',
  });

  useEffect(() => {
    if (EDITMODE) {
      setFormData({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority,
        progress: ticket.progress,
        status: ticket.status,
        category: ticket.category,
      });
    }
  }, [EDITMODE, ticket]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;

    try {
      if (EDITMODE) {
        res = await fetch(`/api/Tickets/${ticket._id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });
      } else {
        res = await fetch('/api/Tickets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData }),
        });
      }

      if (!res.ok) {
        throw new Error('Failed to Create/Update ticket');
      }
      router.push('/');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? 'Update Your Ticket' : 'Create New Ticket'}</h3>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <label htmlFor="progress">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className="btn"
          value={EDITMODE ? 'Update Your Ticket' : 'Create New Ticket'}
        />
      </form>
    </div>
  );
};

export default TicketForm;
