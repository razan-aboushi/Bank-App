import React, { useState, useEffect } from 'react';

const AccountForm = ({ addCustomer }) => {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomer({
      customerName: name,
      accountNumber,
      accountType,
    });
    setName('');
    setAccountNumber('');
    setAccountType('');
  };

  return (
    <div>
    <h3 className='mb-3'>Hello , {name}</h3>
    <form onSubmit={handleSubmit} className='bg-light rounded p-3 shadow'>
      <div className='form-group'>
        <label htmlFor='Name'>Name of customer</label>
        <input
          type='text'
          placeholder='Enter your name'
          id='Name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='AccNumber'>Account number</label>
        <input
          type='text'
          placeholder='Account number'
          id='AccNumber'
          value={accountNumber}
          onChange={(event) => setAccountNumber(event.target.value)}
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='Account'>Account type</label>
        <input
          type='text'
          placeholder='Enter your Account type'
          id='Account'
          value={accountType}
          onChange={(event) => setAccountType(event.target.value)}
          className='form-control'
        />
      </div>

      <div className='form-group text-center mt-4'>
        <button className='btn' type='submit'>
          <strong>Add Customer</strong>
          <div id='container-stars'>
            <div id='stars'></div>
          </div>

          <div id='glow'>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
        </button>
      </div>
    </form>
    </div>
  );
};

const Main = () => {
  const [readaccounts, setReadAccounts] = useState(
    JSON.parse(localStorage.getItem('readaccounts')) || [
      {
        id: 1,
        customerName: 'Israa Othman',
        accountNumber: '123456',
        accountType: 'Savings',
      },
      {
        id: 2,
        customerName: 'Ahmad Zahran',
        accountNumber: '987654',
        accountType: 'Student accounts',
      },
      {
        id: 3,
        customerName: 'Rawan Abuseini',
        accountNumber: '246810',
        accountType: 'Checking',
      },
      {
        id: 4,
        customerName: 'Hala obeidat',
        accountNumber: '135790',
        accountType: 'Savings',
      },
    ]
  );
  const [numberOfAccounts, setNumberOfAccounts] = useState(
    readaccounts.length
  );

  useEffect(() => {
    localStorage.setItem('read accounts', JSON.stringify(readaccounts));
  }, [readaccounts]);
  
  const addAccount = (newAccount) => {
  const updatedAccounts = [...readaccounts, { id: numberOfAccounts + 1, ...newAccount }];
  setReadAccounts(updatedAccounts);
  setNumberOfAccounts(updatedAccounts.length);
  };
  
  const deleteAccount = (id) => {
  const updatedAccounts = readaccounts.filter((account) => account.id !== id);
  setReadAccounts(updatedAccounts);
  setNumberOfAccounts(updatedAccounts.length);
  };
  
  return (
  <div className='container mt-5'>
  <h1 className='text-center mb-4'>Bank Accounts</h1>
  <div className='row'>
  <div className='col-md-4'>
  <AccountForm addCustomer={addAccount} />
  </div>
  <div className='col-md-8'>
  {readaccounts.length ? (
  <table className='table table-striped'>
  <thead>
  <tr>
  <th>Customer Name</th>
  <th>Account Number</th>
  <th>Account Type</th>
  <th>Action</th>
  </tr>
  </thead>
  <tbody>
  {readaccounts.map((account) => (
  <tr key={account.id}>
  <td>{account.customerName}</td>
  <td>{account.accountNumber}</td>
  <td>{account.accountType}</td>
  <td>
  <button
  className='btn btn-danger'
  onClick={() => deleteAccount(account.id)}
  >
  Delete
  </button>
  </td>
  </tr>
  ))}
  </tbody>
  </table>
  ) : (
  <p>No accounts found</p>
  )}
  </div>
  </div>
  </div>
  );
  };
  
  export default Main;
