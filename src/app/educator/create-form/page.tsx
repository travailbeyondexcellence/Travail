'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  type: z.enum(['Quiz', 'Assignment', 'Exam']),
});

type FormData = z.infer<typeof formSchema>;

export default function CreateFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted form:', data);
    // Next: push to backend or next form step
  };

  return (
    <main className="min-h-screen p-8 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create New Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              {...register('title')}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter quiz title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Type</label>
            <select
              {...register('type')}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg"
            >
              <option value="">Select type</option>
              <option value="Quiz">Quiz</option>
              <option value="Assignment">Assignment</option>
              <option value="Exam">Exam</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Create Form
          </button>
        </form>
      </div>
    </main>
  );
}
