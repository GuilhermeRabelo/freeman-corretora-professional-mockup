import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 4000;
const FADE_DURATION_MS = 600;

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsFadingOut(true), SPLASH_DURATION_MS);
    const doneTimer = window.setTimeout(() => onComplete(), SPLASH_DURATION_MS + FADE_DURATION_MS);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`freeman-splash${isFadingOut ? " freeman-splash--fade-out" : ""}`}
      aria-hidden="true"
    >
      <style>{splashStyles}</style>
      <div className="freeman-splash__inner">
        <svg
          className="freeman-splash__logo"
          viewBox="0 0 1880 2426"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="freeman-shimmer-gradient" x1="0" y1="0" x2="1" y2="0.8">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.75" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="freeman-logo-shape-mask">
              <path fill="white" transform="translate(0, 2426) scale(0.1, -0.1)" d={SHIELD_PATH} />
              <path fill="white" transform="translate(0, 2426) scale(0.1, -0.1)" d={PEN_F_PATH} />
              <path fill="white" transform="translate(0, 2426) scale(0.1, -0.1)" d={DOT_PATH} />
            </mask>
          </defs>

          <g
            transform="translate(0.000000,2426.000000) scale(0.100000,-0.100000)"
            fill="#212543"
            stroke="none"
          >
            <path className="freeman-splash__shield" d={SHIELD_PATH} />
            <path className="freeman-splash__pen-f" d={PEN_F_PATH} />
            <path className="freeman-splash__dot" d={DOT_PATH} />
          </g>

          <g mask="url(#freeman-logo-shape-mask)">
            <rect
              className="freeman-splash__shimmer"
              x="-20000"
              y="-500"
              width="20000"
              height="3500"
              fill="url(#freeman-shimmer-gradient)"
            />
          </g>
        </svg>

        <div className="freeman-splash__wordmark">
          {"FREEMAN".split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </div>

        <div className="freeman-splash__tagline">Corretora de Seguros</div>
      </div>
    </div>
  );
}

