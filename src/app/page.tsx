'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white transition-colors px-4">
      <div className="max-w-4xl w-full flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Travail
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div
            onClick={() => router.push('/student')}
            className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all text-center border border-gray-300 dark:border-gray-700 hover:border-blue-500"
          >
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Student</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Take quizzes and view assignments
            </p>
          </div>

          <div
            onClick={() => router.push('/educator')}
            className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition-all text-center border border-gray-300 dark:border-gray-700 hover:border-green-500"
          >
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">Educator</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Create and manage quizzes, exams, and assignments
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
