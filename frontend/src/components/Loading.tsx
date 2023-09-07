export default function Loading() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-50 flex bg-slate-950/40 text-white items-center justify-center flex-col">
        <span className="loading loading-bars loading-lg"></span>
        <p className="text-2xl font-bold my-2 ">Loading...</p>
    </div>
  )
}