const SHIELD_PATH =
  "M6815 24251 c-5073 -6 -5354 -7 -5430 -24 -701 -156 -1223 -701 -1351 -1412 -30 -165 -32 -272 -24 -1155 5 -492 11 -1284 14 -1760 3 -476 8 -1207 11 -1625 3 -418 10 -1442 15 -2275 6 -833 15 -2091 20 -2795 5 -704 12 -1755 15 -2335 6 -1086 14 -1407 40 -1615 67 -539 165 -1005 317 -1505 47 -154 128 -400 148 -445 4 -11 18 -47 30 -80 12 -33 29 -74 36 -92 8 -17 30 -73 50 -123 19 -51 39 -99 44 -108 5 -10 22 -49 39 -88 68 -165 258 -549 391 -789 80 -144 364 -604 401 -649 5 -6 58 -81 117 -166 164 -235 521 -696 613 -789 8 -9 62 -70 119 -136 162 -186 541 -575 746 -765 142 -132 191 -177 264 -240 41 -35 77 -67 80 -71 18 -20 343 -292 430 -359 25 -19 54 -42 65 -51 55 -48 102 -84 230 -180 257 -193 300 -224 351 -259 29 -19 96 -66 150 -105 159 -112 477 -322 653 -430 89 -55 212 -131 273 -169 300 -184 798 -457 1228 -671 113 -56 234 -116 270 -133 36 -16 112 -52 170 -80 107 -50 409 -184 645 -285 297 -128 786 -315 1027 -393 283 -92 526 -113 798 -69 135 22 224 49 515 154 240 86 300 108 447 166 79 31 184 73 233 92 50 19 109 44 132 54 24 10 45 19 47 19 5 0 262 108 329 139 25 12 49 21 52 21 3 0 37 16 76 35 39 19 75 35 79 35 5 0 55 22 113 50 58 27 151 70 207 95 182 82 772 380 913 461 32 19 60 34 61 34 9 0 438 246 576 330 320 195 735 470 965 640 50 36 130 95 179 131 180 131 785 622 836 678 3 3 25 24 50 45 161 140 603 577 780 772 335 369 642 753 880 1100 104 151 160 236 160 241 0 4 7 14 15 23 16 18 68 102 211 342 52 86 94 159 94 162 0 4 12 25 27 49 30 48 239 460 296 585 320 695 536 1396 651 2112 20 125 43 333 56 500 9 126 3 1378 -15 3205 -5 513 -14 1803 -30 4665 -3 536 -10 1045 -16 1130 -19 305 -96 563 -242 808 -114 190 -96 170 -772 871 -55 57 -116 121 -135 141 -19 20 -89 93 -155 161 -66 68 -181 187 -255 264 -74 77 -188 196 -255 265 -223 232 -783 813 -895 930 -147 154 -223 234 -360 375 -80 83 -201 209 -269 280 -118 123 -226 235 -540 560 -75 77 -185 192 -246 256 -660 690 -800 830 -927 925 -213 159 -447 262 -693 306 -149 26 52 25 -6170 19z m6041 -1291 c56 -28 94 -60 204 -172 142 -144 159 -161 525 -543 127 -131 289 -300 361 -375 72 -74 167 -173 210 -219 44 -46 117 -123 164 -170 47 -47 135 -138 195 -201 154 -162 609 -634 731 -760 56 -58 114 -118 128 -135 15 -16 87 -91 159 -165 73 -74 186 -191 252 -260 65 -69 174 -181 240 -250 132 -136 631 -655 655 -681 8 -9 76 -79 150 -155 242 -249 518 -538 538 -564 41 -54 82 -138 96 -200 11 -53 15 -227 20 -920 4 -470 11 -1453 16 -2185 6 -731 17 -2320 26 -3530 9 -1210 13 -2247 10 -2305 -6 -96 -32 -317 -55 -465 -35 -220 -119 -563 -203 -830 -60 -193 -136 -406 -149 -420 -5 -5 -9 -15 -9 -23 0 -8 -6 -28 -14 -45 -8 -18 -33 -77 -56 -132 -23 -55 -47 -113 -55 -130 -7 -16 -31 -70 -53 -120 -78 -177 -273 -543 -415 -780 -58 -96 -228 -357 -280 -430 -32 -44 -63 -88 -70 -99 -21 -32 -234 -315 -268 -357 -18 -22 -44 -55 -58 -73 -64 -82 -260 -310 -371 -431 -86 -93 -514 -521 -616 -615 -158 -146 -298 -267 -528 -455 -123 -100 -311 -246 -334 -259 -8 -5 -45 -32 -82 -60 -86 -66 -97 -74 -215 -157 -55 -38 -122 -85 -150 -104 -107 -75 -306 -205 -314 -205 -5 0 -14 -7 -21 -15 -15 -18 -409 -256 -647 -391 -269 -152 -754 -403 -1018 -526 -55 -26 -145 -68 -200 -94 -55 -25 -179 -80 -275 -121 -96 -40 -184 -78 -195 -83 -61 -27 -265 -112 -360 -150 -60 -24 -114 -47 -119 -52 -6 -4 -16 -8 -23 -8 -8 0 -71 -22 -141 -49 -138 -54 -378 -142 -537 -198 -139 -48 -187 -44 -405 32 -91 31 -183 65 -205 75 -22 9 -51 21 -65 25 -38 12 -413 161 -517 205 -50 22 -94 40 -97 40 -3 0 -38 15 -78 34 -40 18 -89 40 -108 48 -144 63 -401 179 -480 218 -348 172 -501 249 -615 308 -155 81 -352 189 -415 226 -25 14 -85 49 -135 77 -49 28 -106 60 -125 71 -19 12 -98 59 -175 105 -264 158 -669 421 -899 585 -87 62 -443 327 -542 404 -132 102 -420 340 -489 403 -22 21 -80 73 -130 116 -222 195 -605 577 -805 805 -41 46 -82 91 -91 100 -25 23 -180 208 -223 265 -21 28 -50 64 -65 80 -40 47 -227 293 -281 371 -343 494 -551 850 -752 1284 -80 173 -91 199 -163 375 -221 542 -373 1128 -466 1795 -27 192 -30 403 -69 6220 -5 811 -14 2047 -20 2745 -33 4335 -33 4225 -17 4301 20 94 64 179 128 249 58 62 155 121 221 134 23 5 2545 8 5604 7 l5560 -1 70 -35z";

