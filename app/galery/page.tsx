export default function Page() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="flex flex-col gap-2">
        <img src="/img/img1.jpg" />
        <img src="/img/img1.jpg" />
        <img src="/img/img1.jpg" />
      </div>
      <div className="flex flex-col gap-2">
        <img src="/img/img2.jpg" />
        <img src="/img/img2.jpg" />
        <img src="/img/img2.jpg" />
      </div>
      <div className="flex flex-col gap-2">
        <img src="/img/img1.jpg" />
        <img src="/img/img1.jpg" />
        <img src="/img/img1.jpg" />
      </div>
    </div>
  );
}
