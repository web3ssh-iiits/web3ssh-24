'use client';

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import LegoLoader from '@components/loaders/lego';
import { HeroHighlight, Highlight } from '@components/ui/hero-highlight';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function DiscountUnlocked() {
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [recycle, setRecycle] = useState(true);
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

  useEffect(() => {
    setTimeout(() => {
      setRecycle(false);
    }, 5000);
  });
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
        <>
          <div className="p-6 border mx-8 rounded-lg shadow-md bg-white bg-opacity-10 mt-32">
            <Confetti numberOfPieces={300} recycle={recycle} />
            <h1 className="text-4xl font-bold">Discount Unlocked</h1>
            <h2 className="text-8xl font-bold my-4 mt-8">🥳</h2>
            <p className="text-2xl pt-16 py-2 ">
              Congrats! You have unlocked a discount!
            </p>
            <p className="text-2xl"> Offer Valid Till: 10th July 2024.</p>
            <p className="text-2xl">
              {' '}
              <s>₹800</s> ₹499{' '}
            </p>
            <a href="https://web3ssh.dev/register">
              <button className="p-[3px] relative my-4 mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black bg-opacity-70 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent sm:text-3xl hover:font-bold text-xl">
                  Join at ₹499
                </div>
              </button>
            </a>
          </div>
          <div className="p-6  mx-8 rounded-lg shadow-md bg-white bg-opacity-0 my-4">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-xl px-4  py-4 lg:text-xl font-bold text-white  leading-relaxed lg:leading-snug text-center mx-auto max-w-2xl "
              >
                Dont forget to use the referral code <br />
                <Highlight className="text-white">{code}</Highlight>
                <br /> while filling out the Google Form.
              </motion.h1>
            </HeroHighlight>
          </div>
        </>
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
}
export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="text-center h-screen text-6xl">
            <LegoLoader></LegoLoader>
          </div>
        }
      >
        <DiscountUnlocked />
      </Suspense>
    </>
  );
}
