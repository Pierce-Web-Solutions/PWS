import clsx from "clsx";

/** Abstract foothill contours used as low-contrast architectural texture. */
export default function TopographicContours({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 720 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={clsx("pointer-events-none text-foothill", className)}
    >
      <defs>
        <linearGradient id="contour-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.22" stopColor="white" />
          <stop offset="0.78" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="contour-mask">
          <rect width="720" height="420" fill="url(#contour-fade)" />
        </mask>
      </defs>
      <g mask="url(#contour-mask)" stroke="currentColor" strokeWidth="1">
        <path d="M-32 343C36 304 85 321 133 286C189 246 212 176 278 161C340 147 371 195 426 177C487 157 503 92 566 73C620 56 684 79 753 34" />
        <path d="M-38 364C29 326 88 347 147 305C201 267 226 199 286 183C345 168 376 216 434 197C493 178 515 114 575 95C631 77 691 101 758 58" />
        <path d="M-44 386C27 350 94 370 156 328C213 289 239 223 295 207C352 190 384 238 442 220C502 201 525 139 586 120C644 102 700 126 765 84" />
        <path d="M-50 408C24 373 100 395 166 351C225 312 251 246 305 231C360 214 393 262 451 244C510 226 536 164 596 146C655 128 711 151 772 111" />
        <path d="M42 431C73 397 112 410 176 374C238 339 259 272 315 255C370 239 403 286 461 269C520 251 547 190 607 172C666 155 721 178 780 138" />
        <path d="M121 442C143 414 165 411 201 392C258 361 273 304 325 282C377 260 414 309 470 292C529 274 558 215 618 198C676 182 730 204 786 165" />
        <path d="M198 449C219 420 239 415 267 393C302 366 302 326 336 306C377 282 417 327 464 318C519 307 537 257 589 235C646 210 703 233 792 192" />
        <path d="M260 451C280 425 294 414 307 391C324 361 320 338 347 323C379 306 414 344 452 340C499 335 521 292 563 267C619 234 677 257 798 219" />
        <path d="M319 453C338 428 346 414 350 390C354 362 356 350 377 343C402 335 420 360 449 361C490 362 516 328 548 301C595 260 653 282 804 246" />
        <path d="M381 454C396 431 402 416 398 393C395 374 402 365 418 367C440 369 450 386 474 384C507 382 530 355 558 331C600 294 655 308 810 273" />
        <path d="M444 455C456 437 466 420 463 404C461 393 467 389 479 392C499 397 511 402 530 395C553 387 569 369 590 351C627 319 676 330 816 302" />
      </g>
    </svg>
  );
}
