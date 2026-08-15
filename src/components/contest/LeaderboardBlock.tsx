import svgPaths from "../../assets/leaderboard/paths"

import {
  imgContainer,
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgGroup3,
  imgGroup4,
  imgGroup5,
} from "../../assets/leaderboard/medals"

function Container3() {
  return (
    <div className="absolute h-0 left-0 right-0 top-0" data-name="Container">
      <div
        className="absolute bg-gradient-to-r from-[#18181b] h-[163.125px] left-0 to-[#18181b] top-[80.75px] via-1/2 via-[#27272a] w-[65.25px]"
        data-name="Gradient"
      />
      <div
        className="absolute h-[16.313px] left-0 rounded-[8155.435px] top-[73.41px] w-[65.25px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 65.25 16.313' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.2625 0 0 0.81563 32.625 8.1563)'><stop stop-color='rgba(49,49,49,1)' offset='0.16'/><stop stop-color='rgba(74,74,74,1)' offset='0.55'/><stop stop-color='rgba(66,66,69,1)' offset='0.72'/><stop stop-color='rgba(39,40,42,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
        data-name="Gradient"
      />
    </div>
  )
}

function Container5() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Container" />
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip py-[3.263px] relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-text-primary text-[9.788px] text-center whitespace-nowrap">
        <p className="leading-[9.788px]">Lorem</p>
      </div>
    </div>
  )
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3.263px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  )
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] text-center whitespace-nowrap">
          <p className="leading-[13.05px]">3686</p>
        </div>
      </div>
    </div>
  )
}

function BackgroundBorderShadow() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-surface-hover content-stretch drop-shadow-[0px_1.631px_2.447px_rgba(0,0,0,0.12),0px_3.263px_4.894px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center left-1/2 px-[0.816px] py-[7.178px] rounded-[13.05px] top-[93.8px] w-[78.626px]"
      data-name="Background+Border+Shadow"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <Container6 />
      <Container8 />
    </div>
  )
}

function Container4() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0"
      data-name="Container"
    >
      <Container5 />
      <BackgroundBorderShadow />
    </div>
  )
}

