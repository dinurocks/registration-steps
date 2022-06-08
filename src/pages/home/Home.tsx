import axios from 'axios';
import { FormEvent, useState } from 'react';
import './home.css';
function Home() {
  const [mobileNo, setMobileNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [panNo, setPanNO] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      console.log(mobileNo, aadharNo, panNo);
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log(res);
    } catch (error) {
      console.log('handleSubmit error', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='container'>
      <form className='innerContainer' onSubmit={handleSubmit}>
        <input
          type='text'
          className='formInput'
          placeholder='Mobile number'
          onChange={(e) => setMobileNo(e.target.value)}
        />
        <input
          type='text'
          className='formInput'
          placeholder='Aadhar number'
          onChange={(e) => setAadharNo(e.target.value)}
        />
        <input
          type='text'
          className='formInput'
          placeholder='PAN number'
          onChange={(e) => setPanNO(e.target.value)}
        />
        <input
          type='submit'
          value={isLoading ? 'Submitting...' : 'Submit'}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}

export default Home;
