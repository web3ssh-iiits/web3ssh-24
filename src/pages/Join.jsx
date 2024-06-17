import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useSearchParams } from 'react-router-dom';
import LegoLoader from '../loaders/lego';

const JoinCodePage = () => {
  const [isValid, setIsValid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (code) {
      fetch(`${BACKEND_URL}/validate/${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.valid) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        })
        .catch((error) => {
          console.error('There was an error validating the code:', error);
          setIsValid(false);
        })
        .finally(() => setLoading(false));
    } else {
      setIsValid(false);
      setLoading(false);
    }
  }, [code, BACKEND_URL]);

  if (loading) {
    return (
      <>
        <div className="text-center h-screen text-6xl">
          <LegoLoader></LegoLoader>
        </div>
        ;
      </>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {isValid ? (
        <div className="p-6 border mx-8 rounded-lg shadow-md bg-white bg-opacity-10">
          <Confetti />
          <h1 className="text-4xl font-bold">Discount Unlocked</h1>
          <h2 className="text-8xl font-bold my-4 mt-8">🥳</h2>
          <p className="text-2xl pt-16 py-2 ">
            Congrats! You've unlocked a discount!
          </p>
          <p className="text-2xl"> Offer Valid Till: 10th July 2024</p>
          <a href="https://web3ssh.dev/register">
            <button className="p-[3px] relative my-4 mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black bg-opacity-70 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent sm:text-3xl hover:font-bold text-xl">
                Join at ₹499
              </div>
            </button>
          </a>
          <div className="text-xl">
            <p>Dont forget to fill the referral code </p>
            <code> {code} </code>
            <p> in the registration form </p>
          </div>
        </div>
      ) : (
        <div className="p-6 border mx-8 rounded-lg shadow-md bg-white bg-opacity-10">
          <h1 className="text-4xl font-bold">Invalid Code</h1>
          <h2 className="text-8xl font-bold my-4 mt-8">😔</h2>
          <p className="text-2xl pt-16 py-2 ">
            Please check the code and try again.
          </p>
          <p className="text-2xl"> You can still register at normal price.</p>

          <button className="p-[3px] relative my-4 mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black bg-opacity-70 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent sm:text-3xl hover:font-bold text-xl">
              Join at ₹800
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinCodePage;
