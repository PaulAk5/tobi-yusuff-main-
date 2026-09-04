import { useEffect, useRef } from "react";

export default function Signature({ className = "" }) {
  return (
    <svg
      width="100%"
      viewBox="0 0 680 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>{`
        .sig { stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; fill: none; }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        .p1 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: draw 0.8s cubic-bezier(0.4,0,0.2,1) 0s forwards; }
        .p2 { stroke-dasharray: 900; stroke-dashoffset: 900; animation: draw 0.6s cubic-bezier(0.4,0,0.2,1) 0.8s forwards; }
        .p3 { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: draw 0.7s cubic-bezier(0.4,0,0.2,1) 1.4s forwards; }
        .p4 { stroke-dasharray: 800; stroke-dashoffset: 800; animation: draw 0.5s cubic-bezier(0.4,0,0.2,1) 2.1s forwards; }
        .p5 { stroke-dasharray: 600; stroke-dashoffset: 600; animation: draw 0.4s cubic-bezier(0.4,0,0.2,1) 2.6s forwards; }
        .p6 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 0.3s cubic-bezier(0.4,0,0.2,1) 3.0s forwards; }
        .p7 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 0.3s cubic-bezier(0.4,0,0.2,1) 3.3s forwards; }
        .p8 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 0.3s cubic-bezier(0.4,0,0.2,1) 3.6s forwards; }
        .p9 { stroke-dasharray: 600; stroke-dashoffset: 600; animation: draw 0.5s cubic-bezier(0.4,0,0.2,1) 3.9s forwards; }
        .p10 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 0.3s cubic-bezier(0.4,0,0.2,1) 4.4s forwards; }
        .p11 { stroke-dasharray: 800; stroke-dashoffset: 800; animation: draw 0.6s cubic-bezier(0.4,0,0.2,1) 4.7s forwards; }
        .p12 { stroke-dasharray: 400; stroke-dashoffset: 400; animation: draw 0.3s cubic-bezier(0.4,0,0.2,1) 5.3s forwards; }
        `}</style>
      <path class="sig p1" d="M18 45 Q35 38 55 35 Q75 33 88 38 Q72 40 58 42 Q58 60 54 90 Q50 118 53 148 Q55 162 48 170 Q42 176 38 168" strokeWidth="6"/>
      <path class="sig p1" d="M82 95 Q88 70 106 68 Q126 66 132 85 Q138 104 126 120 Q114 134 98 128 Q82 122 82 105 Q82 88 92 82 Q108 72 128 78 Q148 84 150 100" strokeWidth="6"/>
      <path class="sig p2" d="M150 100 Q155 60 152 30 Q151 18 155 14 Q158 10 162 16 Q165 25 163 55 Q161 85 163 108 Q165 122 174 126 Q186 130 192 116 Q198 100 190 86 Q182 72 168 74 Q158 76 156 88" strokeWidth="6"/>
      <path class="sig p2" d="M200 82 Q202 95 200 115 Q199 128 202 138" strokeWidth="6"/>
      <path class="sig p2" d="M199 58 Q203 54 206 59 Q207 63 203 65" strokeWidth="5.5"/>
      <path class="sig p3" d="M202 138 Q220 130 238 80 Q248 55 258 78 Q265 95 255 120 Q248 138 252 155 Q255 165 250 172" strokeWidth="6"/>
      <path class="sig p3" d="M270 80 Q266 108 270 122 Q274 136 286 136 Q300 136 306 120 Q310 106 306 82 Q306 100 308 118 Q310 138 316 148" strokeWidth="6"/>
      <path class="sig p4" d="M336 82 Q324 72 316 80 Q308 90 318 100 Q330 110 334 120 Q338 132 326 138 Q314 142 306 134" strokeWidth="6"/>
      <path class="sig p4" d="M348 78 Q344 106 348 120 Q352 134 364 134 Q378 134 384 118 Q388 104 384 80 Q384 98 386 116 Q388 136 394 148" strokeWidth="6"/>
      <path class="sig p5" d="M408 42 Q414 30 422 28 Q430 28 432 38 Q433 48 430 62 Q428 76 428 100 Q428 124 430 145" strokeWidth="6"/>
      <path class="sig p5" d="M412 90 Q422 87 442 88" strokeWidth="5.5"/>
      <path class="sig p5" d="M445 42 Q451 30 459 28 Q467 28 469 38 Q470 48 467 62 Q465 76 465 100 Q465 124 467 145 Q468 158 480 162 Q500 166 520 155 Q548 140 570 118 Q600 88 618 55 Q628 38 622 28 Q616 20 605 30 Q590 44 578 65" strokeWidth="6"/>
      <path class="sig p5" d="M449 90 Q459 87 479 88" strokeWidth="5.5"/>
    </svg>
  );
}