const PEN_F_PATH =
  "M5274 17751 c-28 -10 -125 -58 -215 -106 -90 -48 -211 -113 -269 -143 -150 -78 -199 -117 -240 -193 -34 -61 -35 -68 -35 -169 0 -87 4 -112 21 -145 77 -148 124 -244 124 -254 0 -5 -26 -25 -57 -44 -100 -58 -123 -120 -79 -208 16 -33 20 -82 8 -110 -4 -9 -49 -61 -101 -115 -277 -293 -419 -677 -397 -1072 15 -275 75 -440 346 -947 23 -44 74 -141 113 -215 106 -206 196 -378 207 -398 19 -35 221 -424 310 -597 50 -99 95 -184 100 -190 4 -5 56 -104 115 -220 59 -115 120 -232 135 -260 31 -57 184 -352 274 -528 73 -143 109 -188 183 -222 118 -56 251 -29 342 70 57 63 75 117 69 210 -4 68 -31 127 -220 485 -33 63 -96 183 -139 267 -43 83 -98 189 -122 235 -25 45 -76 144 -114 218 -164 316 -229 441 -281 540 -31 58 -77 146 -103 195 -43 85 -90 175 -234 450 -297 569 -341 656 -363 725 -66 209 -50 439 46 630 44 90 87 125 142 116 68 -11 78 -23 188 -236 35 -69 81 -156 102 -195 21 -38 75 -142 120 -230 119 -231 215 -415 279 -535 30 -58 76 -145 102 -195 26 -49 72 -139 104 -200 31 -60 93 -180 137 -265 45 -85 106 -202 136 -260 30 -58 83 -159 117 -225 34 -66 93 -178 130 -250 37 -71 93 -179 125 -240 64 -123 144 -276 245 -470 38 -71 91 -173 118 -225 27 -52 79 -151 115 -220 35 -69 96 -186 135 -260 38 -74 120 -232 182 -350 62 -118 152 -291 200 -385 48 -93 109 -210 135 -260 119 -226 153 -291 235 -450 48 -93 106 -204 128 -245 22 -41 68 -129 102 -195 85 -165 212 -410 275 -530 29 -55 59 -113 67 -130 8 -16 19 -39 26 -50 20 -36 53 -98 132 -250 43 -82 104 -199 135 -260 32 -60 91 -175 132 -255 42 -80 96 -183 120 -230 25 -47 82 -157 128 -245 84 -164 147 -285 252 -484 52 -98 65 -115 96 -128 35 -14 75 -14 142 2 21 5 43 -8 131 -82 88 -73 260 -198 328 -238 9 -5 44 -30 76 -53 215 -157 625 -433 651 -438 50 -9 110 12 136 49 l23 32 3 565 c3 372 0 616 -8 713 -12 148 -12 149 11 173 14 15 23 40 27 72 4 51 -11 90 -127 305 -21 40 -80 153 -131 252 -51 99 -113 218 -138 265 -44 83 -103 197 -242 465 -93 180 -188 362 -200 383 -19 35 -220 423 -310 597 -51 99 -95 185 -100 190 -4 6 -56 105 -115 220 -59 116 -150 290 -201 388 -52 98 -94 181 -94 183 0 3 -18 36 -40 74 -22 38 -40 76 -40 84 0 14 182 16 1858 18 l1857 3 75 22 c114 32 199 76 297 152 91 70 196 188 234 262 80 157 107 338 75 501 -70 354 -315 615 -640 683 -64 13 -196 15 -918 15 -464 0 -1488 3 -2276 7 l-1432 6 -24 41 c-13 23 -63 118 -111 211 -114 221 -203 393 -275 530 -31 61 -97 187 -145 280 -48 94 -91 175 -95 180 -4 6 -50 93 -102 195 -53 102 -119 230 -148 285 -29 55 -91 174 -138 265 -46 91 -95 184 -108 207 -13 23 -24 49 -24 57 0 15 326 16 3515 16 2481 0 3530 3 3567 11 253 52 488 229 601 456 76 150 93 365 44 545 -65 239 -202 417 -407 530 -36 20 -87 44 -115 53 -138 47 29 45 -4146 45 l-3926 0 -26 48 c-15 26 -45 83 -67 128 -51 103 -75 126 -139 132 -40 4 -58 -1 -100 -24 -45 -24 -54 -26 -65 -13 -8 8 -42 70 -77 139 -83 163 -144 228 -243 259 -83 26 -154 26 -222 2z";