function Group() {
  return (
    <div
      className="absolute inset-[69.06%_37.74%_22.25%_44.22%]"
      data-name="Group"
    >
      <div className="absolute inset-[-90.77%_-42.24%_-90.77%_-42.23%]">
        <svg
          className="block size-full"
          fill="none"
          height="13.7068"
          preserveAspectRatio="none"
          viewBox="0 0 19.3019 13.7068"
          width="19.3019"
        >
          <g filter="url(#filter0_f_0_401)" id="Group" opacity="0.8">
            <path d={svgPaths.p120d9a80} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="13.7068"
              id="filter0_f_0_401"
              width="19.3019"
              x="-2.98023e-08"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_401"
                stdDeviation="2.20959"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group1() {
  return (
    <div
      className="absolute inset-[72.23%_38.78%_16.93%_46.32%]"
      data-name="Group"
    >
      <div className="absolute inset-[-145.65%_-102.23%_-145.65%_-102.24%]">
        <svg
          className="block size-full"
          fill="none"
          height="23.7451"
          preserveAspectRatio="none"
          viewBox="0 0 26.3217 23.7451"
          width="26.3217"
        >
          <g filter="url(#filter0_f_0_388)" id="Group">
            <path
              d={svgPaths.p3be41b00}
              fill="url(#paint0_linear_0_388)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="23.7451"
              id="filter0_f_0_388"
              width="26.3217"
              x="4.16549e-07"
              y="-2.75636e-08"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_388"
                stdDeviation="4.41918"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_388"
              x1="9.55805"
              x2="16.6505"
              y1="11.1176"
              y2="12.8056"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.421859" stopColor="#5693CB" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group2() {
  return (
    <div
      className="absolute inset-[78.81%_37.65%_13.29%_44.03%]"
      data-name="Group"
    >
      <div className="absolute inset-[-174.74%_-31.18%_0_-31.18%]">
        <svg
          className="block size-full"
          fill="none"
          height="12.1594"
          preserveAspectRatio="none"
          viewBox="0 0 17.2584 12.1594"
          width="17.2584"
        >
          <g filter="url(#filter0_d_0_394)" id="Group">
            <path
              d={svgPaths.p1eeb5300}
              fill="url(#paint0_linear_0_394)"
              id="Vector"
            />
            <path
              d={svgPaths.p3317f800}
              fill="url(#paint1_linear_0_394)"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1779d1f0}
              fill="#EEEFF8"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.1594"
              id="filter0_d_0_394"
              width="17.2584"
              x="5.96046e-08"
              y="-2.38419e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-4.41918" />
              <feGaussianBlur stdDeviation="1.65719" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_394"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_394"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_394"
              x1="6.52542"
              x2="12.2762"
              y1="10.5365"
              y2="12.361"
            >
              <stop stopColor="#6F7384" />
              <stop offset="1" stopColor="#C3C5CE" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_394"
              x1="6.80226"
              x2="4.52916"
              y1="8.69259"
              y2="9.91123"
            >
              <stop stopColor="#CCCDD7" />
              <stop offset="0.309893" stopColor="#F3F3F4" />
              <stop offset="0.523799" stopColor="#EAEAEC" />
              <stop offset="0.613641" stopColor="#C1C2CE" />
              <stop offset="1" stopColor="#ACADBF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group3() {
  return (
    <div
      className="absolute inset-[57.73%_25.9%_30.02%_64.07%]"
      data-name="Group"
    >
      <div className="absolute inset-[-64.42%_-76.02%]">
        <svg
          className="block size-full"
          fill="none"
          height="15.6984"
          preserveAspectRatio="none"
          viewBox="0 0 14.6514 15.6984"
          width="14.6514"
        >
          <g filter="url(#filter0_f_0_379)" id="Group" opacity="0.8">
            <path d={svgPaths.pf630d80} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.6984"
              id="filter0_f_0_379"
              width="14.6514"
              x="2.23517e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_379"
                stdDeviation="2.20959"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group4() {
  return (
    <div
      className="absolute inset-[71.04%_25.9%_20.67%_63.98%]"
      data-name="Group"
    >
      <div className="absolute inset-[-190.19%_-75.31%_0_-75.3%]">
        <svg
          className="block size-full"
          fill="none"
          height="13.4854"
          preserveAspectRatio="none"
          viewBox="0 0 14.7068 13.4854"
          width="14.7068"
        >
          <g filter="url(#filter0_d_0_206)" id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p130a4700}
              fill="#EEEFF8"
              fillRule="evenodd"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3e5ef100}
              fill="url(#paint0_linear_0_206)"
              fillRule="evenodd"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3e440000}
              fill="url(#paint1_linear_0_206)"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="13.4854"
              id="filter0_d_0_206"
              width="14.7068"
              x="2.23517e-08"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-4.41918" />
              <feGaussianBlur stdDeviation="2.20959" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_206"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_206"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_206"
              x1="5.41569"
              x2="5.3869"
              y1="10.8299"
              y2="13.4705"
            >
              <stop stopColor="#BEBFCC" />
              <stop offset="0.309893" stopColor="#DEDFE3" />
              <stop offset="0.523799" stopColor="#EDEDEF" />
              <stop offset="0.613641" stopColor="#BABBC9" />
              <stop offset="1" stopColor="#B6B7C6" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_206"
              x1="6.19192"
              x2="9.58243"
              y1="11.8627"
              y2="12.4566"
            >
              <stop stopColor="#6F7384" />
              <stop offset="1" stopColor="#C3C5CE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group5() {
  return (
    <div
      className="absolute inset-[63.92%_27.62%_21.59%_64.07%]"
      data-name="Group"
    >
      <div className="absolute inset-[-108.93%_-183.5%]">
        <svg
          className="block size-full"
          fill="none"
          height="25.7905"
          preserveAspectRatio="none"
          viewBox="0 0 22.4933 25.7905"
          width="22.4933"
        >
          <g filter="url(#filter0_f_0_381)" id="Group">
            <path
              d={svgPaths.p30ca0900}
              fill="url(#paint0_linear_0_381)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="25.7905"
              id="filter0_f_0_381"
              width="22.4933"
              x="-2.5332e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_381"
                stdDeviation="4.41918"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_381"
              x1="11.5511"
              x2="11.7817"
              y1="10.8299"
              y2="16.4513"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.582284" stopColor="#5693CB" stopOpacity="0.56" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group6() {
  return (
    <div
      className="absolute inset-[57.73%_57.69%_30.02%_32.29%]"
      data-name="Group"
    >
      <div className="absolute inset-[-64.42%_-76.02%]">
        <svg
          className="block size-full"
          fill="none"
          height="15.6984"
          preserveAspectRatio="none"
          viewBox="0 0 14.6515 15.6984"
          width="14.6515"
        >
          <g filter="url(#filter0_f_0_347)" id="Group" opacity="0.8">
            <path d={svgPaths.p3558170} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.6984"
              id="filter0_f_0_347"
              width="14.6515"
              x="5.96046e-08"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_347"
                stdDeviation="2.20959"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group7() {
  return (
    <div
      className="absolute inset-[71.04%_57.59%_20.67%_32.29%]"
      data-name="Group"
    >
      <div className="absolute inset-[-190.19%_-75.3%_0_-75.3%]">
        <svg
          className="block size-full"
          fill="none"
          height="13.4854"
          preserveAspectRatio="none"
          viewBox="0 0 14.7069 13.4854"
          width="14.7069"
        >
          <g filter="url(#filter0_d_0_383)" id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p363fce00}
              fill="url(#paint0_linear_0_383)"
              fillRule="evenodd"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2c6e5f00}
              fill="url(#paint1_linear_0_383)"
              fillRule="evenodd"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1aa22f00}
              fill="#EEEFF8"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="13.4854"
              id="filter0_d_0_383"
              width="14.7069"
              x="5.96046e-08"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-4.41918" />
              <feGaussianBlur stdDeviation="2.20959" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_383"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_383"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_383"
              x1="9.29116"
              x2="9.31995"
              y1="10.8299"
              y2="13.4705"
            >
              <stop stopColor="#BEBFCC" />
              <stop offset="0.309893" stopColor="#DEDFE3" />
              <stop offset="0.523799" stopColor="#EDEDEF" />
              <stop offset="0.613641" stopColor="#BABBC9" />
              <stop offset="1" stopColor="#B6B7C6" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_383"
              x1="8.51494"
              x2="5.12443"
              y1="11.8627"
              y2="12.4566"
            >
              <stop stopColor="#6F7384" />
              <stop offset="1" stopColor="#C3C5CE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group8() {
  return (
    <div
      className="absolute inset-[63.92%_57.69%_21.59%_34.01%]"
      data-name="Group"
    >
      <div className="absolute inset-[-108.93%_-183.49%_-108.93%_-183.51%]">
        <svg
          className="block size-full"
          fill="none"
          height="25.7905"
          preserveAspectRatio="none"
          viewBox="0 0 22.4932 25.7905"
          width="22.4932"
        >
          <g filter="url(#filter0_f_0_267)" id="Group">
            <path
              d={svgPaths.p2db8d080}
              fill="url(#paint0_linear_0_267)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="25.7905"
              id="filter0_f_0_267"
              width="22.4932"
              x="2.08616e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_267"
                stdDeviation="4.41918"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_267"
              x1="10.9421"
              x2="10.7114"
              y1="10.8299"
              y2="16.4513"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.582284" stopColor="#5693CB" stopOpacity="0.56" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group9() {
  return (
    <div
      className="absolute inset-[5.53%_26.73%_30.9%_32.86%]"
      data-name="Group"
    >
      <div className="absolute inset-[-2.48%_-3.77%]">
        <svg
          className="block size-full"
          fill="none"
          height="37.3675"
          preserveAspectRatio="none"
          viewBox="0 0 25.2083 37.3675"
          width="25.2083"
        >
          <g filter="url(#filter0_f_0_349)" id="Group">
            <path
              d={svgPaths.p3c290980}
              id="Vector"
              stroke="url(#paint0_linear_0_349)"
              strokeWidth="1.1048"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="37.3675"
              id="filter0_f_0_349"
              width="25.2083"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_349"
                stdDeviation="0.165719"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_349"
              x1="7.85951"
              x2="25.2227"
              y1="4.22624"
              y2="27.6713"
            >
              <stop stopColor="#DDDFE2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group11() {
  return (
    <div
      className="absolute inset-[6.37%_22.17%_31.64%_26.88%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.467px_0.99px] mask-size-[21.592px_32.742px] opacity-50"
      style={{ maskImage: `url("${imgGroup}")` }}
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="34.7194"
        preserveAspectRatio="none"
        viewBox="0 0 29.5552 34.7194"
        width="29.5552"
      >
        <g id="Group">
          <path
            d={svgPaths.p2dba1100}
            fill="url(#paint0_radial_0_320)"
            id="Vector"
          />
          <path
            d={svgPaths.p8209d70}
            fill="url(#paint1_linear_0_320)"
            id="Vector_2"
            opacity="0.5"
          />
          <path
            d={svgPaths.pe9d9080}
            fill="url(#paint2_linear_0_320)"
            id="Vector_3"
            opacity="0.5"
          />
          <path
            d={svgPaths.pf17c290}
            fill="url(#paint3_linear_0_320)"
            id="Vector_4"
            opacity="0.5"
          />
          <path
            d={svgPaths.p3ebd0c40}
            fill="url(#paint4_linear_0_320)"
            id="Vector_5"
          />
          <g filter="url(#filter0_i_0_320)" id="Group_2">
            <path
              d={svgPaths.p349d3f40}
              fill="#6052B4"
              fillOpacity="0.01"
              id="Vector_6"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="32.7417"
            id="filter0_i_0_320"
            width="21.5914"
            x="4.46631"
            y="0.989777"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7.4288" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_0_320"
            />
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(15.2624 17.3606) rotate(90) scale(16.6991 10.7958)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_0_320"
            r="1"
          >
            <stop stopColor="#F5F7FF" />
            <stop offset="1" stopColor="#B3B5C5" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_320"
            x1="15.2621"
            x2="15.2621"
            y1="0"
            y2="34.7194"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_0_320"
            x1="1.93429"
            x2="21.3089"
            y1="3.14106"
            y2="28.328"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_0_320"
            x1="27.6207"
            x2="8.24611"
            y1="3.14121"
            y2="28.328"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_0_320"
            x1="15.2635"
            x2="15.1479"
            y1="23.4768"
            y2="32.8997"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#D0DBFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MaskGroup1() {
  return (
    <div
      className="absolute contents inset-[8.13%_28.2%_33.4%_34.58%]"
      data-name="Mask group"
    >
      <Group11 />
    </div>
  )
}

function Group10() {
  return (
    <div
      className="absolute contents inset-[8.13%_28.2%_33.4%_34.58%]"
      data-name="Group"
    >
      <MaskGroup1 />
    </div>
  )
}

function Group12() {
  return (
    <div
      className="absolute inset-[24.41%_34.88%_49.4%_41.07%]"
      data-name="Group"
    >
      <div className="absolute inset-[-33.21%_-63.35%_-90.37%_-63.35%]">
        <svg
          className="block size-full"
          fill="none"
          height="32.8005"
          preserveAspectRatio="none"
          viewBox="0 0 31.6281 32.8005"
          width="31.6281"
        >
          <g filter="url(#filter0_d_0_302)" id="Group">
            <path
              d={svgPaths.p15a43e40}
              fill="url(#paint0_linear_0_302)"
              id="Vector"
            />
            <path
              d={svgPaths.p2e7ee000}
              fill="url(#paint1_linear_0_302)"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3b4c49b0}
              fill="url(#paint2_linear_0_302)"
              fillRule="evenodd"
              id="Vector_3"
            />
            <g filter="url(#filter1_d_0_302)" id="Group_2">
              <path
                d={svgPaths.p13ff3800}
                fill="url(#paint3_linear_0_302)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p26323100}
                fill="url(#paint4_linear_0_302)"
                id="Vector_5"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p11a6c800}
                fill="url(#paint5_linear_0_302)"
                fillRule="evenodd"
                id="Vector_6"
              />
              <path
                d={svgPaths.p1e117500}
                fill="url(#paint6_linear_0_302)"
                id="Vector_7"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p5097240}
                fill="url(#paint7_linear_0_302)"
                fillRule="evenodd"
                id="Vector_8"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p24d9da00}
                fill="url(#paint8_linear_0_302)"
                fillRule="evenodd"
                id="Vector_9"
              />
              <g filter="url(#filter2_f_0_302)" id="Group_3" opacity="0.4">
                <path
                  d={svgPaths.p3fb2ee00}
                  id="Vector_10"
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="1.31325"
                />
              </g>
              <g filter="url(#filter3_f_0_302)" id="Group_4" opacity="0.3">
                <path d={svgPaths.p31102e80} fill="#DEE4F3" id="Vector_11" />
              </g>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="32.8005"
              id="filter0_d_0_302"
              width="31.6281"
              x="-2.08616e-07"
              y="1.78814e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4.41918" />
              <feGaussianBlur stdDeviation="4.41918" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.504687 0 0 0 0 0.517969 0 0 0 0 0.6375 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_302"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_302"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="22.3604"
              id="filter1_d_0_302"
              width="20.3165"
              x="5.75451"
              y="2.44931"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1.96987" />
              <feGaussianBlur stdDeviation="1.96987" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.426562 0 0 0 0 0.464625 0 0 0 0 0.5625 0 0 0 0.71 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_302"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_302"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="17.1074"
              id="filter2_f_0_302"
              width="9.53358"
              x="13.9109"
              y="3.10593"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_302"
                stdDeviation="0.656624"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.887"
              id="filter3_f_0_302"
              width="1.37912"
              x="15.1252"
              y="5.3837"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_302"
                stdDeviation="0.328312"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_302"
              x1="8.83836"
              x2="22.7898"
              y1="18.9913"
              y2="18.9682"
            >
              <stop stopColor="#F7F7F8" />
              <stop offset="0.0201542" stopColor="#CDCFD7" />
              <stop offset="0.977524" stopColor="#C5C7CF" />
              <stop offset="1" stopColor="#E8EAEC" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_302"
              x1="9.74425"
              x2="21.5858"
              y1="8.8562"
              y2="15.0073"
            >
              <stop stopColor="#D7D9DF" />
              <stop offset="1" stopColor="#C8CAD3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_302"
              x1="9.23092"
              x2="23.6616"
              y1="7.26774"
              y2="14.4528"
            >
              <stop stopColor="#F8F9F9" />
              <stop offset="1" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_302"
              x1="10.6814"
              x2="9.60292"
              y1="16.8689"
              y2="7.85734"
            >
              <stop stopColor="#EDEEF1" />
              <stop offset="1" stopColor="#EDEEF1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_302"
              x1="10.9447"
              x2="15.7117"
              y1="17.3073"
              y2="17.9328"
            >
              <stop offset="0.0442192" stopColor="#C2C4CD" />
              <stop offset="0.65381" stopColor="#CFD0D7" />
              <stop offset="0.991391" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_302"
              x1="19.5325"
              x2="22.7133"
              y1="5.33901"
              y2="14.7625"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.371361" stopColor="#C2C4CD" />
              <stop offset="1" stopColor="#B1B3BD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_302"
              x1="20.6842"
              x2="15.9171"
              y1="17.3073"
              y2="17.9328"
            >
              <stop offset="0.0442192" stopColor="#BDBFC8" />
              <stop offset="0.65381" stopColor="#D4D6DF" />
              <stop offset="0.991391" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_302"
              x1="15.8148"
              x2="10.0887"
              y1="9.81057"
              y2="9.74054"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.0890549" stopColor="#C2C4CD" />
              <stop offset="0.46547" stopColor="#E5E7EB" />
              <stop offset="1" stopColor="#FAFAFA" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_302"
              x1="15.8144"
              x2="21.5405"
              y1="9.81057"
              y2="9.74054"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.214912" stopColor="#FAFAFA" />
              <stop offset="0.510885" stopColor="#E7E8EC" />
              <stop offset="0.901932" stopColor="#C2C4CD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group13() {
  return (
    <div
      className="absolute inset-[18.86%_8.62%_29.02%_50.23%]"
      data-name="Group"
    >
      <div className="absolute inset-[-19.6%_-47.34%_-35.18%_-33.89%]">
        <svg
          className="block size-full"
          fill="none"
          height="45.1742"
          preserveAspectRatio="none"
          viewBox="0 0 43.2526 45.1742"
          width="43.2526"
        >
          <g filter="url(#filter0_d_0_359)" id="Group">
            <path
              d={svgPaths.p3a9cf00}
              fill="url(#paint0_linear_0_359)"
              id="Vector"
            />
            <g filter="url(#filter1_d_0_359)" id="Group_2">
              <path
                clipRule="evenodd"
                d={svgPaths.p37abc970}
                fill="url(#paint1_linear_0_359)"
                fillRule="evenodd"
                id="Vector_2"
              />
            </g>
            <path
              d={svgPaths.p3de6a400}
              id="Vector_3"
              stroke="url(#paint2_linear_0_359)"
              strokeWidth="1.85773"
            />
            <path
              d={svgPaths.p37a5a7c0}
              fill="url(#paint3_linear_0_359)"
              id="Vector_4"
            />
            <g filter="url(#filter2_d_0_359)" id="Group_3">
              <path
                clipRule="evenodd"
                d={svgPaths.pc073b00}
                fill="url(#paint4_linear_0_359)"
                fillRule="evenodd"
                id="Vector_5"
              />
            </g>
            <path
              d={svgPaths.p11ce3700}
              id="Vector_6"
              stroke="url(#paint5_linear_0_359)"
              strokeWidth="1.85773"
            />
            <path
              d={svgPaths.p1af13c0}
              fill="url(#paint6_linear_0_359)"
              id="Vector_7"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3b4f0d80}
              fill="url(#paint7_linear_0_359)"
              fillRule="evenodd"
              id="Vector_8"
            />
            <path
              d={svgPaths.p2e8a1a00}
              id="Vector_9"
              stroke="url(#paint8_linear_0_359)"
              strokeWidth="1.85773"
            />
            <g filter="url(#filter3_d_0_359)" id="Group_4">
              <path
                d={svgPaths.pab96780}
                fill="url(#paint9_linear_0_359)"
                id="Vector_10"
              />
              <path d={svgPaths.p1c548a40} fill="#C4C4C4" id="Vector_11" />
              <path
                clipRule="evenodd"
                d={svgPaths.p4ab6000}
                fill="url(#paint10_linear_0_359)"
                fillRule="evenodd"
                id="Vector_12"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p32cb1671}
                fill="url(#paint11_linear_0_359)"
                fillRule="evenodd"
                id="Vector_13"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="41.6677"
              id="filter0_d_0_359"
              width="35.1191"
              x="2.95512"
              y="3.50649"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.13436" />
              <feGaussianBlur stdDeviation="2.56718" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_359"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_359"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="28.3422"
              id="filter1_d_0_359"
              width="23.7668"
              x="10.6656"
              y="0.765342"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-2.47698" />
              <feGaussianBlur stdDeviation="2.47698" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_359"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_359"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="39.2053"
              id="filter2_d_0_359"
              width="43.2526"
              x="0"
              y="-2.38419e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-2.56718" />
              <feGaussianBlur stdDeviation="6.19244" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_359"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_359"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="27.8412"
              id="filter3_d_0_359"
              width="22.4851"
              x="4.23872"
              y="13.4823"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.56718" />
              <feGaussianBlur stdDeviation="1.92538" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_359"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_359"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_359"
              x1="25.006"
              x2="22.5769"
              y1="15.537"
              y2="15.0419"
            >
              <stop offset="0.209488" stopColor="#AAAEBC" />
              <stop offset="0.583159" stopColor="#E0E1F1" />
              <stop offset="0.986946" stopColor="#868C9D" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_359"
              x1="26.7633"
              x2="22.5347"
              y1="4.1669"
              y2="18.9625"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_359"
              x1="26.9156"
              x2="19.4679"
              y1="4.21271"
              y2="23.2493"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.21882" stopColor="#F8F8F9" stopOpacity="0.67" />
              <stop offset="0.45675" stopColor="white" stopOpacity="0.46" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_359"
              x1="24.9847"
              x2="20.7321"
              y1="20.1674"
              y2="19.1432"
            >
              <stop offset="0.209488" stopColor="#9196AA" />
              <stop offset="0.583159" stopColor="#C9C9DC" />
              <stop offset="0.986946" stopColor="#797D87" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_359"
              x1="23.3389"
              x2="25.1343"
              y1="18.0364"
              y2="26.3276"
            >
              <stop stopColor="#EFEFEF" />
              <stop offset="0.411026" stopColor="#DEDFE6" />
              <stop offset="0.58979" stopColor="#D1D2D9" />
              <stop offset="1" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_359"
              x1="30.0871"
              x2="21.3043"
              y1="15.7321"
              y2="22.9617"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.86" />
              <stop offset="0.319253" stopColor="#F8F8F9" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0.88" />
              <stop offset="0.867925" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_359"
              x1="20.4526"
              x2="17.5372"
              y1="25.2553"
              y2="24.0196"
            >
              <stop offset="0.209488" stopColor="#717995" />
              <stop offset="0.583159" stopColor="#A4A5BB" />
              <stop offset="0.986946" stopColor="#797D87" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_359"
              x1="18.5092"
              x2="19.7516"
              y1="24.139"
              y2="34.5351"
            >
              <stop offset="0.0306468" stopColor="#DBDCE7" />
              <stop offset="0.274204" stopColor="#CBCCD7" />
              <stop offset="0.675444" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_359"
              x1="19.9486"
              x2="14.9459"
              y1="24.5652"
              y2="34.7321"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.78" />
              <stop offset="0.319253" stopColor="#F8F8F9" stopOpacity="0" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0" />
              <stop offset="0.867925" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint9_linear_0_359"
              x1="15.5725"
              x2="15.5725"
              y1="14.7658"
              y2="34.9055"
            >
              <stop stopColor="#C4C4C4" />
              <stop offset="1" stopColor="#63687B" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint10_linear_0_359"
              x1="16.8907"
              x2="13.7348"
              y1="24.193"
              y2="27.1537"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.445395" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint11_linear_0_359"
              x1="15.9898"
              x2="16.2771"
              y1="24.3641"
              y2="27.9924"
            >
              <stop offset="0.0495744" stopColor="#C4C4C4" />
              <stop offset="0.454268" stopColor="#EDEDED" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group14() {
  return (
    <div
      className="absolute inset-[18.86%_43.85%_29.02%_15%]"
      data-name="Group"
    >
      <div className="absolute inset-[-19.45%_-33.75%_-35.08%_-47.19%]">
        <svg
          className="block size-full"
          fill="none"
          height="45.1015"
          preserveAspectRatio="none"
          viewBox="0 0 43.1809 45.1015"
          width="43.1809"
        >
          <g filter="url(#filter0_d_0_329)" id="Group">
            <path
              d={svgPaths.p25a0f280}
              fill="url(#paint0_linear_0_329)"
              id="Vector"
            />
            <g filter="url(#filter1_d_0_329)" id="Group_2">
              <path
                clipRule="evenodd"
                d={svgPaths.p2f75c00}
                fill="url(#paint1_linear_0_329)"
                fillRule="evenodd"
                id="Vector_2"
              />
            </g>
            <path
              d={svgPaths.pe709000}
              id="Vector_3"
              stroke="url(#paint2_linear_0_329)"
              strokeWidth="1.85237"
            />
            <path
              d={svgPaths.ped77200}
              fill="url(#paint3_linear_0_329)"
              id="Vector_4"
            />
            <g filter="url(#filter2_d_0_329)" id="Group_3">
              <path
                clipRule="evenodd"
                d={svgPaths.p1bbf6480}
                fill="url(#paint4_linear_0_329)"
                fillRule="evenodd"
                id="Vector_5"
              />
            </g>
            <path
              d={svgPaths.pa2c0200}
              id="Vector_6"
              stroke="url(#paint5_linear_0_329)"
              strokeWidth="1.85237"
            />
            <path
              d={svgPaths.p2833c600}
              fill="url(#paint6_linear_0_329)"
              id="Vector_7"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p85d1780}
              fill="url(#paint7_linear_0_329)"
              fillRule="evenodd"
              id="Vector_8"
            />
            <path
              d={svgPaths.p107bb500}
              id="Vector_9"
              stroke="url(#paint8_linear_0_329)"
              strokeWidth="1.85237"
            />
            <g filter="url(#filter3_d_0_329)" id="Group_4">
              <path
                d={svgPaths.p21202100}
                fill="url(#paint9_linear_0_329)"
                id="Vector_10"
              />
              <path d={svgPaths.p2a4779c0} fill="#C4C4C4" id="Vector_11" />
              <path
                clipRule="evenodd"
                d={svgPaths.p90a4a00}
                fill="url(#paint10_linear_0_329)"
                fillRule="evenodd"
                id="Vector_12"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p7093700}
                fill="url(#paint11_linear_0_329)"
                fillRule="evenodd"
                id="Vector_13"
              />
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="41.6313"
              id="filter0_d_0_329"
              width="35.0866"
              x="5.15924"
              y="3.47018"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="5.11953" />
              <feGaussianBlur stdDeviation="2.55977" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_329"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_329"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="28.3135"
              id="filter1_d_0_329"
              width="23.7382"
              x="3.85193"
              y="0.736981"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-2.46983" />
              <feGaussianBlur stdDeviation="2.46983" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_329"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_329"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="39.134"
              id="filter2_d_0_329"
              width="43.1809"
              x="3.57628e-07"
              y="4.76837e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-2.55977" />
              <feGaussianBlur stdDeviation="6.17457" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_329"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_329"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="27.8189"
              id="filter3_d_0_329"
              width="22.4623"
              x="16.5037"
              y="13.443"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="2.55977" />
              <feGaussianBlur stdDeviation="1.91983" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_329"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_329"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_329"
              x1="18.2099"
              x2="20.6389"
              y1="15.4941"
              y2="14.9989"
            >
              <stop offset="0.209488" stopColor="#AAAEBC" />
              <stop offset="0.583159" stopColor="#E0E1F1" />
              <stop offset="0.986946" stopColor="#868C9D" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_329"
              x1="16.4535"
              x2="20.682"
              y1="4.12404"
              y2="18.9198"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_329"
              x1="16.3"
              x2="23.7477"
              y1="4.1697"
              y2="23.2062"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.21882" stopColor="#F8F8F9" stopOpacity="0.67" />
              <stop offset="0.45675" stopColor="white" stopOpacity="0.46" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_329"
              x1="18.2313"
              x2="22.4838"
              y1="20.1245"
              y2="19.1004"
            >
              <stop offset="0.209488" stopColor="#9196AA" />
              <stop offset="0.583159" stopColor="#C9C9DC" />
              <stop offset="0.986946" stopColor="#797D87" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_329"
              x1="19.878"
              x2="18.0823"
              y1="17.9934"
              y2="26.2844"
            >
              <stop stopColor="#EFEFEF" />
              <stop offset="0.411026" stopColor="#DEDFE6" />
              <stop offset="0.58979" stopColor="#D1D2D9" />
              <stop offset="1" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_329"
              x1="13.1294"
              x2="21.9123"
              y1="15.6893"
              y2="22.9189"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.86" />
              <stop offset="0.319253" stopColor="#F8F8F9" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0.88" />
              <stop offset="0.867925" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_329"
              x1="22.7635"
              x2="25.6789"
              y1="25.2123"
              y2="23.9767"
            >
              <stop offset="0.209488" stopColor="#717995" />
              <stop offset="0.583159" stopColor="#A4A5BB" />
              <stop offset="0.986946" stopColor="#797D87" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_329"
              x1="24.7071"
              x2="23.4647"
              y1="24.0961"
              y2="34.4921"
            >
              <stop offset="0.0306468" stopColor="#DBDCE7" />
              <stop offset="0.274204" stopColor="#CBCCD7" />
              <stop offset="0.675444" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_329"
              x1="23.2671"
              x2="28.2697"
              y1="24.5223"
              y2="34.6892"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.78" />
              <stop offset="0.319253" stopColor="#F8F8F9" stopOpacity="0" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0" />
              <stop offset="0.867925" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint9_linear_0_329"
              x1="27.644"
              x2="27.644"
              y1="14.7229"
              y2="34.8624"
            >
              <stop stopColor="#C4C4C4" />
              <stop offset="1" stopColor="#63687B" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint10_linear_0_329"
              x1="26.325"
              x2="29.4809"
              y1="24.15"
              y2="27.1107"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.445395" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint11_linear_0_329"
              x1="27.2252"
              x2="26.9379"
              y1="24.3212"
              y2="27.9493"
            >
              <stop offset="0.0495744" stopColor="#C4C4C4" />
              <stop offset="0.454268" stopColor="#EDEDED" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group15() {
  return (
    <div
      className="absolute inset-[57.86%_42.32%_26.86%_48.51%]"
      data-name="Group"
    >
      <div className="absolute inset-[-51.65%_-83.14%_-51.65%_-83.15%]">
        <svg
          className="block size-full"
          fill="none"
          height="17.3949"
          preserveAspectRatio="none"
          viewBox="0 0 14.1532 17.3949"
          width="14.1532"
        >
          <g filter="url(#filter0_f_0_399)" id="Group">
            <path
              d={svgPaths.p115ebf00}
              fill="url(#paint0_linear_0_399)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="17.3949"
              id="filter0_f_0_399"
              width="14.1532"
              x="1.49012e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_399"
                stdDeviation="2.20959"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_399"
              x1="7.07663"
              x2="7.07663"
              y1="13.0489"
              y2="7.19831"
            >
              <stop stopColor="#585B77" stopOpacity="0.75" />
              <stop offset="1" stopColor="#525787" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group16() {
  return (
    <div
      className="absolute inset-[61.34%_41.95%_23.63%_48.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.066px_1.336px] mask-size-[5.541px_6.793px]"
      style={{ maskImage: `url("${imgGroup1}")` }}
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="8.41882"
        preserveAspectRatio="none"
        viewBox="0 0 5.70684 8.41882"
        width="5.70684"
      >
        <g id="Group">
          <path
            d={svgPaths.p51dcaf0}
            fill="url(#paint0_linear_0_137)"
            id="Vector"
          />
          <path
            d={svgPaths.p32de1580}
            fill="url(#paint1_linear_0_137)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_0_137"
            x1="2.11544"
            x2="6.64344"
            y1="9.33866"
            y2="7.85931"
          >
            <stop stopColor="#9A9CA5" />
            <stop offset="0.259135" stopColor="#C4C6CF" />
            <stop offset="0.878536" stopColor="#EDEFF8" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_137"
            x1="2.83557"
            x2="5.46947"
            y1="1.88871"
            y2="9.01291"
          >
            <stop stopColor="white" />
            <stop offset="0.523539" stopColor="#F7F7F7" />
            <stop offset="0.897249" stopColor="#DADBE0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MaskGroup2() {
  return (
    <div
      className="absolute contents inset-[63.73%_42.12%_24.14%_48.32%]"
      data-name="Mask group"
    >
      <Group16 />
    </div>
  )
}

function Group18() {
  return (
    <div
      className="absolute contents inset-[32.11%_43.69%_60.14%_49.89%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[32.11%_43.69%_60.14%_49.89%] mix-blend-hard-light opacity-30"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.3402"
          preserveAspectRatio="none"
          viewBox="0 0 3.72254 4.3402"
          width="3.72254"
        >
          <path
            d={svgPaths.p1fadb000}
            fill="url(#paint0_linear_0_233)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_233"
              x1="0.938217"
              x2="3.99671"
              y1="2.70225"
              y2="1.56499"
            >
              <stop offset="0.153262" stopColor="#5DB9ED" />
              <stop offset="1" stopColor="#579BEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group19() {
  return (
    <div
      className="absolute contents inset-[32.13%_43.67%_60.15%_49.87%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[32.13%_43.67%_60.15%_49.87%] mix-blend-hard-light opacity-60"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.32636"
          preserveAspectRatio="none"
          viewBox="0 0 3.74955 4.32636"
          width="3.74955"
        >
          <path
            d={svgPaths.p346a3300}
            fill="url(#paint0_linear_0_287)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_287"
              x1="0.127135"
              x2="3.81271"
              y1="1.53226"
              y2="2.64912"
            >
              <stop stopColor="#2A58C6" />
              <stop offset="1" stopColor="#4FF4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group20() {
  return (
    <div
      className="absolute inset-[34.46%_48.02%_64.68%_51.44%]"
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="0.481906"
        preserveAspectRatio="none"
        viewBox="0 0 0.313545 0.481906"
        width="0.313545"
      >
        <g id="Group" opacity="0.8">
          <path d={svgPaths.p9314a00} fill="#F1F8FA" id="Vector" />
        </g>
      </svg>
    </div>
  )
}

function Group17() {
  return (
    <div
      className="absolute contents inset-[28.62%_42.27%_56.63%_48.46%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[28.62%_42.28%_56.63%_48.46%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="8.26143"
          preserveAspectRatio="none"
          viewBox="0 0 5.36998 8.26143"
          width="5.36998"
        >
          <path
            d={svgPaths.p28113600}
            fill="url(#paint0_linear_0_232)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_232"
              x1="0.573892"
              x2="5.78694"
              y1="1.30185"
              y2="6.30764"
            >
              <stop stopColor="#466CC6" />
              <stop offset="1" stopColor="#75D2F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[28.65%_42.27%_63.97%_53.1%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13086"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13086"
          width="2.68699"
        >
          <path
            d={svgPaths.p2931d100}
            fill="url(#paint0_linear_0_212)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_212"
              x1="-0.142122"
              x2="2.07273"
              y1="1.29085"
              y2="2.06801"
            >
              <stop offset="0.153262" stopColor="#2251BD" />
              <stop offset="1" stopColor="#3383E8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[32.31%_42.27%_60.31%_53.1%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13087"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13087"
          width="2.68699"
        >
          <path
            d={svgPaths.pad29100}
            fill="url(#paint0_linear_0_276)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_276"
              x1="1.60186"
              x2="2.94264"
              y1="-0.430182"
              y2="3.50776"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="0.721384" stopColor="#59A5EC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[36%_42.27%_56.63%_53.1%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13076"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13076"
          width="2.68699"
        >
          <path
            d={svgPaths.p5068c00}
            fill="url(#paint0_linear_0_387)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_387"
              x1="0.619814"
              x2="2.87989"
              y1="1.93842"
              y2="2.03341"
            >
              <stop offset="0.153262" stopColor="#5DB9ED" />
              <stop offset="1" stopColor="#579BEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[28.65%_46.9%_63.97%_48.46%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13086"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13086"
          width="2.68699"
        >
          <path
            d={svgPaths.p23cc3c80}
            fill="url(#paint0_linear_0_288)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_288"
              x1="0.426367"
              x2="3.09425"
              y1="2.96036"
              y2="2.11157"
            >
              <stop offset="0.153262" stopColor="#3A79F8" />
              <stop offset="1" stopColor="#3C57F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[32.31%_46.9%_60.31%_48.46%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13087"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13087"
          width="2.68699"
        >
          <path
            d={svgPaths.p30bb8fc0}
            fill="url(#paint0_linear_0_142)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_142"
              x1="1.3435"
              x2="-0.0488778"
              y1="3.64676e-08"
              y2="4.22849"
            >
              <stop offset="0.03125" stopColor="#2E35AC" />
              <stop offset="0.901042" stopColor="#3061C2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[36%_46.9%_56.63%_48.46%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.13076"
          preserveAspectRatio="none"
          viewBox="0 0 2.68699 4.13076"
          width="2.68699"
        >
          <path
            d={svgPaths.p9fa7a80}
            fill="url(#paint0_linear_0_282)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_282"
              x1="1.3435"
              x2="3.26422"
              y1="0.361557"
              y2="3.0759"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="0.826605" stopColor="#3380E5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group18 />
      <Group19 />
      <div
        className="absolute inset-[32.68%_44.82%_60.68%_51.01%] mix-blend-hard-light"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.71769"
          preserveAspectRatio="none"
          viewBox="0 0 2.41651 3.71769"
          width="2.41651"
        >
          <path
            d={svgPaths.p8421180}
            fill="url(#paint0_linear_0_162)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_162"
              x1="0.385586"
              x2="2.69399"
              y1="0.585964"
              y2="2.50557"
            >
              <stop stopColor="#166CFD" />
              <stop offset="1" stopColor="#89DFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group20 />
    </div>
  )
}

function Group75() {
  return (
    <div className="absolute h-[56px] left-[6.69px] overflow-clip top-[15.85px] w-[58px]">
      <div
        className="absolute inset-[67.59%_37.93%_12.76%_44.83%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="11"
          preserveAspectRatio="none"
          viewBox="0 0 10 11"
          width="10"
        >
          <path
            d={svgPaths.p2eb6432}
            fill="url(#paint0_radial_0_328)"
            id="Vector"
          />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="matrix(3.28125 5.88737 -4.46825 5.50898 2.2396 2.86623)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_0_328"
              r="1"
            >
              <stop offset="0.432002" stopColor="#023580" />
              <stop offset="1" stopColor="#0D3D78" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[69.38%_43.1%_12.76%_44.83%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="10"
          preserveAspectRatio="none"
          viewBox="0 0 7 10"
          width="7"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p83fcc00}
            fill="url(#paint0_linear_0_412)"
            fillRule="evenodd"
            id="Vector"
            opacity="0.8"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_412"
              x1="3.45627"
              x2="-1.17507"
              y1="1.61775"
              y2="4.78486"
            >
              <stop offset="0.213533" stopColor="#042861" />
              <stop offset="0.574194" stopColor="#195294" />
              <stop offset="1" stopColor="#063988" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <div
        className="absolute inset-[56.88%_25.86%_21.69%_63.79%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="12"
          preserveAspectRatio="none"
          viewBox="0 0 6 12"
          width="6"
        >
          <path d={svgPaths.p1fc88740} fill="#063988" id="Vector" />
        </svg>
      </div>
      <Group3 />
      <Group4 />
      <Group5 />
      <div
        className="absolute inset-[56.88%_56.9%_21.69%_32.76%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="12"
          preserveAspectRatio="none"
          viewBox="0 0 6 12"
          width="6"
        >
          <path d={svgPaths.p2e11400} fill="#063988" id="Vector" />
        </svg>
      </div>
      <Group6 />
      <Group7 />
      <Group8 />
      <div
        className="absolute inset-[-0.26%_22.41%_25.26%_29.31%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="42"
          preserveAspectRatio="none"
          viewBox="0 0 28 42"
          width="28"
        >
          <path
            d={svgPaths.p3fa55480}
            fill="url(#paint0_linear_0_351)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_351"
              x1="8.11999"
              x2="27.051"
              y1="4.79772"
              y2="33.4611"
            >
              <stop stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#C2C4CD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[5.09%_27.59%_30.62%_32.76%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="36"
          preserveAspectRatio="none"
          viewBox="0 0 23 36"
          width="23"
        >
          <path
            d={svgPaths.p2f597180}
            fill="url(#paint0_linear_0_378)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_378"
              x1="5.70389"
              x2="22.2487"
              y1="4.34965"
              y2="26.5842"
            >
              <stop stopColor="#CDCFD6" />
              <stop offset="1" stopColor="#EFEFF1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group9 />
      <Group10 />
      <Group12 />
      <Group13 />
      <Group14 />
      <Group15 />
      <MaskGroup2 />
      <Group17 />
    </div>
  )
}

function Container2() {
  return (
    <div
      className="h-[123.975px] relative shrink-0 w-[65.25px]"
      data-name="Container"
    >
      <Container3 />
      <Container4 />
      <Group75 />
    </div>
  )
}

function Link() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <Container2 />
    </div>
  )
}

function Container10() {
  return (
    <div className="absolute h-0 left-0 right-0 top-0" data-name="Container">
      <div
        className="absolute bg-gradient-to-r from-[#18181b] h-[163.125px] left-0 to-[#18181b] top-[80.75px] via-1/2 via-[#27272a] w-[65.25px]"
        data-name="Gradient"
      />
      <div
        className="absolute h-[16.313px] left-0 rounded-[8155.435px] top-[73.41px] w-[65.25px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 65.25 16.313' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.2625 0 0 0.81563 32.625 8.1563)'><stop stop-color='rgba(49,49,49,1)' offset='0.16'/><stop stop-color='rgba(74,74,74,1)' offset='0.55'/><stop stop-color='rgba(66,66,69,1)' offset='0.72'/><stop stop-color='rgba(39,40,42,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
        data-name="Gradient"
      />
    </div>
  )
}

function Container12() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Container" />
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip py-[3.263px] relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-status-warning text-[9.788px] text-center whitespace-nowrap">
        <p className="leading-[9.788px]">Lorem</p>
      </div>
    </div>
  )
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3.263px] relative size-full">
          <Container14 />
        </div>
      </div>
    </div>
  )
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bfaa80] text-[9.788px] text-center whitespace-nowrap">
          <p className="leading-[13.05px]">3702</p>
        </div>
      </div>
    </div>
  )
}

function BackgroundBorderShadow1() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-surface-hover content-stretch drop-shadow-[0px_1.631px_2.447px_rgba(0,0,0,0.12),0px_3.263px_4.894px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center left-1/2 px-[0.816px] py-[7.178px] rounded-[13.05px] top-[93.8px] w-[78.626px]"
      data-name="Background+Border+Shadow"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <Container13 />
      <Container15 />
    </div>
  )
}

