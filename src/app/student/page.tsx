// src/app/student/page.tsx

const mockForms = [
  { id: '1', title: 'Math Quiz', type: 'Quiz' },
  { id: '2', title: 'Science Assignment', type: 'Assignment' },
  { id: '3', title: 'Final Exam', type: 'Exam' },
];

export default function StudentView() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Quizzes & Assignments</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockForms.map((form) => (
            <div
              key={form.id}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{form.title}</h2>
              <p className="text-gray-500">{form.type}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
