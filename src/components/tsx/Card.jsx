export default function Card({ img, desc }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border bg-[#252c44] px-2 pt-2">
      <div className="relative flex h-60 justify-center rounded-lg bg-[#57669C]/20">
        <img className="z-10" src={img} />

        <img
          className="absolute bottom-0 top-0 rounded-lg opacity-30"
          src="/images/cardbg.png"
        />
      </div>

      <div className="flex h-44 items-center justify-center px-[42px]">
        <p className="w-[330px] text-center text-xl text-text-color">{desc}</p>
      </div>
    </div>
  );
}
