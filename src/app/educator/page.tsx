'use client';
import { useRouter } from 'next/navigation';

const mockForms = [
  { id: '1', title: 'Math Quiz', type: 'Quiz' },
  { id: '2', title: 'Science Assignment', type: 'Assignment' },
  { id: '3', title: 'Final Exam', type: 'Exam' },
];

export default function EducatorDashboard() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Educator Dashboard</h1>
          <button
            onClick={() => router.push('/educator/create-form')}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
          >
            + Create New Form
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockForms.map((form) => (
            <div
            key={form.id}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
            >
            <h2 className="text-xl font-semibold">{form.title}</h2>
            <p className="text-gray-500 dark:text-gray-300">{form.type}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
