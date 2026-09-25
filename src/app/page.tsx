import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 sm:px-12 sm:py-24 md:py-28 bg-sky-50">
      <div className="max-w-2xl w-full flex flex-col items-center text-center rounded-3xl border border-sky-100 bg-white/85 p-8 sm:p-12 md:p-14 shadow-xl shadow-sky-100/50 backdrop-blur-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-4 py-1.5 text-xs font-semibold text-sky-700 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
          Next.js + TypeScript + Tailwind CSS
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 sm:mb-10 leading-tight text-center text-balance">
          안녕하세요,<br />
          <span className="text-teal-600">조진영입니다</span>
        </h1>

        <div className="relative mb-8 sm:mb-10">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-sky-200/70 transition-transform duration-300 hover:scale-105">
            <Image
              src="/profile.jpg"
              alt="프로필 이미지"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-slate-600 text-sm sm:text-base mb-10 sm:mb-12 leading-relaxed text-center max-w-lg mx-auto text-balance">
          프로젝트가 준비되었습니다.<br />
          <code className="text-sky-700 font-mono text-xs bg-sky-100/80 border border-sky-200/80 px-2 py-0.5 rounded">src/app/page.tsx</code> 파일을 열어 자유롭게 편집을 시작해보세요.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
            <span className="text-xs font-medium text-slate-500 block mb-1">라우팅</span>
            <span className="text-sm font-bold text-slate-800">App Router</span>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
            <span className="text-xs font-medium text-slate-500 block mb-1">타입 지원</span>
            <span className="text-sm font-bold text-slate-800">TypeScript 5</span>
          </div>
          <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
            <span className="text-xs font-medium text-slate-500 block mb-1">스타일링</span>
            <span className="text-sm font-bold text-slate-800">Tailwind CSS</span>
          </div>
        </div>

        <div className="w-full mt-10 pt-8 border-t border-sky-100 text-xs text-slate-500 flex items-center justify-between">
          <span className="font-medium">개발 서버 시작:</span>
          <code className="bg-sky-100 text-sky-800 border border-sky-200/70 px-2.5 py-1 rounded font-mono font-medium">npm run dev</code>
        </div>
      </div>
    </main>
  );
}

