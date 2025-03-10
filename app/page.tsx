'use client';

import { useSetVHVariable } from './utils/setVHVariable';
import Main from './components/main';

export default function Home() {
  useSetVHVariable();
  return (
    <main className="relative z-40 h-full">
        <Main />
    </main>
  );
}