function Container11() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0"
      data-name="Container"
    >
      <Container12 />
      <BackgroundBorderShadow1 />
    </div>
  )
}

function Group23() {
  return (
    <div
      className="absolute inset-[80.07%_25.48%_12.73%_62.76%]"
      data-name="Group"
    >
      <div className="absolute inset-[-29.93%_-8.85%_0_-8.85%]">
        <svg
          className="block size-full"
          fill="none"
          height="5.24005"
          preserveAspectRatio="none"
          viewBox="0 0 8.02817 5.24005"
          width="8.02817"
        >
          <g filter="url(#filter0_d_0_223)" id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p2b4f6780}
              fill="#F8EDC0"
              fillRule="evenodd"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1619eff0}
              fill="url(#paint0_linear_0_223)"
              fillRule="evenodd"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2ab65d00}
              fill="url(#paint1_linear_0_223)"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="5.24005"
              id="filter0_d_0_223"
              width="8.02817"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-0.603556" />
              <feGaussianBlur stdDeviation="0.301778" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_223"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_223"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_223"
              x1="1.76185"
              x2="1.7432"
              y1="2.93548"
              y2="5.22724"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_223"
              x1="2.98454"
              x2="4.00616"
              y1="3.51168"
              y2="5.24474"
            >
              <stop stopColor="#463421" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group24() {
  return (
    <div
      className="absolute inset-[73.9%_27.48%_13.52%_62.86%]"
      data-name="Group"
    >
      <div className="absolute inset-[-17.14%_-21.56%]">
        <svg
          className="block size-full"
          fill="none"
          height="9.45572"
          preserveAspectRatio="none"
          viewBox="0 0 8.01267 9.45572"
          width="8.01267"
        >
          <g filter="url(#filter0_f_0_237)" id="Group">
            <path
              d={svgPaths.p2dc1b500}
              fill="url(#paint0_linear_0_237)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="9.45572"
              id="filter0_f_0_237"
              width="8.01267"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_237"
                stdDeviation="0.603556"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_237"
              x1="4.36026"
              x2="4.50983"
              y1="2.93548"
              y2="7.81754"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.582284" stopColor="#5693CB" stopOpacity="0.56" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group25() {
  return (
    <div
      className="absolute inset-[68.53%_25.49%_20.84%_62.86%]"
      data-name="Group"
    >
      <div className="absolute inset-[-10.14%_-8.93%]">
        <svg
          className="block size-full"
          fill="none"
          height="7.16042"
          preserveAspectRatio="none"
          viewBox="0 0 7.96386 7.16042"
          width="7.96386"
        >
          <g filter="url(#filter0_f_0_118)" id="Group" opacity="0.8">
            <path d={svgPaths.p2a562800} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="7.16042"
              id="filter0_f_0_118"
              width="7.96386"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_118"
                stdDeviation="0.301778"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group26() {
  return (
    <div
      className="absolute inset-[80.07%_62.33%_12.73%_25.91%]"
      data-name="Group"
    >
      <div className="absolute inset-[-29.93%_-8.85%_0_-8.85%]">
        <svg
          className="block size-full"
          fill="none"
          height="5.24005"
          preserveAspectRatio="none"
          viewBox="0 0 8.02817 5.24005"
          width="8.02817"
        >
          <g filter="url(#filter0_d_0_269)" id="Group">
            <path
              clipRule="evenodd"
              d={svgPaths.p8b01580}
              fill="#F8EDC0"
              fillRule="evenodd"
              id="Vector"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p33730800}
              fill="url(#paint0_linear_0_269)"
              fillRule="evenodd"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1dd68500}
              fill="url(#paint1_linear_0_269)"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="5.24005"
              id="filter0_d_0_269"
              width="8.02817"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-0.603556" />
              <feGaussianBlur stdDeviation="0.301778" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_269"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_269"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_269"
              x1="6.26632"
              x2="6.28497"
              y1="2.93548"
              y2="5.22724"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_269"
              x1="5.04371"
              x2="4.02209"
              y1="3.51168"
              y2="5.24474"
            >
              <stop stopColor="#463421" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group27() {
  return (
    <div
      className="absolute inset-[73.9%_62.44%_13.52%_27.91%]"
      data-name="Group"
    >
      <div className="absolute inset-[-17.14%_-21.56%]">
        <svg
          className="block size-full"
          fill="none"
          height="9.45572"
          preserveAspectRatio="none"
          viewBox="0 0 8.01267 9.45572"
          width="8.01267"
        >
          <g filter="url(#filter0_f_0_228)" id="Group">
            <path
              d={svgPaths.p3388f000}
              fill="url(#paint0_linear_0_228)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="9.45572"
              id="filter0_f_0_228"
              width="8.01267"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_228"
                stdDeviation="0.603556"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_228"
              x1="3.65241"
              x2="3.50284"
              y1="2.93548"
              y2="7.81754"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.582284" stopColor="#5693CB" stopOpacity="0.56" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group28() {
  return (
    <div
      className="absolute inset-[68.53%_62.43%_20.84%_25.92%]"
      data-name="Group"
    >
      <div className="absolute inset-[-10.14%_-8.93%]">
        <svg
          className="block size-full"
          fill="none"
          height="7.16042"
          preserveAspectRatio="none"
          viewBox="0 0 7.96377 7.16042"
          width="7.96377"
        >
          <g filter="url(#filter0_f_0_356)" id="Group" opacity="0.8">
            <path d={svgPaths.p1c806980} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="7.16042"
              id="filter0_f_0_356"
              width="7.96377"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_356"
                stdDeviation="0.301778"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group29() {
  return (
    <div
      className="absolute inset-[78.36%_39.25%_14.1%_39.78%]"
      data-name="Group"
    >
      <div className="absolute inset-[-14.29%_-4.96%]">
        <svg
          className="block size-full"
          fill="none"
          height="5.43206"
          preserveAspectRatio="none"
          viewBox="0 0 13.3692 5.43206"
          width="13.3692"
        >
          <g filter="url(#filter0_f_0_219)" id="Group" opacity="0.8">
            <path d={svgPaths.p26ae3700} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="5.43206"
              id="filter0_f_0_219"
              width="13.3692"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_219"
                stdDeviation="0.301778"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group30() {
  return (
    <div
      className="absolute inset-[81.11%_40.45%_9.49%_42.22%]"
      data-name="Group"
    >
      <div className="absolute inset-[-22.92%_-12.01%]">
        <svg
          className="block size-full"
          fill="none"
          height="7.68056"
          preserveAspectRatio="none"
          viewBox="0 0 12.4626 7.68056"
          width="12.4626"
        >
          <g filter="url(#filter0_f_0_151)" id="Group">
            <path
              d={svgPaths.p2971e500}
              fill="url(#paint0_linear_0_151)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="7.68056"
              id="filter0_f_0_151"
              width="12.4626"
              x="2.60769e-08"
              y="5.81055e-09"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_151"
                stdDeviation="0.603556"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_151"
              x1="2.04353"
              x2="9.95096"
              y1="3.18515"
              y2="5.70552"
            >
              <stop stopColor="#4680B6" stopOpacity="0.1" />
              <stop offset="0.421859" stopColor="#5693CB" />
              <stop offset="1" stopColor="#4680B6" stopOpacity="0.45" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group31() {
  return (
    <div
      className="absolute inset-[86.81%_39.14%_6.33%_39.56%]"
      data-name="Group"
    >
      <div className="absolute inset-[-27.5%_-3.66%_0_-3.66%]">
        <svg
          className="block size-full"
          fill="none"
          height="4.89706"
          preserveAspectRatio="none"
          viewBox="0 0 13.2604 4.89706"
          width="13.2604"
        >
          <g filter="url(#filter0_d_0_215)" id="Group">
            <path
              d={svgPaths.p37a6e300}
              fill="url(#paint0_linear_0_215)"
              id="Vector"
            />
            <path
              d={svgPaths.p6261080}
              fill="url(#paint1_linear_0_215)"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p206e0100}
              fill="#F8EDC0"
              fillRule="evenodd"
              id="Vector_3"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="4.89706"
              id="filter0_d_0_215"
              width="13.2604"
              x="0"
              y="-2.98023e-08"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-0.603556" />
              <feGaussianBlur stdDeviation="0.226333" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_215"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_215"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_215"
              x1="4.18488"
              x2="10.4169"
              y1="3.48874"
              y2="6.13669"
            >
              <stop stopColor="#584129" />
              <stop offset="1" stopColor="#886C4E" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_215"
              x1="4.5067"
              x2="2.2624"
              y1="1.8885"
              y2="3.49995"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group32() {
  return (
    <div
      className="absolute inset-[78.36%_39.25%_18.56%_39.78%]"
      data-name="Group"
    >
      <div className="absolute inset-[-34.92%_-4.96%]">
        <svg
          className="block size-full"
          fill="none"
          height="2.93547"
          preserveAspectRatio="none"
          viewBox="0 0 13.3692 2.93547"
          width="13.3692"
        >
          <g filter="url(#filter0_f_0_204)" id="Group" opacity="0.8">
            <path d={svgPaths.pce19400} fill="#0E3060" id="Vector" />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="2.93547"
              id="filter0_f_0_204"
              width="13.3692"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_204"
                stdDeviation="0.301778"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group33() {
  return (
    <div
      className="absolute inset-[13.99%_65.27%_81.58%_28.83%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-4.42%_-18.24%_-4.41%]">
        <svg
          className="block size-full"
          fill="none"
          height="2.93433"
          preserveAspectRatio="none"
          viewBox="0 0 3.72 2.93433"
          width="3.72"
        >
          <g filter="url(#filter0_d_0_130)" id="Group">
            <path
              d={svgPaths.p39413780}
              fill="url(#paint0_linear_0_130)"
              id="Vector"
            />
            <path
              d={svgPaths.p1241c980}
              fill="url(#paint1_linear_0_130)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="2.93433"
              id="filter0_d_0_130"
              width="3.72"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_130"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_130"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_130"
              x1="3.18631"
              x2="0.780123"
              y1="-0.284913"
              y2="2.9483"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_130"
              x1="2.53912"
              x2="2.62817"
              y1="0.013804"
              y2="3.11772"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group34() {
  return (
    <div
      className="absolute inset-[25.44%_70.36%_71.93%_24%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-4.61%_-30.71%_-4.61%]">
        <svg
          className="block size-full"
          fill="none"
          height="1.92707"
          preserveAspectRatio="none"
          viewBox="0 0 3.57426 1.92707"
          width="3.57426"
        >
          <g filter="url(#filter0_d_0_125)" id="Group">
            <path
              d={svgPaths.pd394d80}
              fill="url(#paint0_linear_0_125)"
              id="Vector"
            />
            <path
              d={svgPaths.p2db98940}
              fill="url(#paint1_linear_0_125)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1.92707"
              id="filter0_d_0_125"
              width="3.57426"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_125"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_125"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_125"
              x1="2.66681"
              x2="0.796909"
              y1="-0.515036"
              y2="1.99756"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_125"
              x1="2.6973"
              x2="0.426235"
              y1="-0.55287"
              y2="1.75409"
            >
              <stop stopColor="#FFDA92" />
              <stop offset="1" stopColor="#DCBA84" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group35() {
  return (
    <div
      className="absolute inset-[26%_77.99%_65.41%_18.06%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-19.75%_-9.42%_0]">
        <svg
          className="block size-full"
          fill="none"
          height="5.25789"
          preserveAspectRatio="none"
          viewBox="0 0 2.746 5.25789"
          width="2.746"
        >
          <g filter="url(#filter0_d_0_292)" id="Group">
            <path
              d={svgPaths.p13682130}
              fill="url(#paint0_linear_0_292)"
              id="Vector"
            />
            <path
              d={svgPaths.p30ffff00}
              fill="url(#paint1_linear_0_292)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="5.25789"
              id="filter0_d_0_292"
              width="2.74599"
              x="4.06679e-07"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.301778" dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_292"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_292"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_292"
              x1="0.68579"
              x2="1.93062"
              y1="0.508073"
              y2="4.1408"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#BC8647" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_292"
              x1="1.84242"
              x2="0.360036"
              y1="1.41188"
              y2="3.40385"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group36() {
  return (
    <div
      className="absolute inset-[35.32%_77.35%_57.62%_20.65%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-12.98%_-11.45%_-13.01%]">
        <svg
          className="block size-full"
          fill="none"
          height="4.40465"
          preserveAspectRatio="none"
          viewBox="0 0 1.46096 4.40465"
          width="1.46096"
        >
          <g filter="url(#filter0_d_0_121)" id="Group">
            <path
              d={svgPaths.p39d28f80}
              fill="url(#paint0_linear_0_121)"
              id="Vector"
            />
            <path
              d={svgPaths.p297e0d80}
              fill="url(#paint1_linear_0_121)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="4.40465"
              id="filter0_d_0_121"
              width="1.46096"
              x="-5.25924e-09"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_121"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_121"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_121"
              x1="1.80071"
              x2="-0.446032"
              y1="0.486861"
              y2="3.50586"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_121"
              x1="1.15028"
              x2="0.141698"
              y1="-0.0461581"
              y2="3.74963"
            >
              <stop stopColor="#E0C087" />
              <stop offset="0.28125" stopColor="#FFE49E" />
              <stop offset="1" stopColor="#753C1D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group37() {
  return (
    <div
      className="absolute inset-[42.89%_77.2%_49.01%_20.49%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-11.26%_-9.99%_-11.28%]">
        <svg
          className="block size-full"
          fill="none"
          height="4.98476"
          preserveAspectRatio="none"
          viewBox="0 0 1.6397 4.98476"
          width="1.6397"
        >
          <g filter="url(#filter0_d_0_317)" id="Group">
            <path
              d={svgPaths.p1f092470}
              fill="url(#paint0_linear_0_317)"
              id="Vector"
            />
            <path
              d={svgPaths.p116d5900}
              fill="url(#paint1_linear_0_317)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="4.98476"
              id="filter0_d_0_317"
              width="1.6397"
              x="0"
              y="8.95876e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_317"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_317"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_317"
              x1="1.86078"
              x2="-0.429425"
              y1="0.733092"
              y2="3.81052"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_317"
              x1="1.1867"
              x2="0.270236"
              y1="0.966624"
              y2="4.32186"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group38() {
  return (
    <div
      className="absolute inset-[44.1%_79.51%_51.03%_15.43%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-15.43%_-16.62%_0]">
        <svg
          className="block size-full"
          fill="none"
          height="3.17686"
          preserveAspectRatio="none"
          viewBox="0 0 3.38625 3.17686"
          width="3.38625"
        >
          <g filter="url(#filter0_d_0_390)" id="Group">
            <path
              d={svgPaths.p358c3280}
              fill="url(#paint0_linear_0_390)"
              id="Vector"
            />
            <path
              d={svgPaths.pb15e200}
              fill="url(#paint1_linear_0_390)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.17686"
              id="filter0_d_0_390"
              width="3.38625"
              x="1.16495e-09"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.301778" dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_390"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_390"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_390"
              x1="1.79184"
              x2="0.969274"
              y1="0.93591"
              y2="2.04129"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_390"
              x1="1.45979"
              x2="2.14158"
              y1="0.710436"
              y2="2.3453"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#9A5E33" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group39() {
  return (
    <div
      className="absolute inset-[53.28%_78%_44.03%_16.98%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-5.19%_-30.03%_-5.19%]">
        <svg
          className="block size-full"
          fill="none"
          height="1.96021"
          preserveAspectRatio="none"
          viewBox="0 0 3.21113 1.96021"
          width="3.21113"
        >
          <g filter="url(#filter0_d_0_299)" id="Group">
            <path
              d={svgPaths.pe432d00}
              fill="url(#paint0_linear_0_299)"
              id="Vector"
            />
            <path
              d={svgPaths.p3cd6a600}
              fill="url(#paint1_linear_0_299)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1.96021"
              id="filter0_d_0_299"
              width="3.21113"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_299"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_299"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_299"
              x1="2.09884"
              x2="1.23586"
              y1="-0.0414909"
              y2="1.11814"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_299"
              x1="2.13909"
              x2="1.16344"
              y1="0.470908"
              y2="1.78188"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group40() {
  return (
    <div
      className="absolute inset-[13.99%_28.62%_81.58%_65.48%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-4.41%_-18.25%_-4.41%]">
        <svg
          className="block size-full"
          fill="none"
          height="2.93382"
          preserveAspectRatio="none"
          viewBox="0 0 3.71994 2.93382"
          width="3.71994"
        >
          <g filter="url(#filter0_d_0_133)" id="Group">
            <path
              d={svgPaths.p5337300}
              fill="url(#paint0_linear_0_133)"
              id="Vector"
            />
            <path
              d={svgPaths.p6c6c080}
              fill="url(#paint1_linear_0_133)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="2.93382"
              id="filter0_d_0_133"
              width="3.71994"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_133"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_133"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_133"
              x1="0.533689"
              x2="2.93988"
              y1="-0.284913"
              y2="2.9483"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_133"
              x1="1.18056"
              x2="1.09244"
              y1="0.0134615"
              y2="3.11814"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group41() {
  return (
    <div
      className="absolute inset-[25.44%_23.78%_71.93%_70.57%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-4.62%_-30.71%_-4.61%]">
        <svg
          className="block size-full"
          fill="none"
          height="1.92664"
          preserveAspectRatio="none"
          viewBox="0 0 3.57579 1.92664"
          width="3.57579"
        >
          <g filter="url(#filter0_d_0_352)" id="Group">
            <path
              d={svgPaths.p5aaa900}
              fill="url(#paint0_linear_0_352)"
              id="Vector"
            />
            <path
              d={svgPaths.p22165580}
              fill="url(#paint1_linear_0_352)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1.92664"
              id="filter0_d_0_352"
              width="3.57579"
              x="0"
              y="3.17903e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_352"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_352"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_352"
              x1="0.907447"
              x2="2.77726"
              y1="-0.515439"
              y2="1.99716"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_352"
              x1="0.878446"
              x2="3.14943"
              y1="-0.553297"
              y2="1.75383"
            >
              <stop stopColor="#FFDA92" />
              <stop offset="1" stopColor="#DCBA84" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group42() {
  return (
    <div className="absolute inset-[26%_17.85%_65.41%_78.2%]" data-name="Group">
      <div className="absolute inset-[0_-19.75%_-9.42%_0]">
        <svg
          className="block size-full"
          fill="none"
          height="5.25789"
          preserveAspectRatio="none"
          viewBox="0 0 2.74501 5.25789"
          width="2.74501"
        >
          <g filter="url(#filter0_d_0_61)" id="Group">
            <path
              d={svgPaths.p1186ac0}
              fill="url(#paint0_linear_0_61)"
              id="Vector"
            />
            <path
              d={svgPaths.p2dcb7f00}
              fill="url(#paint1_linear_0_61)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="5.25789"
              id="filter0_d_0_61"
              width="2.74501"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.301778" dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_61"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_61"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_61"
              x1="1.60754"
              x2="0.362706"
              y1="0.508073"
              y2="4.1408"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#BC8647" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_61"
              x1="0.44856"
              x2="1.93094"
              y1="1.41154"
              y2="3.40351"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group43() {
  return (
    <div
      className="absolute inset-[35.32%_20.44%_57.62%_77.56%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-13.03%_-11.45%_-13.03%]">
        <svg
          className="block size-full"
          fill="none"
          height="4.40491"
          preserveAspectRatio="none"
          viewBox="0 0 1.45937 4.40491"
          width="1.45937"
        >
          <g filter="url(#filter0_d_0_58)" id="Group">
            <path
              d={svgPaths.p134dfb0}
              fill="url(#paint0_linear_0_58)"
              id="Vector"
            />
            <path
              d={svgPaths.p37401f80}
              fill="url(#paint1_linear_0_58)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="4.40491"
              id="filter0_d_0_58"
              width="1.45937"
              x="-3.32749e-09"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_58"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_58"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_58"
              x1="-0.339751"
              x2="1.90699"
              y1="0.486946"
              y2="3.50595"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_58"
              x1="0.307975"
              x2="1.31656"
              y1="-0.0451394"
              y2="3.7498"
            >
              <stop stopColor="#E0C087" />
              <stop offset="0.28125" stopColor="#FFE49E" />
              <stop offset="1" stopColor="#753C1D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group44() {
  return (
    <div
      className="absolute inset-[42.89%_20.29%_49.01%_77.41%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-11.29%_-9.99%_-11.29%]">
        <svg
          className="block size-full"
          fill="none"
          height="4.98496"
          preserveAspectRatio="none"
          viewBox="0 0 1.638 4.98496"
          width="1.638"
        >
          <g filter="url(#filter0_d_0_159)" id="Group">
            <path
              d={svgPaths.p3dc03600}
              fill="url(#paint0_linear_0_159)"
              id="Vector"
            />
            <path
              d={svgPaths.p186b4b00}
              fill="url(#paint1_linear_0_159)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="4.98496"
              id="filter0_d_0_159"
              width="1.638"
              x="0"
              y="3.17891e-07"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_159"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_159"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_159"
              x1="-0.221081"
              x2="2.06912"
              y1="0.733291"
              y2="3.81072"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_159"
              x1="0.449502"
              x2="1.36631"
              y1="0.966679"
              y2="4.32277"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group45() {
  return (
    <div
      className="absolute inset-[44.11%_15.22%_51.03%_79.72%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-15.43%_-16.62%_0]">
        <svg
          className="block size-full"
          fill="none"
          height="3.17666"
          preserveAspectRatio="none"
          viewBox="0 0 3.38557 3.17666"
          width="3.38557"
        >
          <g filter="url(#filter0_d_0_289)" id="Group">
            <path
              d={svgPaths.p112ba600}
              fill="url(#paint0_linear_0_289)"
              id="Vector"
            />
            <path
              d={svgPaths.p3dc96600}
              fill="url(#paint1_linear_0_289)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="3.17666"
              id="filter0_d_0_289"
              width="3.38557"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.301778" dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_289"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_289"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_289"
              x1="1.14106"
              x2="1.96363"
              y1="0.935709"
              y2="2.04109"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_289"
              x1="1.4749"
              x2="0.793023"
              y1="0.710351"
              y2="2.3453"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#9A5E33" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group46() {
  return (
    <div
      className="absolute inset-[53.28%_16.77%_44.03%_78.21%]"
      data-name="Group"
    >
      <div className="absolute inset-[0_-5.19%_-30.03%_-5.19%]">
        <svg
          className="block size-full"
          fill="none"
          height="1.96021"
          preserveAspectRatio="none"
          viewBox="0 0 3.21113 1.96021"
          width="3.21113"
        >
          <g filter="url(#filter0_d_0_52)" id="Group">
            <path
              d={svgPaths.p13d57200}
              fill="url(#paint0_linear_0_52)"
              id="Vector"
            />
            <path
              d={svgPaths.p1bf14be0}
              fill="url(#paint1_linear_0_52)"
              id="Vector_2"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="1.96021"
              id="filter0_d_0_52"
              width="3.21113"
              x="-1.19362e-09"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.301778" />
              <feGaussianBlur stdDeviation="0.0754445" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_52"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_52"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_52"
              x1="1.11229"
              x2="1.97527"
              y1="-0.0414909"
              y2="1.11814"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_52"
              x1="1.07451"
              x2="2.05025"
              y1="0.470569"
              y2="1.78172"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group47() {
  return (
    <div
      className="absolute inset-[23.45%_26.55%_21.38%_26.47%]"
      data-name="Group"
    >
      <div className="absolute inset-[-0.39%_-0.44%]">
        <svg
          className="block size-full"
          fill="none"
          height="31.1359"
          preserveAspectRatio="none"
          viewBox="0 0 27.4871 31.1359"
          width="27.4871"
        >
          <g filter="url(#filter0_f_0_48)" id="Group">
            <path
              d={svgPaths.p146ed772}
              id="Vector"
              stroke="url(#paint0_linear_0_48)"
              strokeWidth="0.150889"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="31.1359"
              id="filter0_f_0_48"
              width="27.4871"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_48"
                stdDeviation="0.0226333"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_48"
              x1="8.22877"
              x2="21.5705"
              y1="3.0213"
              y2="27.1498"
            >
              <stop stopColor="#DDDFE2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group49() {
  return (
    <div
      className="absolute inset-[24.18%_21.26%_22.01%_19.52%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.051px_-3.282px] mask-size-[33.378px_36.695px] opacity-50"
      style={{ maskImage: `url("${imgGroup2}")` }}
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="30.1305"
        preserveAspectRatio="none"
        viewBox="0 0 34.3521 30.1305"
        width="34.3521"
      >
        <g id="Group">
          <path
            d={svgPaths.p57f00}
            fill="url(#paint0_radial_0_110)"
            id="Vector"
          />
          <path
            d={svgPaths.p103f0d00}
            fill="url(#paint1_linear_0_110)"
            id="Vector_2"
            opacity="0.5"
          />
          <path
            d={svgPaths.p341c1a00}
            fill="url(#paint2_linear_0_110)"
            id="Vector_3"
            opacity="0.5"
          />
          <path
            d={svgPaths.p3fb67e00}
            fill="url(#paint3_linear_0_110)"
            id="Vector_4"
            opacity="0.5"
          />
          <path
            d={svgPaths.p2b02fd80}
            fill="url(#paint4_linear_0_110)"
            id="Vector_5"
          />
          <g filter="url(#filter0_i_0_110)" id="Group_2">
            <path
              d={svgPaths.p57f00}
              fill="#6052B4"
              fillOpacity="0.01"
              id="Vector_6"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="28.4141"
            id="filter0_i_0_110"
            width="25.0963"
            x="5.19177"
            y="0.85837"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.0146" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_0_110"
            />
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(17.74 15.0654) rotate(90) scale(14.492 12.5482)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_0_110"
            r="1"
          >
            <stop stopColor="#F5F7FF" />
            <stop offset="1" stopColor="#B3B5C5" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_110"
            x1="17.7401"
            x2="17.7401"
            y1="0"
            y2="30.1305"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_0_110"
            x1="2.24835"
            x2="17.274"
            y1="2.7261"
            y2="28.8881"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_0_110"
            x1="32.1038"
            x2="17.0781"
            y1="2.72601"
            y2="28.888"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_0_110"
            x1="17.7408"
            x2="17.6659"
            y1="20.374"
            y2="28.5521"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="#D0DBFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MaskGroup3() {
  return (
    <div
      className="absolute contents inset-[25.71%_28.26%_23.55%_28.47%]"
      data-name="Mask group"
    >
      <Group49 />
    </div>
  )
}

function Group48() {
  return (
    <div
      className="absolute contents inset-[25.71%_28.26%_23.55%_28.47%]"
      data-name="Group"
    >
      <MaskGroup3 />
    </div>
  )
}

function Group51() {
  return (
    <div
      className="absolute inset-[23.61%_45.35%_67.14%_45.77%] mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-10.489px_0.88px] mask-size-[26.003px_29.319px]"
      style={{ maskImage: `url("${imgGroup3}")` }}
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="5.18509"
        preserveAspectRatio="none"
        viewBox="0 0 5.14852 5.18509"
        width="5.14852"
      >
        <g id="Group">
          <path
            d={svgPaths.p24aec2f0}
            fill="url(#paint0_linear_0_197)"
            id="Vector"
          />
          <path
            d={svgPaths.p10a4a600}
            fill="url(#paint1_linear_0_197)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p1d1e5780}
            fill="url(#paint2_linear_0_197)"
            id="Vector_3"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p3fb86800}
            fill="url(#paint3_linear_0_197)"
            fillRule="evenodd"
            id="Vector_4"
          />
          <g filter="url(#filter0_d_0_197)" id="Group_2">
            <path d={svgPaths.p137d1100} fill="#C4C4C4" id="Vector_5" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="2.0987"
            id="filter0_d_0_197"
            width="4.97932"
            x="0.0863951"
            y="0.768557"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="0.452667" />
            <feGaussianBlur stdDeviation="0.150889" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.308611 0 0 0 0 0.319833 0 0 0 0 0.420833 0 0 0 0.36 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_0_197"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_197"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_0_197"
            x1="0.32173"
            x2="2.30308"
            y1="2.04841"
            y2="4.74692"
          >
            <stop offset="0.0245272" stopColor="#DBBA8F" />
            <stop offset="0.344022" stopColor="#FFEFBE" />
            <stop offset="1" stopColor="#DEBD84" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_197"
            x1="4.698"
            x2="2.71576"
            y1="1.92038"
            y2="4.36307"
          >
            <stop stopColor="#A06E48" />
            <stop offset="0.368198" stopColor="#BD9666" />
            <stop offset="1" stopColor="#A88255" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_0_197"
            x1="1.73763"
            x2="3.65798"
            y1="0.640108"
            y2="2.57055"
          >
            <stop stopColor="#C08D4E" />
            <stop offset="1" stopColor="#E2C69F" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_0_197"
            x1="0.901048"
            x2="2.75812"
            y1="1.79234"
            y2="3.53041"
          >
            <stop stopColor="#C49357" />
            <stop offset="0.483067" stopColor="white" stopOpacity="0.87" />
            <stop offset="1" stopColor="#DFC299" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MaskGroup4() {
  return (
    <div
      className="absolute contents inset-[25.72%_28.26%_23.54%_28.47%]"
      data-name="Mask group"
    >
      <Group51 />
    </div>
  )
}

function Group50() {
  return (
    <div
      className="absolute contents inset-[25.72%_28.26%_23.54%_28.47%]"
      data-name="Group"
    >
      <MaskGroup4 />
    </div>
  )
}

function Group52() {
  return (
    <div
      className="absolute inset-[39.83%_36.03%_37.43%_36.01%]"
      data-name="Group"
    >
      <div className="absolute inset-[-4.74%_-7.44%_-14.22%_-7.44%]">
        <svg
          className="block size-full"
          fill="none"
          height="15.1468"
          preserveAspectRatio="none"
          viewBox="0 0 18.6303 15.1468"
          width="18.6303"
        >
          <g filter="url(#filter0_d_0_33)" id="Group">
            <path
              d={svgPaths.p1c98cd00}
              fill="url(#paint0_linear_0_33)"
              id="Vector"
            />
            <path
              d={svgPaths.p3d0c2200}
              fill="url(#paint1_linear_0_33)"
              id="Vector_2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p29cdad00}
              fill="url(#paint2_linear_0_33)"
              fillRule="evenodd"
              id="Vector_3"
            />
            <g filter="url(#filter1_d_0_33)" id="Group_2">
              <path
                d={svgPaths.p31fac380}
                fill="url(#paint3_linear_0_33)"
                id="Vector_4"
              />
              <path
                d={svgPaths.p3a1fb0f0}
                fill="url(#paint4_linear_0_33)"
                id="Vector_5"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p93a4b00}
                fill="url(#paint5_linear_0_33)"
                fillRule="evenodd"
                id="Vector_6"
              />
              <path
                d={svgPaths.p307d4200}
                fill="url(#paint6_linear_0_33)"
                id="Vector_7"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p1ec04880}
                fill="url(#paint7_linear_0_33)"
                fillRule="evenodd"
                id="Vector_8"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p183d1e80}
                fill="url(#paint8_linear_0_33)"
                fillRule="evenodd"
                id="Vector_9"
              />
              <g filter="url(#filter2_f_0_33)" id="Group_3" opacity="0.4">
                <path
                  d={svgPaths.p26c83000}
                  id="Vector_10"
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="0.179359"
                />
              </g>
              <g filter="url(#filter3_f_0_33)" id="Group_4" opacity="0.3">
                <path d={svgPaths.p2c3c0b00} fill="#DEE4F3" id="Vector_11" />
              </g>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="15.1468"
              id="filter0_d_0_33"
              width="18.6303"
              x="-4.20739e-08"
              y="1.23365e-08"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.603556" />
              <feGaussianBlur stdDeviation="0.603556" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.504687 0 0 0 0 0.517969 0 0 0 0 0.6375 0 0 0 1 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_33"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_33"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="12.7807"
              id="filter1_d_0_33"
              width="15.303"
              x="1.66519"
              y="0.334518"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.269038" />
              <feGaussianBlur stdDeviation="0.269038" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.426562 0 0 0 0 0.464625 0 0 0 0 0.5625 0 0 0 0.71 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_33"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_33"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="11.3544"
              id="filter2_f_0_33"
              width="7.04013"
              x="9.12341"
              y="0.510936"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_33"
                stdDeviation="0.0896793"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="10.2235"
              id="filter3_f_0_33"
              width="0.25585"
              x="9.18864"
              y="1.52768"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_33"
                stdDeviation="0.0448397"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_33"
              x1="1.20711"
              x2="17.4232"
              y1="12.8575"
              y2="12.8215"
            >
              <stop stopColor="#F7F7F8" />
              <stop offset="0.0201542" stopColor="#CDCFD7" />
              <stop offset="0.977524" stopColor="#C5C7CF" />
              <stop offset="1" stopColor="#E8EAEC" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_33"
              x1="2.26007"
              x2="14.0371"
              y1="4.06168"
              y2="12.2553"
            >
              <stop stopColor="#D7D9DF" />
              <stop offset="1" stopColor="#C8CAD3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_33"
              x1="1.66335"
              x2="16.1519"
              y1="2.68323"
              y2="12.345"
            >
              <stop stopColor="#F8F9F9" />
              <stop offset="1" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_33"
              x1="3.35064"
              x2="2.64757"
              y1="11.0145"
              y2="3.14483"
            >
              <stop stopColor="#EDEEF1" />
              <stop offset="1" stopColor="#EDEEF1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_33"
              x1="3.65659"
              x2="9.12402"
              y1="11.395"
              y2="12.3558"
            >
              <stop offset="0.0442192" stopColor="#C2C4CD" />
              <stop offset="0.65381" stopColor="#CFD0D7" />
              <stop offset="0.991391" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_33"
              x1="13.6381"
              x2="15.7968"
              y1="1.00849"
              y2="9.57415"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.371361" stopColor="#C2C4CD" />
              <stop offset="1" stopColor="#B1B3BD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_33"
              x1="14.9767"
              x2="9.5093"
              y1="11.395"
              y2="12.3558"
            >
              <stop offset="0.0442192" stopColor="#BDBFC8" />
              <stop offset="0.65381" stopColor="#D4D6DF" />
              <stop offset="0.991391" stopColor="#C2C4CD" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_33"
              x1="9.31611"
              x2="2.66131"
              y1="4.88929"
              y2="4.78022"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.0890549" stopColor="#C2C4CD" />
              <stop offset="0.46547" stopColor="#E5E7EB" />
              <stop offset="1" stopColor="#FAFAFA" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_33"
              x1="9.31637"
              x2="15.9712"
              y1="4.88929"
              y2="4.78023"
            >
              <stop stopColor="#C2C4CD" />
              <stop offset="0.214912" stopColor="#FAFAFA" />
              <stop offset="0.510885" stopColor="#E7E8EC" />
              <stop offset="0.901932" stopColor="#C2C4CD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group54() {
  return (
    <div
      className="absolute contents inset-[45.7%_45.48%_45.2%_45.68%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[45.7%_45.48%_45.2%_45.68%] mix-blend-hard-light opacity-30"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.09693"
          preserveAspectRatio="none"
          viewBox="0 0 5.1237 5.09693"
          width="5.1237"
        >
          <path
            d={svgPaths.p3490f180}
            fill="url(#paint0_linear_0_25)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_25"
              x1="1.18184"
              x2="5.48115"
              y1="2.39179"
              y2="2.67096"
            >
              <stop offset="0.153262" stopColor="#5DB9ED" />
              <stop offset="1" stopColor="#579BEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group55() {
  return (
    <div
      className="absolute contents inset-[45.66%_45.47%_45.2%_45.66%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[45.66%_45.47%_45.2%_45.66%] mix-blend-hard-light opacity-60"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.11831"
          preserveAspectRatio="none"
          viewBox="0 0 5.1452 5.11831"
          width="5.1452"
        >
          <path
            d={svgPaths.p2068e200}
            fill="url(#paint0_linear_0_55)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_55"
              x1="0.0910088"
              x2="4.90396"
              y1="1.53245"
              y2="4.2595"
            >
              <stop stopColor="#2A58C6" />
              <stop offset="1" stopColor="#4FF4FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group56() {
  return (
    <div
      className="absolute contents inset-[46.94%_46.71%_46.47%_46.89%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[46.94%_46.71%_46.47%_46.89%] mix-blend-soft-light opacity-40"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.69133"
          preserveAspectRatio="none"
          viewBox="0 0 3.71081 3.69133"
          width="3.71081"
        >
          <path
            d={svgPaths.p3e0a4080}
            fill="url(#paint0_linear_0_24)"
            id="Vector"
            style={{ mixBlendMode: "soft-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_24"
              x1="2.82588"
              x2="0.79932"
              y1="3.15187"
              y2="0.231431"
            >
              <stop stopColor="#60F5FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group53() {
  return (
    <div
      className="absolute contents inset-[43.72%_43.58%_43.23%_43.76%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[43.72%_43.59%_43.25%_43.77%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="7.29748"
          preserveAspectRatio="none"
          viewBox="0 0 7.33589 7.29748"
          width="7.33589"
        >
          <path
            d={svgPaths.p37bab640}
            fill="url(#paint0_linear_0_32)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_32"
              x1="1.17032"
              x2="5.63689"
              y1="1.14995"
              y2="6.89424"
            >
              <stop stopColor="#466CC6" />
              <stop offset="1" stopColor="#75D2F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[43.74%_49.91%_49.75%_45.61%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.64874"
          preserveAspectRatio="none"
          viewBox="0 0 2.59755 3.64874"
          width="2.59755"
        >
          <path
            d={svgPaths.p15a86100}
            fill="url(#paint0_linear_0_150)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_150"
              x1="1.29877"
              x2="2.4411"
              y1="-3.41928e-08"
              y2="3.7963"
            >
              <stop offset="0.153262" stopColor="#3D46F7" />
              <stop offset="1" stopColor="#35E3FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[45.65%_49.91%_49.75%_43.76%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.58007"
          preserveAspectRatio="none"
          viewBox="0 0 3.67345 2.58007"
          width="3.67345"
        >
          <path
            d={svgPaths.p301f3200}
            fill="url(#paint0_linear_0_31)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_31"
              x1="0.161462"
              x2="3.66497"
              y1="0.913563"
              y2="2.79958"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="1" stopColor="#35D8FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[43.74%_45.44%_49.75%_50.09%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.64874"
          preserveAspectRatio="none"
          viewBox="0 0 2.59755 3.64874"
          width="2.59755"
        >
          <path
            d={svgPaths.p21a28900}
            fill="url(#paint0_linear_0_30)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_30"
              x1="0.245391"
              x2="1.70781"
              y1="0.999515"
              y2="2.45528"
            >
              <stop offset="0.153262" stopColor="#2251BD" />
              <stop offset="1" stopColor="#26A7F4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[45.65%_43.59%_49.75%_50.08%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.58007"
          preserveAspectRatio="none"
          viewBox="0 0 3.67345 2.58007"
          width="3.67345"
        >
          <path
            d={svgPaths.pd636900}
            fill="url(#paint0_linear_0_29)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_29"
              x1="1.97524"
              x2="2.10236"
              y1="1.02378"
              y2="2.82699"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="1" stopColor="#359CFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[50.25%_45.43%_43.23%_50.09%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.64882"
          preserveAspectRatio="none"
          viewBox="0 0 2.59746 3.64882"
          width="2.59746"
        >
          <path
            d={svgPaths.p3686980}
            fill="url(#paint0_linear_0_28)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_28"
              x1="1.99836"
              x2="-0.185808"
              y1="1.93658"
              y2="1.83618"
            >
              <stop offset="0.153262" stopColor="#5DB9ED" />
              <stop offset="1" stopColor="#1A43AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[50.25%_43.58%_45.14%_50.09%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.58007"
          preserveAspectRatio="none"
          viewBox="0 0 3.67345 2.58007"
          width="3.67345"
        >
          <path
            d={svgPaths.p2d134780}
            fill="url(#paint0_linear_0_27)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_27"
              x1="2.78954"
              x2="1.18219"
              y1="-0.0363999"
              y2="1.43817"
            >
              <stop offset="0.153262" stopColor="#5DB9ED" />
              <stop offset="1" stopColor="#579BEB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[50.25%_49.91%_43.23%_45.61%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.64882"
          preserveAspectRatio="none"
          viewBox="0 0 2.59755 3.64882"
          width="2.59755"
        >
          <path
            d={svgPaths.p3da8680}
            fill="url(#paint0_linear_0_26)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_26"
              x1="0.599191"
              x2="3.02471"
              y1="1.93658"
              y2="1.53499"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="1" stopColor="#359CFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[50.25%_49.9%_45.14%_43.76%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.58007"
          preserveAspectRatio="none"
          viewBox="0 0 3.67345 2.58007"
          width="3.67345"
        >
          <path
            d={svgPaths.p33163070}
            fill="url(#paint0_linear_0_65)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_65"
              x1="-0.197541"
              x2="3.67293"
              y1="0.105297"
              y2="-0.207469"
            >
              <stop offset="0.153262" stopColor="#2E35AC" />
              <stop offset="1" stopColor="#359CFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[46.94%_46.71%_46.47%_46.89%] mix-blend-hard-light"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.69133"
          preserveAspectRatio="none"
          viewBox="0 0 3.71081 3.69133"
          width="3.71081"
        >
          <path
            d={svgPaths.p311fff00}
            fill="url(#paint0_linear_0_194)"
            id="Vector"
            style={{ mixBlendMode: "hard-light" }}
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_194"
              x1="0.592027"
              x2="2.85137"
              y1="0.581721"
              y2="3.48739"
            >
              <stop stopColor="#2F41B2" />
              <stop offset="1" stopColor="#89DFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group54 />
      <Group55 />
      <Group56 />
      <div
        className="absolute inset-[48.62%_50.6%_50.47%_48.52%] mix-blend-hard-light"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="0.511129"
          preserveAspectRatio="none"
          viewBox="0 0 0.513813 0.511129"
          width="0.513813"
        >
          <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
            <path d={svgPaths.p1ee29200} fill="white" fillOpacity="0.59" />
          </g>
        </svg>
      </div>
      <div
        className="absolute inset-[49.17%_50.45%_50.32%_49.06%] mix-blend-hard-light"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="0.283986"
          preserveAspectRatio="none"
          viewBox="0 0 0.285481 0.283986"
          width="0.285481"
        >
          <g id="Vector" style={{ mixBlendMode: "hard-light" }}>
            <path d={svgPaths.p1de2e000} fill="white" fillOpacity="0.87" />
          </g>
        </svg>
      </div>
    </div>
  )
}

function Group58() {
  return (
    <div
      className="absolute inset-[6.27%_6.34%_14.58%_46.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.275px_-5.43px] mask-size-[62.85px_51.938px]"
      style={{ maskImage: `url("${imgGroup4}")` }}
      data-name="Group"
    >
      <div className="absolute inset-[-0.11%_-2.42%_-2.86%_-2.4%]">
        <svg
          className="block size-full"
          fill="none"
          height="45.6407"
          preserveAspectRatio="none"
          viewBox="0 0 28.9692 45.6407"
          width="28.9692"
        >
          <g filter="url(#filter0_d_0_241)" id="Group">
            <path
              d={svgPaths.p10322900}
              fill="url(#paint0_linear_0_241)"
              id="Vector"
            />
            <path
              d={svgPaths.p1fc5e100}
              id="Vector_2"
              stroke="url(#paint1_linear_0_241)"
              strokeWidth="0.262057"
            />
            <g filter="url(#filter1_d_0_241)" id="Group_2">
              <path
                d={svgPaths.p81fac00}
                fill="url(#paint2_linear_0_241)"
                id="Vector_3"
              />
            </g>
            <path
              d={svgPaths.p1060ea00}
              id="Vector_4"
              stroke="url(#paint3_linear_0_241)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p316106c0}
              fill="url(#paint4_linear_0_241)"
              id="Vector_5"
              opacity="0.8"
            />
            <g filter="url(#filter2_d_0_241)" id="Group_3">
              <path
                d={svgPaths.p14ff9700}
                fill="url(#paint5_linear_0_241)"
                id="Vector_6"
              />
            </g>
            <path
              d={svgPaths.p278a9b80}
              id="Vector_7"
              stroke="url(#paint6_linear_0_241)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p14773700}
              fill="url(#paint7_linear_0_241)"
              id="Vector_8"
            />
            <g filter="url(#filter3_d_0_241)" id="Group_4">
              <path
                d={svgPaths.p2b241400}
                fill="url(#paint8_linear_0_241)"
                id="Vector_9"
              />
            </g>
            <path
              d={svgPaths.p18c6e080}
              id="Vector_10"
              stroke="url(#paint9_linear_0_241)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p2d137880}
              fill="url(#paint10_linear_0_241)"
              id="Vector_11"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p13fb3f80}
              fill="url(#paint11_linear_0_241)"
              fillRule="evenodd"
              id="Vector_12"
            />
            <path
              d={svgPaths.p35336880}
              id="Vector_13"
              stroke="url(#paint12_linear_0_241)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p1a30cf00}
              fill="url(#paint13_linear_0_241)"
              id="Vector_14"
            />
            <g filter="url(#filter4_d_0_241)" id="Group_5">
              <path
                d={svgPaths.p2bab67a0}
                fill="url(#paint14_linear_0_241)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p1c0a000}
                fill="url(#paint15_linear_0_241)"
                id="Vector_16"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p24143630}
                fill="url(#paint16_linear_0_241)"
                fillRule="evenodd"
                id="Vector_17"
              />
              <g filter="url(#filter5_f_0_241)" id="Group_6">
                <path
                  d={svgPaths.p23faf040}
                  id="Vector_18"
                  stroke="url(#paint17_linear_0_241)"
                  strokeWidth="0.120711"
                />
              </g>
              <g filter="url(#filter6_f_0_241)" id="Group_7">
                <path
                  d={svgPaths.p32c11e40}
                  id="Vector_19"
                  stroke="#EED7B5"
                  strokeWidth="0.150889"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="45.6407"
              id="filter0_d_0_241"
              width="28.9692"
              x="1.11759e-08"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.603556" />
              <feGaussianBlur stdDeviation="0.301778" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.38125 0 0 0 0 0.416833 0 0 0 0 0.508333 0 0 0 0.38 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_241"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_241"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.6751"
              id="filter1_d_0_241"
              width="12.6449"
              x="15.9454"
              y="9.1537"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-0.291175" />
              <feGaussianBlur stdDeviation="0.291175" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_241"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_241"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="14.5559"
              id="filter2_d_0_241"
              width="15.4527"
              x="12.5532"
              y="18.1405"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-0.291175" />
              <feGaussianBlur stdDeviation="0.291175" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_241"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_241"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="13.1595"
              id="filter3_d_0_241"
              width="21.742"
              x="6.12361"
              y="23.8247"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-0.301778" />
              <feGaussianBlur stdDeviation="0.727937" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_241"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_241"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="26.3289"
              id="filter4_d_0_241"
              width="18.9611"
              x="0.301779"
              y="19.01"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.150889" dy="0.452667" />
              <feGaussianBlur stdDeviation="0.226333" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.7 0 0 0 0 0.526167 0 0 0 0 0.265417 0 0 0 0.5 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_241"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_241"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="25.5141"
              id="filter5_f_0_241"
              width="17.9981"
              x="0.558289"
              y="18.9648"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_241"
                stdDeviation="0.0226333"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="11.6616"
              id="filter6_f_0_241"
              width="12.9691"
              x="0.303413"
              y="31.3198"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_241"
                stdDeviation="0.301778"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_241"
              x1="25.4852"
              x2="21.2702"
              y1="0.0122631"
              y2="18.0741"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_241"
              x1="25.5904"
              x2="15.9787"
              y1="0.0387868"
              y2="22.8562"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.575358" stopColor="#F8F8F9" />
              <stop offset="0.783289" stopColor="white" />
              <stop offset="0.884809" stopColor="white" stopOpacity="0.19" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_241"
              x1="25.0078"
              x2="21.5493"
              y1="8.89232"
              y2="23.3548"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_241"
              x1="25.1691"
              x2="18.1098"
              y1="8.93517"
              y2="27.5868"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.292773" stopColor="#F8F8F9" stopOpacity="0.45" />
              <stop offset="0.629289" stopColor="white" stopOpacity="0.51" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_241"
              x1="19.9553"
              x2="19.7017"
              y1="23.4882"
              y2="26.5297"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_241"
              x1="22.5599"
              x2="19.7638"
              y1="17.4014"
              y2="28.7528"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_241"
              x1="22.7124"
              x2="17.8285"
              y1="17.4411"
              y2="32.4037"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.21882" stopColor="#F8F8F9" stopOpacity="0.67" />
              <stop offset="0.45675" stopColor="white" stopOpacity="0.46" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_241"
              x1="18.8979"
              x2="18.4498"
              y1="26.9485"
              y2="29.6385"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_241"
              x1="18.8086"
              x2="19.632"
              y1="27.6496"
              y2="33.9964"
            >
              <stop stopColor="#EFEFEF" />
              <stop offset="0.411026" stopColor="#DEDFE6" />
              <stop offset="0.58979" stopColor="#D1D2D9" />
              <stop offset="1" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint9_linear_0_241"
              x1="25.6116"
              x2="18.7299"
              y1="26.1407"
              y2="33.2643"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.86" />
              <stop offset="0.319253" stopColor="#F8F8F9" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0.88" />
              <stop offset="0.867925" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint10_linear_0_241"
              x1="16.0204"
              x2="14.5714"
              y1="32.2631"
              y2="31.1361"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint11_linear_0_241"
              x1="13.8353"
              x2="14.2878"
              y1="32.0547"
              y2="39.8865"
            >
              <stop offset="0.0306468" stopColor="#DBDCE7" />
              <stop offset="0.274204" stopColor="#CBCCD7" />
              <stop offset="0.675444" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint12_linear_0_241"
              x1="15.2655"
              x2="11.953"
              y1="32.4179"
              y2="40.6303"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.78" />
              <stop offset="0.319253" stopColor="#F8F8F9" stopOpacity="0" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0" />
              <stop offset="0.867925" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint13_linear_0_241"
              x1="18.3938"
              x2="17.2807"
              y1="19.386"
              y2="23.728"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint14_linear_0_241"
              x1="18.0887"
              x2="1.55276"
              y1="20.4322"
              y2="44.009"
            >
              <stop stopColor="#594530" />
              <stop offset="0.667292" stopColor="#7A5D3F" />
              <stop offset="1" stopColor="#564029" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint15_linear_0_241"
              x1="19.9195"
              x2="-0.617456"
              y1="19.7777"
              y2="41.8921"
            >
              <stop stopColor="#926C45" />
              <stop offset="0.198565" stopColor="#B98D5F" />
              <stop offset="0.568549" stopColor="#B98D5F" />
              <stop offset="1" stopColor="#94693C" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint16_linear_0_241"
              x1="14.2968"
              x2="14.7598"
              y1="28.9131"
              y2="33.2643"
            >
              <stop stopColor="#B98D5F" />
              <stop offset="0.0810439" stopColor="#B98D5F" />
              <stop offset="0.312564" stopColor="#ECD4AF" />
              <stop offset="0.465883" stopColor="#FDEED8" />
              <stop offset="0.619479" stopColor="#ECD4AF" />
              <stop offset="0.845306" stopColor="#B98D5F" />
              <stop offset="1" stopColor="#B98D5F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint17_linear_0_241"
              x1="17.036"
              x2="1.55891"
              y1="27.8305"
              y2="39.6588"
            >
              <stop offset="0.00453841" stopColor="#B98D5F" />
              <stop offset="0.184436" stopColor="white" />
              <stop offset="0.808004" stopColor="#D3B790" />
              <stop offset="0.912608" stopColor="#F7E1C2" />
              <stop offset="1" stopColor="#D3B790" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group59() {
  return (
    <div
      className="absolute inset-[6.27%_46.18%_14.58%_6.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.168px_-5.429px] mask-size-[62.85px_51.938px]"
      style={{ maskImage: `url("${imgGroup4}")` }}
      data-name="Group"
    >
      <div className="absolute inset-[-0.11%_-2.4%_-2.86%_-3.16%]">
        <svg
          className="block size-full"
          fill="none"
          height="45.6407"
          preserveAspectRatio="none"
          viewBox="0 0 29.1719 45.6407"
          width="29.1719"
        >
          <g filter="url(#filter0_d_0_167)" id="Group">
            <path
              d={svgPaths.p38b54980}
              fill="url(#paint0_linear_0_167)"
              id="Vector"
            />
            <path
              d={svgPaths.p34cfd0c0}
              id="Vector_2"
              stroke="url(#paint1_linear_0_167)"
              strokeWidth="0.262057"
            />
            <g filter="url(#filter1_d_0_167)" id="Group_2">
              <path
                d={svgPaths.p16e22600}
                fill="url(#paint2_linear_0_167)"
                id="Vector_3"
              />
            </g>
            <path
              d={svgPaths.p21128a80}
              id="Vector_4"
              stroke="url(#paint3_linear_0_167)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p25ef4b00}
              fill="url(#paint4_linear_0_167)"
              id="Vector_5"
              opacity="0.8"
            />
            <g filter="url(#filter2_d_0_167)" id="Group_3">
              <path
                d={svgPaths.p2f7f7540}
                fill="url(#paint5_linear_0_167)"
                id="Vector_6"
              />
            </g>
            <path
              d={svgPaths.p12a8300}
              id="Vector_7"
              stroke="url(#paint6_linear_0_167)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p2e721b70}
              fill="url(#paint7_linear_0_167)"
              id="Vector_8"
            />
            <g filter="url(#filter3_d_0_167)" id="Group_4">
              <path
                d={svgPaths.p32346f00}
                fill="url(#paint8_linear_0_167)"
                id="Vector_9"
              />
            </g>
            <path
              d={svgPaths.p3e578d80}
              id="Vector_10"
              stroke="url(#paint9_linear_0_167)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p2f1c700}
              fill="url(#paint10_linear_0_167)"
              id="Vector_11"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p19479b00}
              fill="url(#paint11_linear_0_167)"
              fillRule="evenodd"
              id="Vector_12"
            />
            <path
              d={svgPaths.p5d7d500}
              id="Vector_13"
              stroke="url(#paint12_linear_0_167)"
              strokeWidth="0.218381"
            />
            <path
              d={svgPaths.p3f9dc400}
              fill="url(#paint13_linear_0_167)"
              id="Vector_14"
            />
            <g filter="url(#filter4_d_0_167)" id="Group_5">
              <path
                d={svgPaths.p32dcb580}
                fill="url(#paint14_linear_0_167)"
                id="Vector_15"
              />
              <path
                d={svgPaths.p5fe9500}
                fill="url(#paint15_linear_0_167)"
                id="Vector_16"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p2a3f7980}
                fill="url(#paint16_linear_0_167)"
                fillRule="evenodd"
                id="Vector_17"
              />
              <g filter="url(#filter5_f_0_167)" id="Group_6">
                <path
                  d={svgPaths.pf2a1260}
                  id="Vector_18"
                  stroke="url(#paint17_linear_0_167)"
                  strokeWidth="0.120711"
                />
              </g>
              <g filter="url(#filter6_f_0_167)" id="Group_7">
                <path
                  d={svgPaths.p3f078b00}
                  id="Vector_19"
                  stroke="#EED7B5"
                  strokeWidth="0.150889"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="45.6407"
              id="filter0_d_0_167"
              width="28.9692"
              x="0.20268"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="0.603556" />
              <feGaussianBlur stdDeviation="0.301778" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.38125 0 0 0 0 0.416833 0 0 0 0 0.508333 0 0 0 0.38 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_167"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_167"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="19.6761"
              id="filter1_d_0_167"
              width="12.6478"
              x="-1.40246e-08"
              y="9.15369"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-0.291175" />
              <feGaussianBlur stdDeviation="0.291175" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_167"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_167"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="14.5561"
              id="filter2_d_0_167"
              width="15.4519"
              x="0.585246"
              y="18.1417"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-0.291175" />
              <feGaussianBlur stdDeviation="0.291175" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_167"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_167"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="13.1588"
              id="filter3_d_0_167"
              width="21.7418"
              x="1.30715"
              y="23.8253"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-0.301778" />
              <feGaussianBlur stdDeviation="0.727937" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_167"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_167"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="26.3289"
              id="filter4_d_0_167"
              width="18.9611"
              x="10.2108"
              y="19.01"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.150889" dy="0.452667" />
              <feGaussianBlur stdDeviation="0.226333" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.7 0 0 0 0 0.526167 0 0 0 0 0.265417 0 0 0 0.5 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_167"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_167"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="25.5141"
              id="filter5_f_0_167"
              width="17.9981"
              x="10.6155"
              y="18.9648"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_167"
                stdDeviation="0.0226333"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="11.6616"
              id="filter6_f_0_167"
              width="12.9692"
              x="15.8985"
              y="31.3198"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_167"
                stdDeviation="0.301778"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_167"
              x1="3.68802"
              x2="7.90309"
              y1="0.0117071"
              y2="18.0736"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_167"
              x1="3.58236"
              x2="13.1941"
              y1="0.0387824"
              y2="22.8562"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.575358" stopColor="#F8F8F9" />
              <stop offset="0.783289" stopColor="white" />
              <stop offset="0.884809" stopColor="white" stopOpacity="0.19" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_167"
              x1="4.16542"
              x2="7.62414"
              y1="8.89222"
              y2="23.3558"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_167"
              x1="4.00279"
              x2="11.0622"
              y1="8.93515"
              y2="27.5868"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.292773" stopColor="#F8F8F9" stopOpacity="0.45" />
              <stop offset="0.629289" stopColor="white" stopOpacity="0.51" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_167"
              x1="9.21656"
              x2="9.47013"
              y1="23.4882"
              y2="26.5296"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_167"
              x1="6.61313"
              x2="9.40938"
              y1="17.4027"
              y2="28.7541"
            >
              <stop offset="0.220856" stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#D8D9E1" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_167"
              x1="6.46037"
              x2="11.3443"
              y1="17.4413"
              y2="32.4039"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.46" />
              <stop offset="0.21882" stopColor="#F8F8F9" stopOpacity="0.67" />
              <stop offset="0.45675" stopColor="white" stopOpacity="0.46" />
              <stop offset="0.742389" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_167"
              x1="10.2748"
              x2="10.723"
              y1="26.9487"
              y2="29.6387"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_167"
              x1="10.3641"
              x2="9.54084"
              y1="27.65"
              y2="33.9967"
            >
              <stop stopColor="#EFEFEF" />
              <stop offset="0.411026" stopColor="#DEDFE6" />
              <stop offset="0.58979" stopColor="#D1D2D9" />
              <stop offset="1" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint9_linear_0_167"
              x1="3.56034"
              x2="10.442"
              y1="26.1407"
              y2="33.2642"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.86" />
              <stop offset="0.319253" stopColor="#F8F8F9" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0.88" />
              <stop offset="0.867925" stopColor="white" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint10_linear_0_167"
              x1="13.1515"
              x2="14.6005"
              y1="32.2631"
              y2="31.1361"
            >
              <stop offset="0.374859" stopColor="#AD8357" />
              <stop offset="0.986946" stopColor="#714538" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint11_linear_0_167"
              x1="15.3366"
              x2="14.8841"
              y1="32.0547"
              y2="39.8865"
            >
              <stop offset="0.0306468" stopColor="#DBDCE7" />
              <stop offset="0.274204" stopColor="#CBCCD7" />
              <stop offset="0.675444" stopColor="#D1D2D9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint12_linear_0_167"
              x1="13.9065"
              x2="17.2189"
              y1="32.4179"
              y2="40.6303"
            >
              <stop stopColor="#F8F8F9" stopOpacity="0.78" />
              <stop offset="0.319253" stopColor="#F8F8F9" stopOpacity="0" />
              <stop offset="0.615431" stopColor="white" stopOpacity="0" />
              <stop offset="0.867925" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint13_linear_0_167"
              x1="10.7773"
              x2="11.8904"
              y1="19.386"
              y2="23.728"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint14_linear_0_167"
              x1="11.0832"
              x2="27.6191"
              y1="20.4322"
              y2="44.009"
            >
              <stop stopColor="#594530" />
              <stop offset="0.667292" stopColor="#7A5D3F" />
              <stop offset="1" stopColor="#564029" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint15_linear_0_167"
              x1="9.25239"
              x2="29.7894"
              y1="19.7777"
              y2="41.8921"
            >
              <stop stopColor="#926C45" />
              <stop offset="0.198565" stopColor="#B98D5F" />
              <stop offset="0.568549" stopColor="#B98D5F" />
              <stop offset="1" stopColor="#94693C" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint16_linear_0_167"
              x1="14.8751"
              x2="14.412"
              y1="28.9133"
              y2="33.2644"
            >
              <stop stopColor="#B98D5F" />
              <stop offset="0.0810439" stopColor="#B98D5F" />
              <stop offset="0.312564" stopColor="#ECD4AF" />
              <stop offset="0.465883" stopColor="#FDEED8" />
              <stop offset="0.619479" stopColor="#ECD4AF" />
              <stop offset="0.845306" stopColor="#B98D5F" />
              <stop offset="1" stopColor="#B98D5F" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint17_linear_0_167"
              x1="12.1358"
              x2="27.613"
              y1="27.8305"
              y2="39.6588"
            >
              <stop offset="0.00453841" stopColor="#B98D5F" />
              <stop offset="0.184436" stopColor="white" />
              <stop offset="0.808004" stopColor="#D3B790" />
              <stop offset="0.912608" stopColor="#F7E1C2" />
              <stop offset="1" stopColor="#D3B790" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group57() {
  return (
    <div
      className="absolute contents inset-[6.27%_6.34%_14.58%_6.17%]"
      data-name="Group"
    >
      <Group58 />
      <Group59 />
    </div>
  )
}

function MaskGroup5() {
  return (
    <div
      className="absolute contents inset-[3.97%_3.24%_18.07%_2.68%]"
      data-name="Mask group"
    >
      <Group57 />
    </div>
  )
}

function Group61() {
  return (
    <div
      className="absolute inset-[71.89%_44.03%_15.07%_44.53%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.074px_0.742px] mask-size-[7.35px_7.657px]"
      style={{ maskImage: `url("${imgGroup5}")` }}
      data-name="Group"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="7.30605"
        preserveAspectRatio="none"
        viewBox="0 0 6.63367 7.30605"
        width="6.63367"
      >
        <g id="Group">
          <path
            d={svgPaths.p376d6300}
            fill="url(#paint0_linear_0_104)"
            id="Vector"
          />
          <path
            d={svgPaths.p314dad00}
            fill="url(#paint1_linear_0_104)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_0_104"
            x1="3.02069"
            x2="6.79102"
            y1="6.3633"
            y2="6.10325"
          >
            <stop stopColor="#9A9CA5" />
            <stop offset="0.259135" stopColor="#C4C6CF" />
            <stop offset="0.878536" stopColor="#E2E3E7" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_104"
            x1="1.21979"
            x2="4.13043"
            y1="1.63808"
            y2="1.16312"
          >
            <stop stopColor="#F4F5F8" />
            <stop offset="1" stopColor="#F5F6F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function MaskGroup6() {
  return (
    <div
      className="absolute contents inset-[73.21%_44.23%_15.27%_44.67%]"
      data-name="Mask group"
    >
      <Group61 />
    </div>
  )
}

function Group60() {
  return (
    <div
      className="absolute contents inset-[73.21%_44.23%_15.27%_44.67%]"
      data-name="Group"
    >
      <MaskGroup6 />
    </div>
  )
}

function Group62() {
  return (
    <div
      className="absolute inset-[55.38%_45.57%_42.1%_45.67%]"
      data-name="Group"
    >
      <div className="absolute inset-[-21.43%_-5.94%]">
        <svg
          className="block size-full"
          fill="none"
          height="2.01179"
          preserveAspectRatio="none"
          viewBox="0 0 5.68717 2.01179"
          width="5.68717"
        >
          <g filter="url(#filter0_f_0_230)" id="Group" opacity="0.8">
            <path
              d={svgPaths.p4a81000}
              fill="url(#paint0_linear_0_230)"
              id="Vector"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="2.01179"
              id="filter0_f_0_230"
              width="5.68717"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_0_230"
                stdDeviation="0.150889"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_230"
              x1="0.366175"
              x2="5.32108"
              y1="1.96608"
              y2="1.96608"
            >
              <stop stopColor="#359EFF" stopOpacity="0.28" />
              <stop offset="0.497969" stopColor="#47D3FF" />
              <stop offset="1" stopColor="#359EFF" stopOpacity="0.26" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group22() {
  return (
    <div
      className="absolute contents inset-[3.97%_3.24%_6.33%_2.68%]"
      data-name="Group"
    >
      <div
        className="absolute inset-[67.73%_25.54%_14.21%_62.81%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="10.1142"
          preserveAspectRatio="none"
          viewBox="0 0 6.75879 10.1142"
          width="6.75879"
        >
          <path d={svgPaths.p16828300} fill="#063988" id="Vector" />
        </svg>
      </div>
      <Group23 />
      <Group24 />
      <div
        className="absolute inset-[70.93%_26.05%_15.4%_63.41%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="7.65461"
          preserveAspectRatio="none"
          viewBox="0 0 6.11537 7.65461"
          width="6.11537"
        >
          <path
            d={svgPaths.pf77f300}
            fill="url(#paint0_linear_0_235)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_235"
              x1="1.61167"
              x2="-0.615021"
              y1="2.99481"
              y2="3.01402"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group25 />
      <div
        className="absolute inset-[67.73%_62.38%_14.21%_25.97%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="10.1142"
          preserveAspectRatio="none"
          viewBox="0 0 6.75879 10.1142"
          width="6.75879"
        >
          <path d={svgPaths.p1c8b1e00} fill="#063988" id="Vector" />
        </svg>
      </div>
      <Group26 />
      <Group27 />
      <div
        className="absolute inset-[70.93%_62.99%_15.4%_26.47%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="7.65461"
          preserveAspectRatio="none"
          viewBox="0 0 6.11537 7.65461"
          width="6.11537"
        >
          <path
            d={svgPaths.p8c6b880}
            fill="url(#paint0_linear_0_283)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_283"
              x1="4.5037"
              x2="6.73039"
              y1="2.99481"
              y2="3.01402"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group28 />
      <div
        className="absolute inset-[77.33%_39.14%_6.44%_39.56%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="9.0899"
          preserveAspectRatio="none"
          viewBox="0 0 12.3551 9.0899"
          width="12.3551"
        >
          <path
            d={svgPaths.pee0eb80}
            fill="url(#paint0_radial_0_240)"
            id="Vector"
          />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="matrix(4.05403 4.86503 -5.52057 4.55234 2.76703 2.36846)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_0_240"
              r="1"
            >
              <stop offset="0.432002" stopColor="#023580" />
              <stop offset="1" stopColor="#0D3D78" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[78.01%_46.06%_6.44%_39.56%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="8.70529"
          preserveAspectRatio="none"
          viewBox="0 0 8.34279 8.70529"
          width="8.34279"
        >
          <path
            d={svgPaths.p2a72a100}
            fill="url(#paint0_linear_0_403)"
            id="Vector"
            opacity="0.8"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_403"
              x1="4.11919"
              x2="-0.197746"
              y1="1.40823"
              y2="5.45006"
            >
              <stop offset="0.213533" stopColor="#042861" />
              <stop offset="0.574194" stopColor="#195294" />
              <stop offset="1" stopColor="#063988" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group29 />
      <Group30 />
      <Group31 />
      <div
        className="absolute inset-[78.7%_39.91%_8.83%_40.34%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="6.98354"
          preserveAspectRatio="none"
          viewBox="0 0 11.4542 6.98354"
          width="11.4542"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p1a575200}
            fill="url(#paint0_linear_0_404)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_404"
              x1="3.7584"
              x2="0.913847"
              y1="1.68017"
              y2="2.61732"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[86.02%_49.79%_9.52%_49.99%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.49658"
          preserveAspectRatio="none"
          viewBox="0 0 0.12871 2.49658"
          width="0.12871"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2996200}
            fill="url(#paint0_linear_0_214)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_214"
              x1="0.0643126"
              x2="0.0643126"
              y1="0"
              y2="2.49658"
            >
              <stop stopColor="#FFF5E2" stopOpacity="0" />
              <stop offset="0.479167" stopColor="#FEEAB6" />
              <stop offset="1" stopColor="#E0B179" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[86.13%_49.79%_10.31%_48.08%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="1.99233"
          preserveAspectRatio="none"
          viewBox="0 0 1.23318 1.99233"
          width="1.23318"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.pb1c3780}
            fill="url(#paint0_linear_0_213)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_213"
              x1="0.616591"
              x2="0.616591"
              y1="0"
              y2="1.99233"
            >
              <stop stopColor="#FFF5E2" stopOpacity="0" />
              <stop offset="0.479167" stopColor="#FEEAB6" />
              <stop offset="1" stopColor="#E0B179" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[86.13%_47.88%_10.31%_49.99%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="1.99233"
          preserveAspectRatio="none"
          viewBox="0 0 1.23327 1.99233"
          width="1.23327"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p3c22acf0}
            fill="url(#paint0_linear_0_210)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_210"
              x1="0.616677"
              x2="0.616677"
              y1="0"
              y2="1.99233"
            >
              <stop stopColor="#FFF5E2" stopOpacity="0" />
              <stop offset="0.479167" stopColor="#FEEAB6" />
              <stop offset="1" stopColor="#E0B179" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group32 />
      <div
        className="absolute bottom-[43.85%] left-[18.6%] right-[77.96%] top-1/2"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.43883"
          preserveAspectRatio="none"
          viewBox="0 0 1.99255 3.43883"
          width="1.99255"
        >
          <path
            d={svgPaths.p2e2ede80}
            fill="url(#paint0_linear_0_196)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_196"
              x1="1.47806"
              x2="0.529931"
              y1="1.08878"
              y2="2.36279"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[16.57%_73.12%_74.78%_24.77%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.84522"
          preserveAspectRatio="none"
          viewBox="0 0 1.22436 4.84522"
          width="1.22436"
        >
          <path
            d={svgPaths.p34a2a280}
            fill="url(#paint0_linear_0_166)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_166"
              x1="1.90266"
              x2="-0.800484"
              y1="0.69399"
              y2="4.32628"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[16.6%_65.88%_80.9%_28.56%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="1.39756"
          preserveAspectRatio="none"
          viewBox="0 0 3.22614 1.39756"
          width="3.22614"
        >
          <path
            d={svgPaths.pb93900}
            fill="url(#paint0_linear_0_295)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_295"
              x1="2.50054"
              x2="0.62124"
              y1="-0.479479"
              y2="2.04581"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[13.49%_67.55%_34.46%_20.22%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="29.145"
          preserveAspectRatio="none"
          viewBox="0 0 7.09739 29.145"
          width="7.09739"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.pc623300}
            fill="url(#paint0_linear_0_355)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_355"
              x1="0.430635"
              x2="1.42841"
              y1="11.8906"
              y2="12.3051"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[10.9%_69.76%_81.39%_28.21%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.31897"
          preserveAspectRatio="none"
          viewBox="0 0 1.18042 4.31897"
          width="1.18042"
        >
          <path
            d={svgPaths.pe0c1080}
            fill="url(#paint0_linear_0_165)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_165"
              x1="2.14279"
              x2="0.612315"
              y1="4.41849"
              y2="1.3266"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[10.9%_70.53%_81.39%_28.21%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.31847"
          preserveAspectRatio="none"
          viewBox="0 0 0.727598 4.31847"
          width="0.727598"
        >
          <path
            d={svgPaths.p35962f70}
            fill="url(#paint0_linear_0_164)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_164"
              x1="0.997127"
              x2="0.154973"
              y1="0.924789"
              y2="4.20038"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[34.22%_74.37%_57.37%_20.54%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.70824"
          preserveAspectRatio="none"
          viewBox="0 0 2.95462 4.70824"
          width="2.95462"
        >
          <path
            d={svgPaths.pc5a0600}
            fill="url(#paint0_linear_0_158)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_158"
              x1="3.21221"
              x2="-0.0862769"
              y1="0.191758"
              y2="4.6241"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[34.22%_74.37%_57.37%_20.54%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.70823"
          preserveAspectRatio="none"
          viewBox="0 0 2.95456 4.70823"
          width="2.95456"
        >
          <path
            d={svgPaths.p1616b880}
            fill="url(#paint0_linear_0_195)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_195"
              x1="2.46719"
              x2="3.48707"
              y1="0.704837"
              y2="3.47878"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[25.54%_77.34%_67.36%_20.74%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.97388"
          preserveAspectRatio="none"
          viewBox="0 0 1.11828 3.97388"
          width="1.11828"
        >
          <path
            d={svgPaths.p2e6af300}
            fill="url(#paint0_linear_0_211)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_211"
              x1="1.46933"
              x2="-0.284582"
              y1="0.813018"
              y2="3.16976"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[28.67%_77.34%_67.36%_21.4%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.22006"
          preserveAspectRatio="none"
          viewBox="0 0 0.731836 2.22006"
          width="0.731836"
        >
          <path
            d={svgPaths.p3aa34c70}
            fill="url(#paint0_linear_0_157)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_157"
              x1="0.757327"
              x2="-0.0293135"
              y1="0.42263"
              y2="1.89225"
            >
              <stop stopColor="#C18E42" />
              <stop offset="1" stopColor="#D2AB68" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[17.83%_75.4%_73.37%_22.51%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.92868"
          preserveAspectRatio="none"
          viewBox="0 0 1.2154 4.92868"
          width="1.2154"
        >
          <path
            d={svgPaths.pcf4fb00}
            fill="url(#paint0_linear_0_156)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_156"
              x1="1.9378"
              x2="-0.279881"
              y1="0.97983"
              y2="3.95991"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[22.25%_70.61%_73.38%_24.75%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.44601"
          preserveAspectRatio="none"
          viewBox="0 0 2.69137 2.44601"
          width="2.69137"
        >
          <path
            d={svgPaths.p2eafb700}
            fill="url(#paint0_linear_0_155)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_155"
              x1="2.40461"
              x2="0.273768"
              y1="-0.213394"
              y2="2.64975"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[35.93%_79.47%_58.25%_16.15%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.25394"
          preserveAspectRatio="none"
          viewBox="0 0 2.54236 3.25394"
          width="2.54236"
        >
          <path
            d={svgPaths.p5347570}
            fill="url(#paint0_linear_0_153)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_153"
              x1="1.66469"
              x2="0.883633"
              y1="0.982291"
              y2="2.03189"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[31.46%_79.46%_58.7%_16.51%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.51286"
          preserveAspectRatio="none"
          viewBox="0 0 2.33479 5.51286"
          width="2.33479"
        >
          <path
            d={svgPaths.p409600}
            fill="url(#paint0_linear_0_149)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_149"
              x1="2.04817"
              x2="0.207328"
              y1="1.5243"
              y2="3.99789"
            >
              <stop stopColor="#C28766" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[44.4%_75.68%_48.89%_21.39%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.75828"
          preserveAspectRatio="none"
          viewBox="0 0 1.70068 3.75828"
          width="1.70068"
        >
          <path
            d={svgPaths.p263fb1c0}
            fill="url(#paint0_linear_0_148)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_148"
              x1="2.06753"
              x2="-0.338661"
              y1="0.273042"
              y2="3.50632"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[41.59%_79.44%_51.06%_17.89%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.11337"
          preserveAspectRatio="none"
          viewBox="0 0 1.55106 4.11337"
          width="1.55106"
        >
          <path
            d={svgPaths.p296d1780}
            fill="url(#paint0_linear_0_144)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_144"
              x1="1.5923"
              x2="0.0702719"
              y1="1.03821"
              y2="3.08332"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[41.59%_79.44%_51.06%_18.22%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.11328"
          preserveAspectRatio="none"
          viewBox="0 0 1.36162 4.11328"
          width="1.36162"
        >
          <path
            d={svgPaths.pb5d7f80}
            fill="url(#paint0_linear_0_141)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_141"
              x1="1.67253"
              x2="-0.11849"
              y1="0.905672"
              y2="3.31232"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[54.99%_77.76%_43.28%_17.63%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="0.969183"
          preserveAspectRatio="none"
          viewBox="0 0 2.67533 0.969183"
          width="2.67533"
        >
          <path
            d={svgPaths.p145f4600}
            fill="url(#paint0_linear_0_140)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_140"
              x1="1.73906"
              x2="0.999778"
              y1="0.0736077"
              y2="1.06691"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[7.61%_62.61%_86.22%_32.08%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.45444"
          preserveAspectRatio="none"
          viewBox="0 0 3.07997 3.45444"
          width="3.07997"
        >
          <path
            d={svgPaths.p3d6c8700}
            fill="url(#paint0_linear_0_163)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_163"
              x1="2.77769"
              x2="0.125041"
              y1="-0.22501"
              y2="3.33935"
            >
              <stop stopColor="#FCF1D5" />
              <stop offset="1" stopColor="#EBCE6A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[7.61%_62.61%_86.16%_32.29%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.48835"
          preserveAspectRatio="none"
          viewBox="0 0 2.958 3.48835"
          width="2.958"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p2d9d5300}
            fill="url(#paint0_linear_0_136)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_136"
              x1="2.95936"
              x2="0.306803"
              y1="0.000992603"
              y2="3.56535"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group33 />
      <div
        className="absolute inset-[16.62%_73.56%_74.85%_24.77%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.77544"
          preserveAspectRatio="none"
          viewBox="0 0 0.968597 4.77544"
          width="0.968597"
        >
          <path
            d={svgPaths.pe5a92c0}
            fill="url(#paint0_linear_0_154)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_154"
              x1="1.18047"
              x2="0.408674"
              y1="0.997988"
              y2="4.72598"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[17.83%_75.4%_73.61%_23.5%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.79241"
          preserveAspectRatio="none"
          viewBox="0 0 0.636922 4.79241"
          width="0.636922"
        >
          <path
            d={svgPaths.p921a000}
            fill="url(#paint0_linear_0_143)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_143"
              x1="0.601584"
              x2="-0.629224"
              y1="1.10795"
              y2="4.27454"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[22.26%_70.63%_73.38%_24.75%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.43948"
          preserveAspectRatio="none"
          viewBox="0 0 2.68037 2.43948"
          width="2.68037"
        >
          <path
            d={svgPaths.p3e3e5400}
            fill="url(#paint0_linear_0_281)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_281"
              x1="1.89089"
              x2="1.94246"
              y1="0.0998667"
              y2="2.21108"
            >
              <stop stopColor="#FFDD78" />
              <stop offset="1" stopColor="#FFF1C8" stopOpacity="0.38" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group34 />
      <Group35 />
      <div
        className="absolute inset-[31.47%_79.46%_59.53%_16.52%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.04271"
          preserveAspectRatio="none"
          viewBox="0 0 2.33232 5.04271"
          width="2.33232"
        >
          <path
            d={svgPaths.p2a71f200}
            fill="url(#paint0_linear_0_398)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_398"
              x1="1.10012"
              x2="-0.156127"
              y1="1.33297"
              y2="3.60664"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group36 />
      <div
        className="absolute inset-[35.98%_79.51%_58.28%_16.17%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.21347"
          preserveAspectRatio="none"
          viewBox="0 0 2.50483 3.21347"
          width="2.50483"
        >
          <path
            d={svgPaths.p3f4d8400}
            fill="url(#paint0_linear_0_234)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_234"
              x1="0.95538"
              x2="0.11252"
              y1="0.992727"
              y2="1.82654"
            >
              <stop stopColor="#B18253" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[13.57%_67.72%_34.57%_20.24%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.13%_-0.6%_-0.14%_-0.82%]">
          <svg
            className="block size-full"
            fill="none"
            height="29.1202"
            preserveAspectRatio="none"
            viewBox="0 0 7.08334 29.1202"
            width="7.08334"
          >
            <path
              d={svgPaths.p340fc080}
              id="Vector"
              stroke="#FADA81"
              strokeWidth="0.114244"
            />
          </svg>
        </div>
      </div>
      <Group37 />
      <Group38 />
      <Group39 />
      <div
        className="absolute bottom-[43.85%] left-[78.17%] right-[18.39%] top-1/2"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.43883"
          preserveAspectRatio="none"
          viewBox="0 0 1.99251 3.43883"
          width="1.99251"
        >
          <path
            d={svgPaths.p9a8b500}
            fill="url(#paint0_linear_0_108)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_108"
              x1="0.514409"
              x2="1.46253"
              y1="1.08878"
              y2="2.36279"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[16.57%_24.56%_74.78%_73.33%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.84522"
          preserveAspectRatio="none"
          viewBox="0 0 1.22444 4.84522"
          width="1.22444"
        >
          <path
            d={svgPaths.pa8fa3c0}
            fill="url(#paint0_linear_0_107)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_107"
              x1="-0.6783"
              x2="2.02484"
              y1="0.69399"
              y2="4.32628"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[16.6%_28.35%_80.9%_66.09%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="1.39755"
          preserveAspectRatio="none"
          viewBox="0 0 3.22614 1.39755"
          width="3.22614"
        >
          <path
            d={svgPaths.p36e13600}
            fill="url(#paint0_linear_0_358)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_358"
              x1="0.725683"
              x2="2.60499"
              y1="-0.479479"
              y2="2.04581"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[13.49%_20.01%_34.46%_67.75%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="29.145"
          preserveAspectRatio="none"
          viewBox="0 0 7.09733 29.145"
          width="7.09733"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p1fdd2d80}
            fill="url(#paint0_linear_0_298)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_298"
              x1="6.66667"
              x2="5.6689"
              y1="11.8906"
              y2="12.3051"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[10.9%_28%_81.39%_69.96%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.31897"
          preserveAspectRatio="none"
          viewBox="0 0 1.18046 4.31897"
          width="1.18046"
        >
          <path
            d={svgPaths.pb765400}
            fill="url(#paint0_linear_0_103)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_103"
              x1="-0.962287"
              x2="0.568192"
              y1="4.4185"
              y2="1.32662"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[10.9%_28%_81.39%_70.74%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.31914"
          preserveAspectRatio="none"
          viewBox="0 0 0.728426 4.31914"
          width="0.728426"
        >
          <path
            d={svgPaths.p16cebb00}
            fill="url(#paint0_linear_0_101)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_101"
              x1="-0.269102"
              x2="0.572883"
              y1="0.92484"
              y2="4.20096"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[34.22%_20.33%_57.37%_74.58%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.70824"
          preserveAspectRatio="none"
          viewBox="0 0 2.95454 4.70824"
          width="2.95454"
        >
          <path
            d={svgPaths.p21e31680}
            fill="url(#paint0_linear_0_100)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_100"
              x1="-0.257674"
              x2="3.04089"
              y1="0.191758"
              y2="4.62411"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[34.22%_20.33%_57.37%_74.57%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.70819"
          preserveAspectRatio="none"
          viewBox="0 0 2.95439 4.70819"
          width="2.95439"
        >
          <path
            d={svgPaths.p14ae9d00}
            fill="url(#paint0_linear_0_193)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_193"
              x1="0.487712"
              x2="-0.531827"
              y1="0.704582"
              y2="3.47997"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[25.54%_20.53%_67.36%_77.54%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.97388"
          preserveAspectRatio="none"
          viewBox="0 0 1.11826 3.97388"
          width="1.11826"
        >
          <path
            d={svgPaths.p365f6700}
            fill="url(#paint0_linear_0_99)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_99"
              x1="-0.351045"
              x2="1.40279"
              y1="0.812933"
              y2="3.16976"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[28.67%_21.2%_67.36%_77.54%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.22015"
          preserveAspectRatio="none"
          viewBox="0 0 0.731237 2.22015"
          width="0.731237"
        >
          <path
            d={svgPaths.p1c7d9900}
            fill="url(#paint0_linear_0_102)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_102"
              x1="-0.0258348"
              x2="0.760888"
              y1="0.422545"
              y2="1.89293"
            >
              <stop stopColor="#C18E42" />
              <stop offset="1" stopColor="#D2AB68" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[17.83%_22.3%_73.37%_75.61%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.92859"
          preserveAspectRatio="none"
          viewBox="0 0 1.2154 4.92859"
          width="1.2154"
        >
          <path
            d={svgPaths.p354f4f80}
            fill="url(#paint0_linear_0_274)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_274"
              x1="-0.722409"
              x2="1.49536"
              y1="0.97983"
              y2="3.95991"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[22.25%_24.54%_73.38%_70.82%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.44601"
          preserveAspectRatio="none"
          viewBox="0 0 2.69129 2.44601"
          width="2.69129"
        >
          <path
            d={svgPaths.p2051f400}
            fill="url(#paint0_linear_0_124)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_124"
              x1="0.286759"
              x2="2.41752"
              y1="-0.213394"
              y2="2.64975"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[35.93%_15.94%_58.25%_79.68%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.25394"
          preserveAspectRatio="none"
          viewBox="0 0 2.54236 3.25394"
          width="2.54236"
        >
          <path
            d={svgPaths.p1ffbb1c0}
            fill="url(#paint0_linear_0_98)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_98"
              x1="0.877677"
              x2="1.65873"
              y1="0.982291"
              y2="2.03189"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[31.46%_16.31%_58.7%_79.67%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.51286"
          preserveAspectRatio="none"
          viewBox="0 0 2.33479 5.51286"
          width="2.33479"
        >
          <path
            d={svgPaths.p17e0b500}
            fill="url(#paint0_linear_0_96)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_96"
              x1="0.286626"
              x2="2.12747"
              y1="1.52422"
              y2="3.99789"
            >
              <stop stopColor="#C28766" />
              <stop offset="1" stopColor="#8E573C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[44.4%_21.18%_48.89%_75.88%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.75828"
          preserveAspectRatio="none"
          viewBox="0 0 1.70069 3.75828"
          width="1.70069"
        >
          <path
            d={svgPaths.p3d96b200}
            fill="url(#paint0_linear_0_95)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_95"
              x1="-0.36693"
              x2="2.03926"
              y1="0.273043"
              y2="3.50632"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[41.59%_17.68%_51.06%_79.64%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.11337"
          preserveAspectRatio="none"
          viewBox="0 0 1.55106 4.11337"
          width="1.55106"
        >
          <path
            d={svgPaths.p3bdd4c0}
            fill="url(#paint0_linear_0_94)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_94"
              x1="-0.0412439"
              x2="1.48079"
              y1="1.03821"
              y2="3.08332"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[41.59%_18.01%_51.06%_79.65%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.11328"
          preserveAspectRatio="none"
          viewBox="0 0 1.36159 4.11328"
          width="1.36159"
        >
          <path
            d={svgPaths.p289c5280}
            fill="url(#paint0_linear_0_273)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_273"
              x1="-0.310947"
              x2="1.48008"
              y1="0.905757"
              y2="3.31241"
            >
              <stop stopColor="#FADA81" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[54.99%_17.43%_43.28%_77.96%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="0.969183"
          preserveAspectRatio="none"
          viewBox="0 0 2.67542 0.969183"
          width="2.67542"
        >
          <path
            d={svgPaths.p33847800}
            fill="url(#paint0_linear_0_92)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_92"
              x1="0.93636"
              x2="1.67556"
              y1="0.0736077"
              y2="1.06691"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[7.61%_31.87%_86.22%_62.82%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.45445"
          preserveAspectRatio="none"
          viewBox="0 0 3.07997 3.45445"
          width="3.07997"
        >
          <path
            d={svgPaths.p3384ab80}
            fill="url(#paint0_linear_0_91)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_91"
              x1="0.302282"
              x2="2.95493"
              y1="-0.22501"
              y2="3.33935"
            >
              <stop stopColor="#FCF1D5" />
              <stop offset="1" stopColor="#EBCE6A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[7.61%_32.08%_86.16%_62.82%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.48835"
          preserveAspectRatio="none"
          viewBox="0 0 2.958 3.48835"
          width="2.958"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p19bbab00}
            fill="url(#paint0_linear_0_90)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_90"
              x1="-0.00136467"
              x2="2.6512"
              y1="0.000992699"
              y2="3.56535"
            >
              <stop stopColor="#D2AB68" />
              <stop offset="1" stopColor="#B67D3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group40 />
      <div
        className="absolute inset-[16.62%_24.56%_74.85%_73.77%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.77375"
          preserveAspectRatio="none"
          viewBox="0 0 0.96858 4.77375"
          width="0.96858"
        >
          <path
            d={svgPaths.p1ea71100}
            fill="url(#paint0_linear_0_66)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_66"
              x1="-0.211723"
              x2="0.559143"
              y1="0.997564"
              y2="4.72462"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[17.83%_23.3%_73.61%_75.61%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="4.79173"
          preserveAspectRatio="none"
          viewBox="0 0 0.63689 4.79173"
          width="0.63689"
        >
          <path
            d={svgPaths.p31bb1e80}
            fill="url(#paint0_linear_0_239)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_239"
              x1="0.0352504"
              x2="1.26597"
              y1="1.10778"
              y2="4.27361"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[22.26%_24.54%_73.38%_70.84%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.44067"
          preserveAspectRatio="none"
          viewBox="0 0 2.68011 2.44067"
          width="2.68011"
        >
          <path
            d={svgPaths.p24326200}
            fill="url(#paint0_linear_0_64)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_64"
              x1="0.789141"
              x2="0.736303"
              y1="0.100291"
              y2="2.211"
            >
              <stop stopColor="#FFDD78" />
              <stop offset="1" stopColor="#FFF1C8" stopOpacity="0.38" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group41 />
      <Group42 />
      <div
        className="absolute inset-[31.46%_16.31%_59.53%_79.67%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="5.04382"
          preserveAspectRatio="none"
          viewBox="0 0 2.33249 5.04382"
          width="2.33249"
        >
          <path
            d={svgPaths.p20934c80}
            fill="url(#paint0_linear_0_93)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_93"
              x1="1.23228"
              x2="2.48887"
              y1="1.33322"
              y2="3.60758"
            >
              <stop stopColor="#F7E6B3" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group43 />
      <div
        className="absolute inset-[35.98%_15.96%_58.28%_79.72%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="3.21347"
          preserveAspectRatio="none"
          viewBox="0 0 2.50483 3.21347"
          width="2.50483"
        >
          <path
            d={svgPaths.p33b02200}
            fill="url(#paint0_linear_0_57)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_57"
              x1="1.54945"
              x2="2.3924"
              y1="0.992727"
              y2="1.82645"
            >
              <stop stopColor="#B18253" />
              <stop offset="1" stopColor="#F7E6B3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[13.57%_20.04%_34.57%_67.92%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-0.13%_-0.82%_-0.14%_-0.6%]">
          <svg
            className="block size-full"
            fill="none"
            height="29.1202"
            preserveAspectRatio="none"
            viewBox="0 0 7.08343 29.1202"
            width="7.08343"
          >
            <path
              d={svgPaths.p355a7d00}
              id="Vector"
              stroke="#FADA81"
              strokeWidth="0.114244"
            />
          </svg>
        </div>
      </div>
      <Group44 />
      <Group45 />
      <Group46 />
      <div
        className="absolute inset-[18.43%_22.27%_16.23%_22.26%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="36.5901"
          preserveAspectRatio="none"
          viewBox="0 0 32.1748 36.5901"
          width="32.1748"
        >
          <path
            d={svgPaths.p15e19ac0}
            fill="url(#paint0_linear_0_51)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_51"
              x1="9.33067"
              x2="23.6887"
              y1="4.17976"
              y2="32.8542"
            >
              <stop stopColor="#FAFAFA" />
              <stop offset="1" stopColor="#C2C4CD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[23.45%_26.55%_21.38%_26.47%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="30.8945"
          preserveAspectRatio="none"
          viewBox="0 0 27.2457 30.8945"
          width="27.2457"
        >
          <path
            d={svgPaths.p257fa200}
            fill="url(#paint0_linear_0_50)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_50"
              x1="6.75666"
              x2="19.1398"
              y1="3.73278"
              y2="26.7039"
            >
              <stop stopColor="#CDCFD6" />
              <stop offset="1" stopColor="#EFEFF1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group47 />
      <Group48 />
      <Group50 />
      <Group52 />
      <Group53 />
      <MaskGroup5 />
      <Group60 />
      <div
        className="absolute inset-[72.87%_47.34%_23.13%_47.77%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.24042"
          preserveAspectRatio="none"
          viewBox="0 0 2.83142 2.24042"
          width="2.83142"
        >
          <path
            d={svgPaths.p2eb62e00}
            fill="url(#paint0_linear_0_236)"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_236"
              x1="1.22269"
              x2="2.57388"
              y1="0.768133"
              y2="0.897506"
            >
              <stop stopColor="#916437" />
              <stop offset="0.522184" stopColor="#AF8356" />
              <stop offset="1" stopColor="#AF8356" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="absolute inset-[72.89%_49.8%_23.13%_47.78%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="2.22727"
          preserveAspectRatio="none"
          viewBox="0 0 1.40684 2.22727"
          width="1.40684"
        >
          <path d={svgPaths.p9a2fd80} fill="#EED6B3" id="Vector" />
        </svg>
      </div>
      <Group62 />
      <div
        className="absolute inset-[89.44%_47.41%_9.41%_47.55%]"
        data-name="Vector"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="0.645886"
          preserveAspectRatio="none"
          viewBox="0 0 2.92235 0.645886"
          width="2.92235"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p21ccbb80}
            fill="url(#paint0_linear_0_97)"
            fillRule="evenodd"
            id="Vector"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_97"
              x1="0.643544"
              x2="-0.290874"
              y1="-0.122266"
              y2="0.330326"
            >
              <stop stopColor="#CFAC82" />
              <stop offset="0.309893" stopColor="#FCEDD7" />
              <stop offset="0.523799" stopColor="#F8EDC0" />
              <stop offset="0.613641" stopColor="#CFAC82" />
              <stop offset="1" stopColor="#CFAC82" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group21() {
  return (
    <div
      className="absolute h-[56px] left-[4.13px] overflow-clip top-[17.9px] w-[58px]"
      data-name="Group (1) 1"
    >
      <Group22 />
    </div>
  )
}

function Container9() {
  return (
    <div
      className="h-[137.025px] relative shrink-0 w-[65.25px]"
      data-name="Container"
    >
      <Container10 />
      <Container11 />
      <Group21 />
    </div>
  )
}

function Link1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <Container9 />
    </div>
  )
}

function Container17() {
  return (
    <div className="absolute h-0 left-0 right-0 top-0" data-name="Container">
      <div
        className="absolute bg-gradient-to-r from-[#18181b] h-[163.125px] left-0 to-[#18181b] top-[80.75px] via-1/2 via-[#27272a] w-[65.25px]"
        data-name="Gradient"
      />
      <div
        className="absolute h-[16.313px] left-0 rounded-[8155.435px] top-[73.41px] w-[65.25px]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 65.25 16.313' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(3.2625 0 0 0.81563 32.625 8.1563)'><stop stop-color='rgba(49,49,49,1)' offset='0.16'/><stop stop-color='rgba(74,74,74,1)' offset='0.55'/><stop stop-color='rgba(66,66,69,1)' offset='0.72'/><stop stop-color='rgba(39,40,42,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
        data-name="Gradient"
      />
    </div>
  )
}

function BronzeIcon() {
  return (
    <div
      className="-translate-x-1/2 absolute left-1/2 max-w-[1246.2750244140625px] size-[19.575px] top-[-4.08px]"
      data-name="Bronze icon"
    />
  )
}

function Container19() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Container">
      <BronzeIcon />
    </div>
  )
}

function Container21() {
  return (
    <div
      className="content-stretch flex flex-col items-center overflow-clip py-[3.263px] relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-text-primary text-[9.788px] text-center whitespace-nowrap">
        <p className="leading-[9.788px]">Lorem</p>
      </div>
    </div>
  )
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3.263px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  )
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] text-center whitespace-nowrap">
          <p className="leading-[13.05px]">3644</p>
        </div>
      </div>
    </div>
  )
}

function BackgroundBorderShadow2() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-surface-hover content-stretch drop-shadow-[0px_1.631px_2.447px_rgba(0,0,0,0.12),0px_3.263px_4.894px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center left-1/2 px-[0.816px] py-[7.178px] rounded-[13.05px] top-[93.8px] w-[78.626px]"
      data-name="Background+Border+Shadow"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <Container20 />
      <Container22 />
    </div>
  )
}

function Container18() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0"
      data-name="Container"
    >
      <Container19 />
      <BackgroundBorderShadow2 />
    </div>
  )
}

function Group70() {
  return (
    <div className="absolute h-[11.31px] left-[10.12px] top-[37.95px] w-[5.365px]">
      <div className="absolute inset-[-8.84%_-18.64%]">
        <svg
          className="block size-full"
          fill="none"
          height="13.3104"
          preserveAspectRatio="none"
          viewBox="0 0 7.36542 13.3104"
          width="7.36542"
        >
          <g id="Group 311">
            <path
              d={svgPaths.p1b486bf0}
              fill="url(#paint0_linear_0_21)"
              id="Vector 312"
            />
            <path
              d={svgPaths.p1b486bf0}
              id="Vector 313"
              stroke="url(#paint1_linear_0_21)"
              strokeWidth="2"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_21"
              x1="3.68271"
              x2="3.68271"
              y1="1"
              y2="12.3104"
            >
              <stop stopColor="#EFD9BD" />
              <stop offset="1" stopColor="#C39470" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_21"
              x1="1"
              x2="3.15719"
              y1="1"
              y2="12.4098"
            >
              <stop stopColor="#F3DDC4" />
              <stop offset="0.378992" stopColor="#F3DDC4" />
              <stop offset="0.46253" stopColor="#F3DDC4" />
              <stop offset="1" stopColor="#74523F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group71() {
  return (
    <div className="absolute flex h-[11.31px] items-center justify-center left-[49.76px] top-[37.95px] w-[5.365px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[11.31px] relative w-[5.365px]">
          <div className="absolute inset-[-8.84%_-18.64%]">
            <svg
              className="block size-full"
              fill="none"
              height="13.3104"
              preserveAspectRatio="none"
              viewBox="0 0 7.36542 13.3104"
              width="7.36542"
            >
              <g id="Group 312">
                <path
                  d={svgPaths.p1b486bf0}
                  fill="url(#paint0_linear_0_18)"
                  id="Vector 312"
                />
                <path
                  d={svgPaths.p1b486bf0}
                  id="Vector 313"
                  stroke="url(#paint1_linear_0_18)"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_0_18"
                  x1="3.68271"
                  x2="3.68271"
                  y1="1"
                  y2="12.3104"
                >
                  <stop stopColor="#EFD9BD" />
                  <stop offset="1" stopColor="#C39470" />
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_0_18"
                  x1="1"
                  x2="3.15719"
                  y1="1"
                  y2="12.4098"
                >
                  <stop stopColor="#F3DDC4" />
                  <stop offset="0.378992" stopColor="#F3DDC4" />
                  <stop offset="0.46253" stopColor="#F3DDC4" />
                  <stop offset="1" stopColor="#74523F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function Group69() {
  return (
    <div className="absolute h-[22.369px] left-[18.17px] top-[48.19px] w-[29.063px]">
      <div className="absolute inset-[-4.47%_-3.44%_-2.87%_-3.44%]">
        <svg
          className="block size-full"
          fill="none"
          height="24.01"
          preserveAspectRatio="none"
          viewBox="0 0 31.0635 24.01"
          width="31.0635"
        >
          <g id="Group 310">
            <path
              d={svgPaths.p24d70b00}
              fill="#BB9986"
              id="Vector 301"
              stroke="url(#paint0_linear_0_405)"
              strokeWidth="2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p387a200}
              fill="#8C685C"
              fillRule="evenodd"
              id="Intersect"
              stroke="url(#paint1_linear_0_405)"
              strokeWidth="2"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3be39580}
              fill="#8C685C"
              fillRule="evenodd"
              id="Intersect_2"
              stroke="url(#paint2_linear_0_405)"
              strokeWidth="2"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_405"
              x1="8.30349"
              x2="22.8816"
              y1="18.2982"
              y2="19.7145"
            >
              <stop stopColor="#D8B697" />
              <stop offset="0.374385" stopColor="#F0D6BD" />
              <stop offset="0.71988" stopColor="#C89E78" />
              <stop offset="0.9381" stopColor="#DFCBB9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_405"
              x1="0.999906"
              x2="7.32233"
              y1="15.1017"
              y2="15.4263"
            >
              <stop stopColor="#D8B697" />
              <stop offset="0.374385" stopColor="#F0D6BD" />
              <stop offset="0.71988" stopColor="#C89E78" />
              <stop offset="0.9381" stopColor="#DFCBB9" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_405"
              x1="30.0636"
              x2="23.7411"
              y1="15.1017"
              y2="15.4263"
            >
              <stop stopColor="#D8B697" />
              <stop offset="0.374385" stopColor="#F0D6BD" />
              <stop offset="0.71988" stopColor="#C89E78" />
              <stop offset="0.9381" stopColor="#DFCBB9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group67() {
  return (
    <div className="absolute contents left-[18.17px] top-[48.19px]">
      <Group69 />
    </div>
  )
}

function Group68() {
  return (
    <div className="absolute contents left-[18.17px] top-[48.19px]">
      <Group67 />
    </div>
  )
}

function Group63() {
  return (
    <div className="absolute h-[38.656px] left-[14px] top-[24.37px] w-[37.26px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        height="38.6556"
        preserveAspectRatio="none"
        viewBox="0 0 37.2598 38.6556"
        width="37.2598"
      >
        <g id="Group 166">
          <path
            d={svgPaths.p20d16000}
            fill="url(#paint0_linear_0_4)"
            id="Union"
          />
          <path
            d={svgPaths.p18108b00}
            fill="url(#paint1_linear_0_4)"
            id="Union_2"
          />
          <g filter="url(#filter0_f_0_4)" id="Union_3">
            <path d={svgPaths.p18108b00} stroke="url(#paint2_linear_0_4)" />
          </g>
          <g id="Mask Group" opacity="0.5">
            <mask
              height="28"
              id="mask0_0_4"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="30"
              x="4"
              y="5"
            >
              <path d={svgPaths.p312f8b00} fill="#A6D3DE" id="Union_4" />
            </mask>
            <g mask="url(#mask0_0_4)">
              <path
                d={svgPaths.p312f8b00}
                fill="url(#paint3_radial_0_4)"
                id="Innershadow0.1fill"
              />
              <g id="Group 57">
                <path
                  d={svgPaths.p19409580}
                  fill="url(#paint4_linear_0_4)"
                  id="Vector 5"
                  opacity="0.5"
                />
                <path
                  d={svgPaths.p2d018400}
                  fill="url(#paint5_linear_0_4)"
                  id="Vector 6"
                  opacity="0.5"
                />
                <path
                  d={svgPaths.p2d125100}
                  fill="url(#paint6_linear_0_4)"
                  id="Vector 7"
                  opacity="0.5"
                />
                <rect
                  fill="url(#paint7_linear_0_4)"
                  height="16.8509"
                  id="Rectangle 3"
                  width="29.0627"
                  x="4.17285"
                  y="17.53"
                />
              </g>
              <g filter="url(#filter1_i_0_4)" id="Innershadow0.1fill_2">
                <path
                  d={svgPaths.p312f8b00}
                  fill="#F5C4AF"
                  fillOpacity="0.03"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="31.4092"
            id="filter0_f_0_4"
            width="33.7517"
            x="1.73203"
            y="3.5896"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_0_4"
              stdDeviation="0.3"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="26.8834"
            id="filter1_i_0_4"
            width="29.0627"
            x="4.17285"
            y="5.87845"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6.72414" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.283333 0 0 0 0 0.158667 0 0 0 0 0.0566667 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_0_4"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_0_4"
            x1="10.8054"
            x2="24.742"
            y1="4.65722"
            y2="35.6688"
          >
            <stop stopColor="#F1DCC1" />
            <stop offset="1" stopColor="#BD8A65" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_0_4"
            x1="10.6566"
            x2="22.7366"
            y1="7.11889"
            y2="32.0872"
          >
            <stop stopColor="#BF8E69" />
            <stop offset="1" stopColor="#E4C196" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_0_4"
            x1="12.2215"
            x2="25.2606"
            y1="6.25398"
            y2="32.5282"
          >
            <stop stopColor="#EBD4B7" />
            <stop offset="1" stopColor="#FFE3CE" />
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(18.7042 19.3202) rotate(90) scale(15.0621 14.5313)"
            gradientUnits="userSpaceOnUse"
            id="paint3_radial_0_4"
            r="1"
          >
            <stop stopColor="#E3C29C" />
            <stop offset="1" stopColor="#D1A479" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_0_4"
            x1="18.7045"
            x2="18.7045"
            y1="3.66161"
            y2="34.9774"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_0_4"
            x1="0.763847"
            x2="15.4903"
            y1="6.49487"
            y2="35.0643"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_0_4"
            x1="35.3381"
            x2="20.6116"
            y1="6.49486"
            y2="35.0643"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F2EDED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_0_4"
            x1="18.7042"
            x2="18.6343"
            y1="24.837"
            y2="33.3369"
          >
            <stop offset="0.291667" stopColor="#FFFAF7" stopOpacity="0" />
            <stop offset="1" stopColor="#E4CBAD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function Group64() {
  return (
    <div className="absolute contents left-[14px] top-[24.37px]">
      <Group63 />
    </div>
  )
}

function Group65() {
  return (
    <div className="absolute contents left-[14px] top-[24.37px]">
      <Group64 />
    </div>
  )
}

function Group66() {
  return (
    <div className="absolute contents left-[14px] top-[24.37px]">
      <Group65 />
    </div>
  )
}

function Group72() {
  return (
    <div className="absolute contents left-[14px] top-[24.37px]">
      <Group71 />
      <Group68 />
      <div className="absolute flex h-[9.514px] items-center justify-center left-[41.57px] top-[56.11px] w-[5.142px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[9.514px] relative w-[5.142px]">
            <div className="absolute inset-[0_-9.72%_-8.65%_-9.72%]">
              <svg
                className="block size-full"
                fill="none"
                height="10.3372"
                preserveAspectRatio="none"
                viewBox="0 0 6.14186 10.3372"
                width="6.14186"
              >
                <path
                  d={svgPaths.p335c1a80}
                  id="Vector 315"
                  stroke="url(#paint0_linear_0_17)"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_0_17"
                    x1="0.499923"
                    x2="5.6731"
                    y1="7.35733"
                    y2="7.77543"
                  >
                    <stop stopColor="#D8B697" />
                    <stop offset="0.374385" stopColor="#F0D6BD" />
                    <stop offset="0.71988" stopColor="#C89E78" />
                    <stop offset="0.9381" stopColor="#DFCBB9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[10.379px] left-[25.99px] top-[59.64px] w-[13.413px]"
        data-name="Union"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height="10.3789"
          preserveAspectRatio="none"
          viewBox="0 0 13.4131 10.3789"
          width="13.4131"
        >
          <path
            d={svgPaths.p1954d0f0}
            fill="url(#paint0_linear_0_284)"
            id="Union"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_284"
              x1="0.298068"
              x2="11.8716"
              y1="3.06046"
              y2="8.37435"
            >
              <stop offset="0.192454" stopColor="#DFCBB9" />
              <stop offset="0.475371" stopColor="#D8B290" />
              <stop offset="0.678187" stopColor="#DEBFA4" />
              <stop offset="0.866423" stopColor="#DFCBB9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[9.514px] left-[18.76px] top-[56.11px] w-[5.142px]">
        <div className="absolute inset-[0_-9.72%_-8.65%_-9.72%]">
          <svg
            className="block size-full"
            fill="none"
            height="10.3372"
            preserveAspectRatio="none"
            viewBox="0 0 6.14186 10.3372"
            width="6.14186"
          >
            <path
              d={svgPaths.p335c1a80}
              id="Vector 314"
              stroke="url(#paint0_linear_0_227)"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_0_227"
                x1="0.499923"
                x2="5.6731"
                y1="7.35733"
                y2="7.77543"
              >
                <stop stopColor="#D8B697" />
                <stop offset="0.374385" stopColor="#F0D6BD" />
                <stop offset="0.71988" stopColor="#C89E78" />
                <stop offset="0.9381" stopColor="#DFCBB9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Group66 />
    </div>
  )
}

function Group73() {
  return (
    <div className="absolute contents left-[10.12px] top-[24.37px]">
      <Group70 />
      <Group72 />
    </div>
  )
}

function Group74() {
  return (
    <div className="absolute h-[27.399px] left-[29.35px] top-[30.49px] w-[6.42px]">
      <div className="absolute inset-[-13.2%_-118.3%_-39.6%_-107.03%]">
        <svg
          className="block size-full"
          fill="none"
          height="41.865"
          preserveAspectRatio="none"
          viewBox="0 0 20.8856 41.865"
          width="20.8856"
        >
          <g filter="url(#filter0_d_0_67)" id="Group 381">
            <g filter="url(#filter1_d_0_67)" id="Path 9">
              <path
                clipRule="evenodd"
                d={svgPaths.pa358100}
                fill="url(#paint0_linear_0_67)"
                fillRule="evenodd"
                id="Mask"
              />
              <mask
                height="25"
                id="mask0_0_67"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
                width="8"
                x="6"
                y="3"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pa358100}
                  fill="white"
                  fillRule="evenodd"
                  id="Mask_2"
                />
              </mask>
              <g mask="url(#mask0_0_67)">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p122a0d80}
                  fill="url(#paint1_linear_0_67)"
                  fillRule="evenodd"
                  id="Path 10"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p38623400}
                  fill="url(#paint2_linear_0_67)"
                  fillRule="evenodd"
                  id="Path 11"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p22b0d880}
                  fill="url(#paint3_linear_0_67)"
                  fillRule="evenodd"
                  id="Path 12"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.pd5b4400}
                  fill="url(#paint4_linear_0_67)"
                  fillRule="evenodd"
                  id="Path 13"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1e43b780}
                  fill="#E1C2A4"
                  fillRule="evenodd"
                  id="Path 9_2"
                />
              </g>
            </g>
            <g filter="url(#filter2_d_0_67)" id="ç¬å°">
              <path
                d={svgPaths.p2828a600}
                fill="url(#paint5_linear_0_67)"
                id="Combined Shape"
              />
              <g id="Object">
                <mask
                  height="5"
                  id="mask1_0_67"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: "luminance" }}
                  width="2"
                  x="9"
                  y="27"
                >
                  <path
                    d={svgPaths.p12cd7000}
                    fill="white"
                    id="Combined Shape_2"
                  />
                </mask>
                <g mask="url(#mask1_0_67)">
                  <path
                    clipRule="evenodd"
                    d={svgPaths.p2ec87d00}
                    fill="url(#paint6_linear_0_67)"
                    fillRule="evenodd"
                    id="Rectangle"
                  />
                  <rect
                    fill="url(#paint7_linear_0_67)"
                    height="0.538375"
                    id="Rectangle_2"
                    opacity="0.6"
                    width="1.80904"
                    x="9.40541"
                    y="27.374"
                  />
                </g>
              </g>
              <path
                clipRule="evenodd"
                d={svgPaths.p243cc80}
                fill="url(#paint8_linear_0_67)"
                fillRule="evenodd"
                id="Mask Copy 2"
              />
              <mask
                height="3"
                id="mask2_0_67"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "luminance" }}
                width="2"
                x="9"
                y="29"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.p243cc80}
                  fill="white"
                  fillRule="evenodd"
                  id="Mask Copy 2_2"
                />
              </mask>
              <g mask="url(#mask2_0_67)" />
            </g>
            <g filter="url(#filter3_d_0_67)" id="Rectangle_3">
              <rect
                fill="url(#paint9_linear_0_67)"
                height="0.532254"
                rx="0.266127"
                width="1.1476"
                x="9.69057"
                y="27.1863"
              />
            </g>
            <path
              clipRule="evenodd"
              d={svgPaths.p18c16380}
              fill="white"
              fillRule="evenodd"
              id="Rectangle Copy"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="35.3993"
              id="filter0_d_0_67"
              width="14.4199"
              x="2.87123"
              y="3.61644"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.566667 0 0 0 0 0.374405 0 0 0 0 0.165278 0 0 0 0.51 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_67"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_67"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="38.2841"
              id="filter1_d_0_67"
              width="20.8856"
              x="2.98023e-08"
              y="-7.00814e-09"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.361644" dy="3.61644" />
              <feGaussianBlur stdDeviation="3.61644" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.620833 0 0 0 0 0.428789 0 0 0 0 0.320764 0 0 0 0.44 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_67"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_67"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="18.0467"
              id="filter2_d_0_67"
              width="15.6796"
              x="2.83105"
              y="23.8184"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.361644" dy="3.61644" />
              <feGaussianBlur stdDeviation="3.61644" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.620833 0 0 0 0 0.428789 0 0 0 0 0.320764 0 0 0 0.44 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_67"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_67"
                mode="normal"
                result="shape"
              />
            </filter>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="14.998"
              id="filter3_d_0_67"
              width="15.6134"
              x="2.81934"
              y="23.5699"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="0.361644" dy="3.61644" />
              <feGaussianBlur stdDeviation="3.61644" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.620833 0 0 0 0 0.428789 0 0 0 0 0.320764 0 0 0 0.44 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_0_67"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_67"
                mode="normal"
                result="shape"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_0_67"
              x1="9.57271"
              x2="14.347"
              y1="-2.35407"
              y2="-1.96298"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_0_67"
              x1="12.5521"
              x2="13.8772"
              y1="12.1484"
              y2="12.312"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_0_67"
              x1="7.52654"
              x2="8.94357"
              y1="12.9052"
              y2="13.179"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_0_67"
              x1="12.0268"
              x2="13.3681"
              y1="6.81536"
              y2="7.16458"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_0_67"
              x1="11.5263"
              x2="12.7237"
              y1="4.1895"
              y2="4.44174"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_0_67"
              x1="10.2126"
              x2="11.1111"
              y1="26.5372"
              y2="26.6297"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint6_linear_0_67"
              x1="11.0202"
              x2="12.2557"
              y1="26.7978"
              y2="26.9857"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint7_linear_0_67"
              x1="10.1667"
              x2="10.8296"
              y1="27.239"
              y2="27.916"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint8_linear_0_67"
              x1="10.2127"
              x2="11.0524"
              y1="29.3996"
              y2="29.6392"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint9_linear_0_67"
              x1="10.1735"
              x2="10.7746"
              y1="27.0529"
              y2="27.4468"
            >
              <stop offset="0.168737" stopColor="#FFEFDC" />
              <stop offset="0.360439" stopColor="#FFF3E3" />
              <stop offset="0.47754" stopColor="#FFEAD1" />
              <stop offset="0.655872" stopColor="#F0DBC0" />
              <stop offset="0.80404" stopColor="#F0DBC2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function Group76() {
  return (
    <div className="absolute contents left-[10.12px] top-[24.37px]">
      <Group73 />
      <Group74 />
    </div>
  )
}

function Container16() {
  return (
    <div
      className="h-[117.45px] relative shrink-0 w-[65.25px]"
      data-name="Container"
    >
      <Container17 />
      <Container18 />
      <Group76 />
    </div>
  )
}

function Link2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Link"
    >
      <Container16 />
    </div>
  )
}

function Container1() {
  return (
    <div
      className="absolute content-stretch flex gap-[16.313px] inset-0 items-end justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%] pb-[32.625px] pt-[6.525px]"
      style={{ maskImage: `url("${imgContainer}")` }}
      data-name="Container"
    >
      <Link />
      <Link1 />
      <Link2 />
    </div>
  )
}

function MaskGroup() {
  return (
    <div
      className="h-[195.75px] relative shrink-0 w-full"
      data-name="Mask Group"
    >
      <Container1 />
    </div>
  )
}

function Container() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start justify-center left-0 min-h-[195.75px] right-0 top-0"
      data-name="Container"
    >
      <MaskGroup />
    </div>
  )
}

function Container27() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">4</p>
      </div>
    </div>
  )
}

function Background() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container27 />
    </div>
  )
}

function Container26() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background />
    </div>
  )
}

function Container31() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white w-full">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container30() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container31 />
    </div>
  )
}

function Container35() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container36() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3611</p>
      </div>
    </div>
  )
}

function Container34() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container35 />
      <Container36 />
    </div>
  )
}

function Container38() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container39() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">107</p>
      </div>
    </div>
  )
}

function Container37() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container38 />
      <Container39 />
    </div>
  )
}

function Container33() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container34 />
      <Container37 />
    </div>
  )
}

function Container32() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container33 />
    </div>
  )
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container32 />
    </div>
  )
}

function Container29() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container30 />
      <Margin />
    </div>
  )
}

function Container28() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container29 />
    </div>
  )
}

function Container25() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container26 />
        <Container28 />
      </div>
    </div>
  )
}

function Link3() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  )
}

function Container42() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">5</p>
      </div>
    </div>
  )
}

function Background1() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container42 />
    </div>
  )
}

function Container41() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background1 />
    </div>
  )
}

function Container46() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white w-full">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container45() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container46 />
    </div>
  )
}

function Container50() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container51() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3599</p>
      </div>
    </div>
  )
}

function Container49() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container50 />
      <Container51 />
    </div>
  )
}

function Container53() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container54() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">146</p>
      </div>
    </div>
  )
}

function Container52() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container53 />
      <Container54 />
    </div>
  )
}

function Container48() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container49 />
      <Container52 />
    </div>
  )
}

function Container47() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container48 />
    </div>
  )
}

function Margin1() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container47 />
    </div>
  )
}

function Container44() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container45 />
      <Margin1 />
    </div>
  )
}

function Container43() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container44 />
    </div>
  )
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container41 />
        <Container43 />
      </div>
    </div>
  )
}

function Link4() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  )
}

function Container57() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">6</p>
      </div>
    </div>
  )
}

function Background2() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container57 />
    </div>
  )
}

