export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-[#5EEAD4] opacity-[0.10] blur-[110px]" />
      <div className="absolute top-1/4 -right-40 w-[480px] h-[480px] rounded-full bg-[#F5A623] opacity-[0.08] blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#7C6EF6] opacity-[0.06] blur-[110px]" />
    </div>
  );
}