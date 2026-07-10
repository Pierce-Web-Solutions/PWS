import Brand from "./Brand";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal py-16 text-ivory/70">
      <div className="container-x flex flex-col items-center gap-5 text-center">
        <Brand light />

        <div className="ornament w-full max-w-[260px]">
          <span className="text-brass">&#9670;</span>
        </div>

        <p className="font-serif text-lg italic text-ivory/80">
          Modern technology. Local partnership.
        </p>
        <p className="max-w-md text-[0.9rem] text-ivory/60">
          Proudly serving Auburn, Barrow County, Gwinnett County, and the
          greater North Georgia community.
        </p>
        <p className="text-[0.8rem] text-ivory/40">
          © {year} Pierce Web Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