function Container56() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background2 />
    </div>
  )
}

function Container61() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white whitespace-nowrap">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container60() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container61 />
    </div>
  )
}

function Container65() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container66() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3589</p>
      </div>
    </div>
  )
}

function Container64() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container65 />
      <Container66 />
    </div>
  )
}

function Container68() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container69() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">100</p>
      </div>
    </div>
  )
}

function Container67() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container68 />
      <Container69 />
    </div>
  )
}

function Container63() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container64 />
      <Container67 />
    </div>
  )
}

function Container62() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container63 />
    </div>
  )
}

function Margin2() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container62 />
    </div>
  )
}

function Container59() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container60 />
      <Margin2 />
    </div>
  )
}

function Container58() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container59 />
    </div>
  )
}

function Container55() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container56 />
        <Container58 />
      </div>
    </div>
  )
}

function Link5() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container55 />
        </div>
      </div>
    </div>
  )
}

function Container72() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">7</p>
      </div>
    </div>
  )
}

function Background3() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container72 />
    </div>
  )
}

function Container71() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background3 />
    </div>
  )
}

function Container76() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white whitespace-nowrap">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container75() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container76 />
    </div>
  )
}

function Container80() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container81() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3506</p>
      </div>
    </div>
  )
}

function Container79() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container80 />
      <Container81 />
    </div>
  )
}

