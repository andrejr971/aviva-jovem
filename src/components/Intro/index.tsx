import { Container, Description, TextInvite } from './styles';

export function Intro() {
  return (
    <Container>
      <svg
        width="451"
        height="464"
        viewBox="0 0 451 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo">
          <circle
            id="arco"
            cx="220"
            cy="232"
            r="196.5"
            stroke="url(#paint0_linear)"
            strokeWidth="25"
          />
          <path
            id="fire-1"
            d="M281.782 305.5C170.282 233.5 152.014 138.094 93.2817 122C109.217 155.818 118.282 188.5 93.2817 204C68.2818 219.5 39.3063 236.32 51.2816 284.5C28.736 260.912 4.89601 242.21 5.99995 189C-25.6387 329.344 82 463 227.782 463C383 457 480 323 443 175C438.485 239.012 399.694 290.468 352 317C352 317 393.282 377.5 281.782 305.5Z"
            fill="#DA251C"
          />
          <path
            id="fire-2"
            d="M328.282 249C352.501 138.055 333.078 80.9541 163.282 0C193.71 137.996 142.282 173.5 84.2817 249C18.3118 326.5 85.282 462.5 208.782 462.5C332.282 462.5 420.546 362.342 374.782 173C362.971 205.076 352.547 224.69 328.282 249Z"
            fill="#E46713"
          />
          <path
            id="fire-3"
            opacity="0.5"
            d="M241.782 299.5C244.782 253.5 300.782 158 203.282 108.5C262.282 197.5 176.282 290 144.282 345.5C112.282 401 161.282 463 205.782 463C289.282 469.5 360.033 398.151 289.282 303.5C270.782 354.5 238.782 345.5 241.782 299.5Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="220"
            y1="-18.5"
            x2="220"
            y2="492"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDF9F7" />
            <stop offset="0.669792" stopColor="#D1CFCB" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="225.626"
            y1="108.5"
            x2="225.626"
            y2="463"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFF500" />
            <stop offset="1" stopColor="#E06415" />
          </linearGradient>
        </defs>
      </svg>
      <Description>
        Aviva Jovem
        <br />
        <span>Voltou!!</span>
      </Description>

      <TextInvite>
        Você é o nosso <span>convidado!!</span>
      </TextInvite>
    </Container>
  );
}
