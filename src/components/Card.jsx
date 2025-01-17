export default function Card({ img, desc }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border">
      <div className="flex h-60 justify-center bg-[#57669C]">
        <img src={img} />
      </div>

      <div className="flex h-44 items-center justify-center px-[42px]">
        <p className="w-[330px] text-center text-xl text-text-color">{desc}</p>
      </div>
    </div>
  );
}