function Container83() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container84() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">88</p>
      </div>
    </div>
  )
}

function Container82() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container83 />
      <Container84 />
    </div>
  )
}

function Container78() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container79 />
      <Container82 />
    </div>
  )
}

function Container77() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container78 />
    </div>
  )
}

function Margin3() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container77 />
    </div>
  )
}

function Container74() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container75 />
      <Margin3 />
    </div>
  )
}

function Container73() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container74 />
    </div>
  )
}

function Container70() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container71 />
        <Container73 />
      </div>
    </div>
  )
}

function Link6() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container70 />
        </div>
      </div>
    </div>
  )
}

function Container87() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">8</p>
      </div>
    </div>
  )
}

function Background4() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container87 />
    </div>
  )
}

function Container86() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background4 />
    </div>
  )
}

function Container88() {
  return (
    <div
      className="h-[32.625px] relative shrink-0 w-[208px]"
      data-name="Container"
    />
  )
}

function Container85() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container86 />
        <div
          className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
          data-name="Container"
        >
          <div
            className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
            data-name="Container"
          >
            <Container91 />
            <Margin4 />
          </div>
        </div>
      </div>
    </div>
  )
}

function Container92() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white whitespace-nowrap">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container91() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container92 />
    </div>
  )
}

function Container96() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container97() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3506</p>
      </div>
    </div>
  )
}

