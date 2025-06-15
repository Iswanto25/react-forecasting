"use client";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
    >
      {label}
    </button>
  );
}
