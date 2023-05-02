import React, { useState, useEffect } from 'react';

const AccountForm = ({ addCustomer }) => 
{
  const [customerName, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountType, setAccountType] = useState('');

  
  function handleSubmi(element)
   {
    element.preventDefault();

    addCustomer({
      customerName,
      accountNumber,
      accountType
    });

    setName('');
    setAccountNumber('');
    setAccountType('');
  }

  return (
    <div className='formBody'>
      <div className='card p-3 w-100'>
        <h3 className='r mb-3'>Hello, {customerName}</h3>

        <form onSubmit={handleSubmi} >
          <div className='form-group'>
            <label htmlFor='Name'>Name of customer</label>
            <input
              type='text'
              placeholder='Enter your name'
              id='Name'
              value={customerName}
              onChange={(event) => setName(event.target.value)}
              className='form-control' required
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
           required />
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
          required  />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary mx-auto d-block mt-4' type='submit'>
              <strong>Add Customer</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};





function Main() 
{
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


  const [numberOfAccounts, setNumberOfAccounts] = useState(readaccounts.length);



  useEffect(() => {
    localStorage.setItem('read accounts', JSON.stringify(readaccounts));
  }, [readaccounts]);


  function addAccount(newAccount) {
    const updatedAccounts = [...readaccounts, { id: numberOfAccounts + 1, ...newAccount }];
    setReadAccounts(updatedAccounts);
    setNumberOfAccounts(updatedAccounts.length);
  }

  function deleteAccount(id)
   {
    const updatedAccounts = readaccounts.filter((account) => account.id !== id);
    setReadAccounts(updatedAccounts);
    setNumberOfAccounts(updatedAccounts.length);
  }


// render card
  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-4'>Customers Bank Accounts</h2>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <AccountForm addCustomer={addAccount}/>
        </div>
      </div>
      <div className='row text-center'>
          <div className='card-container d-flex justify-content-center flex-wrap'>
            {readaccounts.length ? (
              readaccounts.map((account) => (
                <div className='card mb-4 mx-2' key={account.id}>
                  <div className='card-header'>{account.customerName}</div>
                  <div className='card-body'>
                    <p className='card-text'>Account Number: {account.accountNumber}</p>
                    <p className='card-text'>Account Type: {account.accountType}</p>
                    <button
                      className='btn btn-danger d-flex mx-auto mt-3'
                      onClick={() => deleteAccount(account.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No accounts found</p>
            )}
          </div>
      </div>
    </div>
  );

};

export default Main;