function Container95() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container96 />
      <Container97 />
    </div>
  )
}

function Container99() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container100() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">88</p>
      </div>
    </div>
  )
}

function Container98() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container99 />
      <Container100 />
    </div>
  )
}

function Container94() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container95 />
      <Container98 />
    </div>
  )
}

function Container93() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container94 />
    </div>
  )
}

function Margin4() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container93 />
    </div>
  )
}

function Container90() {
  return (
    <div
      className="-translate-y-1/2 absolute content-stretch flex items-center justify-between left-[7px] overflow-clip right-0 top-1/2"
      data-name="Container"
    >
      <Container91 />
      <Margin4 />
    </div>
  )
}

function Container89() {
  return (
    <div
      className="h-[32.625px] relative shrink-0 w-[211px]"
      data-name="Container"
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Container90 />
      </div>
    </div>
  )
}

function Link7() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container85 />
        </div>
      </div>
    </div>
  )
}

function Container103() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">9</p>
      </div>
    </div>
  )
}

function Background5() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container103 />
    </div>
  )
}

function Container102() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background5 />
    </div>
  )
}

function Container107() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white w-full">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container106() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container107 />
    </div>
  )
}

function Container111() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container112() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3490</p>
      </div>
    </div>
  )
}

function Container110() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container111 />
      <Container112 />
    </div>
  )
}

