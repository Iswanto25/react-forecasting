import { IoAdd } from "react-icons/io5";
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    // 1. Hapus kelas 'bg-white' dan 'dark:bg-slate-900' dari sini
    <header className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200 dark:border-slate-800">
      <div>
        {/* 2. Pastikan teks ini memiliki warna default untuk light mode */}
        <p className="text-sm uppercase text-gray-500 dark:text-black">Overview</p>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Fluid vertical layout
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Tombol ini sudah dinamis */}
        <button className="hidden sm:block rounded-md px-4 py-2 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-200 dark:hover:bg-slate-600">
          New view
        </button>
        {/* Tombol biru ini tidak perlu diubah karena warnanya solid */}
        <button className="flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700">
          <IoAdd size={20} />
          Create new report
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
}