import React, { useState } from 'react';
import './App.css';
import KLLogo from '/Users/akhi666/kl-university-calculator/src/assests/KLLogo.png';

function App() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState(Array(5).fill(''));
  const [gpa, setGpa] = useState(null);

  const handleMarksChange = (index, value) => {
    const updated = [...marks];
    updated[index] = value;
    setMarks(updated);
  };

  const calculateGPA = () => {
    const numericMarks = marks.map(Number).filter(mark => !isNaN(mark));
    if (numericMarks.length === 0) return;
    const gpaValue = numericMarks.reduce((a, b) => a + b, 0) / numericMarks.length / 10;
    setGpa(gpaValue.toFixed(2));
  };

  return (
    <div className="container">
      <header>
        <img src={KLLogo} alt="KL University Logo" className="logo" />
        <h1>KL University Attendance Calculator</h1>
      </header>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Enter Marks (out of 100)</h2>
      {marks.map((mark, index) => (
        <input
          key={index}
          type="number"
          placeholder={`Subject ${index + 1}`}
          value={mark}
          onChange={(e) => handleMarksChange(index, e.target.value)}
        />
      ))}
      <button onClick={calculateGPA}>Calculate GPA</button>
      {gpa && (
        <div className="result">
          <p><strong>{name}</strong>'s GPA: {gpa}</p>
        </div>
      )}
      <footer style={{ marginTop: '30px', fontSize: '14px', color: '#555' }}>
        © 2025 Akhil. All rights reserved.
      </footer>
    </div>
  );
}

export default App;