function Container114() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container115() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">50</p>
      </div>
    </div>
  )
}

function Container113() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container114 />
      <Container115 />
    </div>
  )
}

function Container109() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container110 />
      <Container113 />
    </div>
  )
}

function Container108() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container109 />
    </div>
  )
}

function Margin5() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container108 />
    </div>
  )
}

function Container105() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container106 />
      <Margin5 />
    </div>
  )
}

function Container104() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container105 />
    </div>
  )
}

function Container101() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container102 />
        <Container104 />
      </div>
    </div>
  )
}

function Link8() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container101 />
        </div>
      </div>
    </div>
  )
}

function Container118() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-center text-white whitespace-nowrap">
        <p className="leading-[16.313px]">10</p>
      </div>
    </div>
  )
}

function Background6() {
  return (
    <div
      className="bg-surface-hover content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[814.809px] self-stretch shrink-0 w-[16.313px]"
      data-name="Background"
    >
      <Container118 />
    </div>
  )
}

function Container117() {
  return (
    <div
      className="content-stretch flex items-start relative shrink-0"
      data-name="Container"
    >
      <Background6 />
    </div>
  )
}

function Container122() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.419px] text-white whitespace-nowrap">
        <p className="leading-[16.313px]">Lorem</p>
      </div>
    </div>
  )
}

