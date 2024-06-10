export default function DayButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      class="bg-[#281648] text-[#A372ED] border border-[#A372ED] border-b-4 font-bold font-mono overflow-hidden relative px-6 py-3 rounded-lg hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group shrink-0"
    >
      <span class="bg-[#A372ED] shadow-[#A372ED] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      {children}
    </button>
  );
}