const DOT_PATH =
  "M17798 23441 c-204 -55 -376 -200 -466 -392 -167 -355 -26 -782 318 -962 201 -105 465 -108 666 -7 201 102 330 263 385 482 28 109 22 287 -11 393 -75 235 -274 426 -506 485 -102 26 -290 27 -386 1z";

const splashStyles = `
.freeman-splash {
  position: fixed;
  inset: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition:
    opacity 600ms cubic-bezier(0.83, 0, 0.17, 1),
    visibility 600ms cubic-bezier(0.83, 0, 0.17, 1);
}

.freeman-splash--fade-out {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.freeman-splash__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", system-ui, sans-serif;
  line-height: 1;
  transform: scale(1);
  transform-origin: center;
  transition: transform 600ms cubic-bezier(0.83, 0, 0.17, 1);
}

.freeman-splash--fade-out .freeman-splash__inner {
  transform: scale(1.18);
}

.freeman-splash__logo {
  width: clamp(140px, 28vw, 220px);
  height: auto;
  display: block;
  margin-bottom: 24px;
}

.freeman-splash__shimmer {
  opacity: 0;
  animation: freeman-shimmer-sweep 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.1s forwards;
}

@keyframes freeman-shimmer-sweep {
  0%   { opacity: 0; transform: translateX(0); }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; transform: translateX(22000px); }
}

.freeman-splash__dot {
  opacity: 0;
  transform: scale(0);
  transform-origin: center;
  animation: freeman-pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
}

.freeman-splash__shield {
  opacity: 0;
  clip-path: inset(0 100% 0 0);
  animation: freeman-reveal-ltr 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards;
}

.freeman-splash__pen-f {
  opacity: 0;
  clip-path: inset(100% 0 0 0);
  animation: freeman-reveal-ttb 0.9s cubic-bezier(0.65, 0, 0.35, 1) 1.3s forwards;
}

@keyframes freeman-pop-in {
  to { opacity: 1; transform: scale(1); }
}

@keyframes freeman-reveal-ltr {
  0%   { opacity: 1; clip-path: inset(0 100% 0 0); }
  100% { opacity: 1; clip-path: inset(0 0 0 0); }
}

@keyframes freeman-reveal-ttb {
  0%   { opacity: 1; clip-path: inset(100% 0 0 0); }
  100% { opacity: 1; clip-path: inset(0 0 0 0); }
}

.freeman-splash__wordmark {
  display: flex;
}

.freeman-splash__wordmark span {
  font-size: clamp(2.25rem, 7vw, 3.8rem);
  font-weight: 800;
  color: #212543;
  letter-spacing: 0.02em;
  display: inline-block;
  opacity: 0;
  transform: translateY(12px);
  animation: freeman-letter-drop 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.freeman-splash__wordmark span:nth-child(1) { animation-delay: 2.05s; }
.freeman-splash__wordmark span:nth-child(2) { animation-delay: 2.10s; }
.freeman-splash__wordmark span:nth-child(3) { animation-delay: 2.15s; }
.freeman-splash__wordmark span:nth-child(4) { animation-delay: 2.20s; }
.freeman-splash__wordmark span:nth-child(5) { animation-delay: 2.25s; }
.freeman-splash__wordmark span:nth-child(6) { animation-delay: 2.30s; }
.freeman-splash__wordmark span:nth-child(7) { animation-delay: 2.35s; }

.freeman-splash__tagline {
  font-size: clamp(0.82rem, 2.5vw, 1.42rem);
  font-weight: 400;
  color: #212543;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(8px);
  animation: freeman-fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) 2.7s forwards;
  margin-top: 8px;
}

@keyframes freeman-letter-drop {
  to { opacity: 1; transform: translateY(0); }
}

@keyframes freeman-fade-in-up {
  to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .freeman-splash__shimmer,
  .freeman-splash__shield,
  .freeman-splash__pen-f,
  .freeman-splash__dot,
  .freeman-splash__wordmark span,
  .freeman-splash__tagline {
    animation: none;
    opacity: 1;
    transform: none;
    clip-path: none;
  }

  .freeman-splash__inner,
  .freeman-splash--fade-out .freeman-splash__inner {
    transition: none;
    transform: none;
  }
}
`;