function Container121() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px relative"
      data-name="Container"
    >
      <Container122 />
    </div>
  )
}

function Container126() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Rating:</p>
      </div>
    </div>
  )
}

function Container127() {
  return (
    <div
      className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-[26.108px]"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-right text-white whitespace-nowrap">
        <p className="leading-[13.05px]">3453</p>
      </div>
    </div>
  )
}

function Container125() {
  return (
    <div
      className="content-stretch flex gap-[1.623px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container126 />
      <Container127 />
    </div>
  )
}

function Container129() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-text-secondary text-[9.788px] whitespace-nowrap">
        <p className="leading-[13.05px]">Attended:</p>
      </div>
    </div>
  )
}

function Container130() {
  return (
    <div
      className="content-stretch flex flex-col items-start overflow-clip relative shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.788px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[13.05px]">65</p>
      </div>
    </div>
  )
}

function Container128() {
  return (
    <div
      className="content-stretch flex gap-[1.631px] items-center relative shrink-0"
      data-name="Container"
    >
      <Container129 />
      <Container130 />
    </div>
  )
}

function Container124() {
  return (
    <div
      className="content-stretch flex flex-col h-[32.625px] items-end justify-center relative shrink-0"
      data-name="Container"
    >
      <Container125 />
      <Container128 />
    </div>
  )
}

function Container123() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0"
      data-name="Container"
    >
      <Container124 />
    </div>
  )
}

function Margin6() {
  return (
    <div
      className="content-stretch flex flex-col items-start pl-[9.788px] relative shrink-0"
      data-name="Margin"
    >
      <Container123 />
    </div>
  )
}

function Container120() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container121 />
      <Margin6 />
    </div>
  )
}

function Container119() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative"
      data-name="Container"
    >
      <Container120 />
    </div>
  )
}

function Container116() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13.05px] items-center relative size-full">
        <Container117 />
        <Container119 />
      </div>
    </div>
  )
}

function Link9() {
  return (
    <div
      className="bg-surface-base blur-[0px] drop-shadow-[0px_22.837px_22.43px_rgba(0,0,0,0.4)] relative rounded-[13.05px] shrink-0 w-full"
      data-name="Link"
    >
      <div
        aria-hidden
        className="absolute border-[0.816px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[13.05px]"
      />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.703px] py-[9.788px] relative size-full">
          <Container116 />
        </div>
      </div>
    </div>
  )
}

function Container24() {
  return (
    <div
      className="content-stretch flex flex-col gap-[4.894px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  )
}

function Container23() {
  return (
    <div
      className="absolute content-stretch flex flex-col items-start left-0 min-h-[394.76251220703125px] right-0 top-[200.64px]"
      data-name="Container"
    >
      <Container24 />
    </div>
  )
}

export function LeaderboardBlock() {
  return (
    <div className="relative size-full">
      <Container />
      <Container23 />
    </div>
  )
}
