import { FC } from "react";

interface BejamasLogoInterface {
  windowWidth: number
}

const BejamasLogo: FC<BejamasLogoInterface> =  ({ windowWidth }) => {

  let width = windowWidth > 980 ? "200" : "159" 
  let height = windowWidth > 980 ? "40" : "26"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 124 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.81046 16.5997C0.789541 16.5997 0 15.8328 0 14.9259V1.88357C0 0.930564 0.835856 0.209595 1.81046 0.209595H5.73334C9.21448 0.209595 10.9552 2.44172 10.9552 4.76588C10.9552 6.39353 9.91098 7.39279 8.51839 8.06744C9.9573 8.64807 11.3965 9.69488 11.3965 11.7164C11.3965 14.4374 9.21435 16.5999 5.6405 16.5999H1.81046V16.5997ZM5.91867 6.62584C6.73113 6.62584 7.70566 6.06769 7.70566 4.81241C7.70566 3.92971 7.2878 3.13871 6.08094 3.13871H3.24957V6.62591H5.91867V6.62584ZM3.24964 9.60175V13.6463H5.84895C7.38084 13.6463 8.14712 12.8799 8.14712 11.67C8.14712 10.3447 7.2189 9.60175 5.98831 9.60175H3.24964Z"
        fill="black"
      />
      <path
        d="M25.32 16.5997H19.1694C18.0322 16.5997 17.0115 16.2042 17.0115 14.9491V1.86008C17.0115 1.04673 17.7768 0.209473 18.7985 0.209473H25.0879C25.9704 0.209473 26.7127 0.907076 26.7127 1.72056C26.7127 2.55796 25.9704 3.16202 25.0879 3.16202H20.2607V6.9049H24.6473C25.4594 6.9049 26.2489 7.53226 26.2489 8.36973C26.2489 9.2061 25.5522 9.85751 24.6473 9.85751H20.2607V13.6462H25.32C26.1792 13.6462 26.9449 14.2975 26.9449 15.0885C26.9449 15.926 26.2027 16.5997 25.32 16.5997Z"
        fill="black"
      />
      <path
        d="M39.3838 11.136C39.3838 14.6691 38.1309 16.8089 33.9998 16.8089C33.1173 16.8089 31.3301 16.7159 31.3301 15.2047C31.3301 14.2744 32.1891 13.739 32.8387 13.739C33.3729 13.739 33.6748 13.8788 34.2544 13.8788C35.8092 13.8788 36.1346 12.8328 36.1346 11.1358V1.48765C36.1345 0.674508 36.831 0 37.7594 0C38.6176 0 39.3839 0.697807 39.3839 1.48772L39.3838 11.136Z"
        fill="black"
      />
      <path
        d="M77.5148 15.3442C77.5148 16.1345 76.7715 16.8089 75.913 16.8089C75.0315 16.8089 74.2651 16.1345 74.2651 15.3442V7.34595L71.6195 12.5538C71.3177 13.1576 70.7369 13.4368 70.0877 13.4368C69.4607 13.4368 68.8809 13.1576 68.5789 12.5538L65.9333 7.34595V15.3443C65.9333 16.1345 65.167 16.809 64.2623 16.809C63.3797 16.809 62.684 16.1345 62.684 15.3443V1.53445C62.684 0.651346 63.403 0.000204376 64.355 0.000204376C65.0974 0.000204376 65.6779 0.302544 65.9798 0.907156L70.1108 9.11325L74.2419 0.883994C74.5672 0.209485 75.1933 0 75.8434 0C76.7949 0 77.5148 0.697807 77.5148 1.53432V15.3442Z"
        fill="black"
      />
      <path
        d="M95.8482 14.8093L91.3225 1.58092C90.9973 0.651278 90.5329 0 89.4191 0C88.3053 0 87.841 0.674508 87.5388 1.58085L83.0132 14.8093C82.9668 14.9257 82.9442 15.2049 82.9442 15.3212C82.9442 16.2043 83.7097 16.809 84.6148 16.809C85.172 16.809 85.9151 16.3903 86.1464 15.7166C86.1464 15.7166 89.3262 5.18447 89.4191 4.46377C89.5119 5.18447 92.6687 15.7166 92.6687 15.7166C92.9008 16.3673 93.643 16.809 94.2466 16.809C95.1981 16.809 95.9179 16.2043 95.9179 15.3212C95.918 15.2049 95.8948 14.9258 95.8482 14.8093Z"
        fill="black"
      />
      <path
        d="M57.394 14.8093L52.8681 1.58092C52.5428 0.651278 52.0786 0 50.9649 0C49.8509 0 49.3865 0.674508 49.0844 1.58085L44.5587 14.8093C44.5121 14.9257 44.4897 15.2049 44.4897 15.3212C44.4897 16.2043 45.2552 16.809 46.1601 16.809C46.7174 16.809 47.4605 16.3903 47.692 15.7166C47.692 15.7166 50.8717 5.18447 50.9649 4.46377C51.0576 5.18447 54.2142 15.7166 54.2142 15.7166C54.4464 16.3673 55.1886 16.809 55.7922 16.809C56.7435 16.809 57.4634 16.2043 57.4634 15.3212C57.4635 15.2049 57.4405 14.9258 57.394 14.8093Z"
        fill="black"
      />
      <path
        d="M107.475 10.275C106.987 10.0665 106.407 9.85746 105.78 9.64811C103.506 8.95023 101.046 8.18341 101.046 4.8123C101.046 1.81349 103.135 0 106.431 0C107.8 0 111.095 0.34887 111.095 2.09267C111.095 2.85956 110.492 3.5573 109.471 3.5573C109.053 3.5573 108.728 3.41771 108.333 3.30156C107.893 3.13846 107.382 2.95269 106.57 2.95269C105.432 2.95269 104.364 3.34802 104.364 4.71924C104.364 5.74187 104.945 6.09088 105.339 6.27686C105.943 6.57927 106.5 6.76532 107.01 6.90491C109.285 7.62526 111.769 8.41606 111.769 11.7163C111.769 14.949 109.308 16.809 105.989 16.809C104.272 16.809 101.022 16.2043 101.022 14.5759C101.022 13.8323 101.696 13.1113 102.554 13.1113C102.902 13.1113 103.274 13.2275 103.714 13.3906C104.272 13.5767 105.015 13.8559 106.012 13.8559C107.614 13.8559 108.426 13.1346 108.426 11.856C108.426 10.8099 107.893 10.4613 107.475 10.275Z"
        fill="black"
      />
      <path
        d="M122.398 16.7129C123.211 16.7129 124 17.3636 124 18.2007C124 19.0374 123.304 19.6653 122.398 19.6653H116.218C115.313 19.6653 114.616 19.0374 114.616 18.2007C114.616 17.3636 115.406 16.7129 116.218 16.7129H122.398Z"
        fill="black"
      />
    </svg>
  );
};

export default BejamasLogo;
