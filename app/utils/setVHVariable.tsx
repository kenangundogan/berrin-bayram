'use client';
import { useEffect } from 'react';

export const useSetVHVariable = () => {
  const updateVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    updateVH();
    window.addEventListener('resize', updateVH);
    return () => window.removeEventListener('resize', updateVH);
  }, []);
};
