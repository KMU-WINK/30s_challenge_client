export default function AppDemoFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-neutral-100">
      <div className="relative h-dvh w-[390px] max-w-full overflow-hidden rounded-2xl border border-neutral-300 bg-white py-1 shadow-xl sm:w-[390px] md:w-[414px] lg:w-[428px]">
        <div className="flex min-h-dvh w-full flex-col">{children}</div>
      </div>
    </div>
  );
}
