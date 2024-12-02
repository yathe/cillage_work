import React, { useState } from 'react';

const Partner = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Partner With Us</h1>
      </div>

      <div style={styles.formContainer}>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Organization/Company</label>
            <input
              type="text"
              placeholder="Your Company Name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Contact Person</label>
            <input
              type="text"
              placeholder="Your Contact Person"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Your Address</label>
            <input
              type="text"
              placeholder="Your Address"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Area of Interest</label>
            <input
              type="text"
              placeholder="Area of Interest"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Your Message to Us</label>
            <textarea
              placeholder="Your Message to us"
              rows="4"
              style={styles.textarea}
            ></textarea>
          </div>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#d2a569',
    padding: '50px 10%',
    fontFamily: 'Arial, sans-serif',
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  select: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'none',
  },
  button: {
    backgroundColor: '#e1b470',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Partner;
