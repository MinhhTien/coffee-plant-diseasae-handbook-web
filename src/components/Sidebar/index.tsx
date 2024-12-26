"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "Main Menu",
    menuItems: [
      {
        icon: (
          <svg
            className="text- fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00009 17.2498C8.58588 17.2498 8.25009 17.5856 8.25009 17.9998C8.25009 18.414 8.58588 18.7498 9.00009 18.7498H15.0001C15.4143 18.7498 15.7501 18.414 15.7501 17.9998C15.7501 17.5856 15.4143 17.2498 15.0001 17.2498H9.00009Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.25C11.2749 1.25 10.6134 1.44911 9.88928 1.7871C9.18832 2.11428 8.37772 2.59716 7.36183 3.20233L5.90622 4.06943C4.78711 4.73606 3.89535 5.26727 3.22015 5.77524C2.52314 6.29963 1.99999 6.8396 1.65907 7.55072C1.31799 8.26219 1.22554 9.0068 1.25519 9.87584C1.2839 10.717 1.43105 11.7397 1.61556 13.0219L1.90792 15.0537C2.14531 16.7036 2.33368 18.0128 2.61512 19.0322C2.90523 20.0829 3.31686 20.9169 4.05965 21.5565C4.80184 22.1956 5.68984 22.4814 6.77634 22.6177C7.83154 22.75 9.16281 22.75 10.8423 22.75H13.1577C14.8372 22.75 16.1685 22.75 17.2237 22.6177C18.3102 22.4814 19.1982 22.1956 19.9404 21.5565C20.6831 20.9169 21.0948 20.0829 21.3849 19.0322C21.6663 18.0129 21.8547 16.7036 22.0921 15.0537L22.3844 13.0219C22.569 11.7396 22.7161 10.717 22.7448 9.87584C22.7745 9.0068 22.682 8.26219 22.3409 7.55072C22 6.8396 21.4769 6.29963 20.7799 5.77524C20.1047 5.26727 19.2129 4.73606 18.0938 4.06943L16.6382 3.20233C15.6223 2.59716 14.8117 2.11428 14.1107 1.7871C13.3866 1.44911 12.7251 1.25 12 1.25ZM8.09558 4.51121C9.15309 3.88126 9.89923 3.43781 10.5237 3.14633C11.1328 2.86203 11.5708 2.75 12 2.75C12.4293 2.75 12.8672 2.86203 13.4763 3.14633C14.1008 3.43781 14.8469 3.88126 15.9044 4.51121L17.2893 5.33615C18.4536 6.02973 19.2752 6.52034 19.8781 6.9739C20.4665 7.41662 20.7888 7.78294 20.9883 8.19917C21.1877 8.61505 21.2706 9.09337 21.2457 9.82469C21.2201 10.5745 21.0856 11.5163 20.8936 12.8511L20.6148 14.7884C20.3683 16.5016 20.1921 17.7162 19.939 18.633C19.6916 19.5289 19.3939 20.0476 18.9616 20.4198C18.5287 20.7926 17.9676 21.0127 17.037 21.1294C16.086 21.2486 14.8488 21.25 13.1061 21.25H10.8939C9.15124 21.25 7.91405 21.2486 6.963 21.1294C6.03246 21.0127 5.47129 20.7926 5.03841 20.4198C4.60614 20.0476 4.30838 19.5289 4.06102 18.633C3.80791 17.7162 3.6317 16.5016 3.3852 14.7884L3.10643 12.851C2.91437 11.5163 2.77991 10.5745 2.75432 9.82469C2.72937 9.09337 2.81229 8.61505 3.01167 8.19917C3.21121 7.78294 3.53347 7.41662 4.12194 6.9739C4.72482 6.52034 5.54643 6.02973 6.71074 5.33615L8.09558 4.51121Z"
              fill=""
            />
          </svg>
        ),
        label: "Trang chủ",
        route: "/",
        // children: [
        //   { label: "eCommerce", route: "/" },
        // ],
      },
      {
        icon: (
          <svg
            className="text- fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7194 4.28063C18.1875 2.75157 15.9375 2.14407 13.3866 2.57063C10.9013 2.98407 8.41032 4.335 6.37501 6.375C4.33969 8.415 2.98688 10.9031 2.57251 13.3884C2.14407 15.9375 2.75157 18.1875 4.28063 19.7194C5.49094 20.9297 7.15219 21.5625 9.06001 21.5625C9.58056 21.561 10.1001 21.5168 10.6134 21.4303C13.0988 21.0159 15.5897 19.665 17.6278 17.6278C19.6659 15.5906 21.0159 13.0988 21.4303 10.6134C21.8559 8.0625 21.2484 5.8125 19.7194 4.28063ZM7.16813 7.16813C9.51751 4.81875 12.4181 3.5625 14.9231 3.5625C16.1025 3.5625 17.1938 3.84375 18.0984 4.4175C16.9201 4.77734 15.8174 5.34921 14.8444 6.105C13.08 7.49813 11.9381 9.44438 11.4488 11.8903C10.5 16.6266 7.04813 18.1875 4.87501 18.7031C2.46563 15.9769 3.45282 10.8834 7.16813 7.16813ZM16.8319 16.8319C13.3763 20.2875 8.72813 21.3844 5.90626 19.5853C7.08458 19.2255 8.18733 18.6536 9.16032 17.8978C10.9247 16.5047 12.0666 14.5584 12.5559 12.1125C13.5 7.37344 16.9519 5.8125 19.1297 5.29688C21.5344 8.02407 20.5472 13.1166 16.8319 16.8319Z"
              fill=""
            />
          </svg>
        ),
        label: "Giống cà phê",
        route: "/coffee",
      },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M11.9999 1.25C9.37654 1.25 7.24989 3.37665 7.24989 6C7.24989 8.62335 9.37654 10.75 11.9999 10.75C14.6232 10.75 16.7499 8.62335 16.7499 6C16.7499 3.37665 14.6232 1.25 11.9999 1.25ZM8.74989 6C8.74989 4.20507 10.205 2.75 11.9999 2.75C13.7948 2.75 15.2499 4.20507 15.2499 6C15.2499 7.79493 13.7948 9.25 11.9999 9.25C10.205 9.25 8.74989 7.79493 8.74989 6Z"
      //         fill=""
      //       />
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M11.9999 12.25C9.68634 12.25 7.55481 12.7759 5.97534 13.6643C4.41937 14.5396 3.24989 15.8661 3.24989 17.5L3.24982 17.602C3.24869 18.7638 3.24728 20.222 4.5263 21.2635C5.15577 21.7761 6.03637 22.1406 7.2261 22.3815C8.41915 22.6229 9.97412 22.75 11.9999 22.75C14.0257 22.75 15.5806 22.6229 16.7737 22.3815C17.9634 22.1406 18.844 21.7761 19.4735 21.2635C20.7525 20.222 20.7511 18.7638 20.75 17.602L20.7499 17.5C20.7499 15.8661 19.5804 14.5396 18.0244 13.6643C16.445 12.7759 14.3134 12.25 11.9999 12.25ZM4.74989 17.5C4.74989 16.6487 5.37127 15.7251 6.71073 14.9717C8.02669 14.2315 9.89516 13.75 11.9999 13.75C14.1046 13.75 15.9731 14.2315 17.289 14.9717C18.6285 15.7251 19.2499 16.6487 19.2499 17.5C19.2499 18.8078 19.2096 19.544 18.5263 20.1004C18.1558 20.4022 17.5364 20.6967 16.4761 20.9113C15.4192 21.1252 13.9741 21.25 11.9999 21.25C10.0257 21.25 8.58063 21.1252 7.52368 20.9113C6.46341 20.6967 5.84401 20.4022 5.47348 20.1004C4.79021 19.544 4.74989 18.8078 4.74989 17.5Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Profile",
      //   route: "/profile",
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Forms",
      //   route: "#",
      //   children: [
      //     { label: "Form Elements", route: "/forms/form-elements" },
      //     { label: "Form Layout", route: "/forms/form-layout" },
      //   ],
      // },
      // {
      //   icon: (
      //     <svg
      //       className="fill-current"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75L10 4.75C8.09318 4.75 6.73851 4.75159 5.71085 4.88976C4.70476 5.02503 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976ZM18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10583 3.24998 9.94359 3.25L14.0564 3.25C15.8942 3.24998 17.3498 3.24997 18.489 3.40314ZM8.25 17C8.25 16.5858 8.58579 16.25 9 16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H9C8.58579 17.75 8.25 17.4142 8.25 17Z"
      //         fill=""
      //       />
      //     </svg>
      //   ),
      //   label: "Tables",
      //   route: "#",
      //   children: [
      //     { label: "Tables", route: "/tables" },
      //   ],
      // },
      {
        icon: (
          <svg
            className="text- fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4.011C8.95198 4.08294 9.83931 4.52006 10.4765 5.231L11.5605 4.1465L12.2675 4.8535L11.0475 6.0735C11.2915 6.5685 11.4285 7.1255 11.4285 7.7145C11.4268 8.83023 11.811 9.91222 12.516 10.777L13.646 9.6465L14.3535 10.3535L13.223 11.484C14.0878 12.189 15.1698 12.5732 16.2855 12.5715C16.6135 12.5715 16.931 12.614 17.2335 12.6935L18.067 11.25L18.933 11.75L18.1645 13.081C18.7234 13.4088 19.1868 13.877 19.5088 14.4392C19.8307 15.0015 20.0001 15.6381 20 16.286C20 16.8295 19.883 17.346 19.673 17.811L20.982 18.567L20.482 19.433L19.1425 18.6595C18.7943 19.0795 18.3577 19.4174 17.8639 19.6492C17.37 19.8809 16.831 20.0007 16.2855 20C16.1905 20 16.0953 19.9988 16 19.9965V21.5H15V19.9335C13.4992 19.7782 12.0401 19.3459 10.697 18.6585L9.933 19.982L9.067 19.482L9.826 18.167C8.84109 17.5566 7.94699 16.8106 7.17 15.951L5.8535 17.268L5.1465 16.5605L6.5275 15.1795C5.69961 14.1 5.05731 12.8901 4.627 11.5995L3.1295 12L2.8705 11.034L4.3505 10.6375C4.11711 9.68087 3.99943 8.69968 4 7.715C4 7.3745 4.046 7.045 4.1315 6.7315L2.75 5.933L3.25 5.067L4.528 5.805C4.79567 5.35876 5.15399 4.97363 5.57979 4.67452C6.0056 4.37541 6.48942 4.16895 7 4.0685V2.5H8V4.011ZM7.7145 5C6.99461 5.00013 6.30424 5.28617 5.79521 5.79521C5.28617 6.30424 5.00013 6.99461 5 7.7145C5 13.947 10.053 19 16.2855 19C16.999 18.9903 17.68 18.7001 18.1811 18.1921C18.6822 17.6842 18.9632 16.9993 18.9632 16.2857C18.9632 15.5722 18.6822 14.8873 18.1811 14.3794C17.68 13.8714 16.999 13.5812 16.2855 13.5715C13.0505 13.5715 10.4285 10.949 10.4285 7.7145C10.4284 6.99478 10.1425 6.30457 9.63365 5.79556C9.12483 5.28655 8.43472 5.0004 7.715 5M7.5 7.5C7.36739 7.5 7.24021 7.55268 7.14645 7.64645C7.05268 7.74021 7 7.86739 7 8C7 8.13261 7.05268 8.25979 7.14645 8.35355C7.24021 8.44732 7.36739 8.5 7.5 8.5C7.63261 8.5 7.75979 8.44732 7.85355 8.35355C7.94732 8.25979 8 8.13261 8 8C8 7.86739 7.94732 7.74021 7.85355 7.64645C7.75979 7.55268 7.63261 7.5 7.5 7.5ZM6 8C6 7.60218 6.15804 7.22064 6.43934 6.93934C6.72064 6.65804 7.10218 6.5 7.5 6.5C7.89782 6.5 8.27936 6.65804 8.56066 6.93934C8.84196 7.22064 9 7.60218 9 8C9 8.39782 8.84196 8.77936 8.56066 9.06066C8.27936 9.34196 7.89782 9.5 7.5 9.5C7.10218 9.5 6.72064 9.34196 6.43934 9.06066C6.15804 8.77936 6 8.39782 6 8ZM11.5 15C11.5 14.8674 11.5527 14.7402 11.6464 14.6464C11.7402 14.5527 11.8674 14.5 12 14.5C12.1326 14.5 12.2598 14.5527 12.3536 14.6464C12.4473 14.7402 12.5 14.8674 12.5 15C12.5 15.1326 12.4473 15.2598 12.3536 15.3536C12.2598 15.4473 12.1326 15.5 12 15.5C11.8674 15.5 11.7402 15.4473 11.6464 15.3536C11.5527 15.2598 11.5 15.1326 11.5 15ZM12 13.5C11.6022 13.5 11.2206 13.658 10.9393 13.9393C10.658 14.2206 10.5 14.6022 10.5 15C10.5 15.3978 10.658 15.7794 10.9393 16.0607C11.2206 16.342 11.6022 16.5 12 16.5C12.3978 16.5 12.7794 16.342 13.0607 16.0607C13.342 15.7794 13.5 15.3978 13.5 15C13.5 14.6022 13.342 14.2206 13.0607 13.9393C12.7794 13.658 12.3978 13.5 12 13.5ZM9.5 12C9.5 12.2652 9.39464 12.5196 9.20711 12.7071C9.01957 12.8946 8.76522 13 8.5 13C8.23478 13 7.98043 12.8946 7.79289 12.7071C7.60536 12.5196 7.5 12.2652 7.5 12C7.5 11.7348 7.60536 11.4804 7.79289 11.2929C7.98043 11.1054 8.23478 11 8.5 11C8.76522 11 9.01957 11.1054 9.20711 11.2929C9.39464 11.4804 9.5 11.7348 9.5 12ZM16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17Z"
              fill=""
            />
          </svg>
        ),
        label: "Bệnh cây cà phê",
        // route: "#",
        // children: [
        //   { label: "Settings", route: "/pages/settings" },
        // ],
        route: "/disease",
      },
      {
        icon: (
          <svg
            className="text- fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.49925C6.201 1.49925 1.5 6.20025 1.5 11.9993C1.5 13.7768 1.9425 15.453 2.72325 16.9215L1.54425 21.0668C1.48946 21.2595 1.48714 21.4634 1.53753 21.6573C1.58792 21.8512 1.68919 22.0282 1.83088 22.1699C1.97256 22.3116 2.14952 22.4128 2.34345 22.4632C2.53739 22.5136 2.74126 22.5113 2.934 22.4565L7.08 21.2775C8.59494 22.0822 10.2846 22.5018 12 22.4993C17.799 22.4993 22.5 17.7983 22.5 11.9993C22.5 6.20025 17.799 1.49925 12 1.49925ZM12 21.7493C10.4077 21.7499 8.83956 21.3605 7.4325 20.6153L7.16625 20.4735L2.72925 21.7358C2.69421 21.7462 2.65783 21.7515 2.62125 21.7515C2.56366 21.7503 2.5071 21.736 2.45591 21.7096C2.40472 21.6831 2.36026 21.6454 2.32594 21.5991C2.29162 21.5528 2.26835 21.4993 2.25792 21.4427C2.24748 21.386 2.25016 21.3277 2.26575 21.2723L3.52725 16.836L3.3855 16.5698C2.63934 15.1621 2.24947 13.5931 2.25 12C2.25 6.624 6.624 2.25 12 2.25C17.376 2.25 21.75 6.624 21.75 12C21.75 17.376 17.376 21.7493 12 21.7493ZM16.125 9.75H7.875C7.77554 9.75 7.68016 9.71049 7.60983 9.64017C7.53951 9.56984 7.5 9.47446 7.5 9.375C7.5 9.27555 7.53951 9.18016 7.60983 9.10984C7.68016 9.03951 7.77554 9 7.875 9H16.125C16.2245 9 16.3198 9.03951 16.3902 9.10984C16.4605 9.18016 16.5 9.27555 16.5 9.375C16.5 9.47446 16.4605 9.56984 16.3902 9.64017C16.3198 9.71049 16.2245 9.75 16.125 9.75ZM13.125 14.25H7.875C7.77554 14.25 7.68016 14.2105 7.60983 14.1402C7.53951 14.0698 7.5 13.9745 7.5 13.875C7.5 13.7755 7.53951 13.6802 7.60983 13.6098C7.68016 13.5395 7.77554 13.5 7.875 13.5H13.125C13.2245 13.5 13.3198 13.5395 13.3902 13.6098C13.4605 13.6802 13.5 13.7755 13.5 13.875C13.5 13.9745 13.4605 14.0698 13.3902 14.1402C13.3198 14.2105 13.2245 14.25 13.125 14.25Z"
              fill=""
            />
          </svg>
        ),
        label: "Chat cộng đồng",
        // route: "#",
        // children: [
        //   { label: "Settings", route: "/pages/settings" },
        // ],
        route: "/chat",
      },
      {
        icon: (
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7ZM16.5 6.25C16.7951 6.25 17.0628 6.42309 17.1839 6.69223L21.6839 16.6922C21.8539 17.07 21.6855 17.514 21.3078 17.6839C20.93 17.8539 20.486 17.6855 20.3161 17.3078L18.8787 14.1136H14.1213L12.6839 17.3078C12.514 17.6855 12.07 17.8539 11.6922 17.6839C11.3145 17.514 11.1461 17.07 11.3161 16.6922L15.8161 6.69223C15.9372 6.42309 16.2049 6.25 16.5 6.25ZM14.7963 12.6136H18.2037L16.5 8.82764L14.7963 12.6136ZM2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12ZM2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
              fill=""
            />
          </svg>
        ),
        label: "Nhận diện bệnh",
        route: "/predict",
      },
    ],
  },
  // {
  //   name: "OTHERS",
  //   menuItems: [
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M14.2544 1.36453C13.1584 1.05859 12.132 1.38932 11.4026 2.05955C10.6845 2.71939 10.25 3.70552 10.25 4.76063V11.4551C10.25 12.7226 11.2775 13.75 12.5449 13.75H19.2394C20.2945 13.75 21.2806 13.3156 21.9405 12.5974C22.6107 11.868 22.9414 10.8416 22.6355 9.74563C21.5034 5.69003 18.31 2.49663 14.2544 1.36453ZM11.75 4.76063C11.75 4.10931 12.0201 3.52918 12.4175 3.16407C12.8035 2.80935 13.3035 2.65643 13.8511 2.8093C17.4013 3.80031 20.1997 6.59875 21.1907 10.1489C21.3436 10.6965 21.1907 11.1965 20.8359 11.5825C20.4708 11.9799 19.8907 12.25 19.2394 12.25H12.5449C12.1059 12.25 11.75 11.8941 11.75 11.4551V4.76063Z"
  //             fill=""
  //           />
  //           <path
  //             d="M8.67232 4.71555C9.0675 4.59143 9.28724 4.17045 9.16312 3.77527C9.039 3.38009 8.61803 3.16036 8.22285 3.28447C4.18231 4.55353 1.25 8.32793 1.25 12.7892C1.25 18.2904 5.70962 22.75 11.2108 22.75C15.6721 22.75 19.4465 19.8177 20.7155 15.7772C20.8397 15.382 20.6199 14.961 20.2247 14.8369C19.8296 14.7128 19.4086 14.9325 19.2845 15.3277C18.2061 18.761 14.9982 21.25 11.2108 21.25C6.53805 21.25 2.75 17.462 2.75 12.7892C2.75 9.00185 5.23899 5.79389 8.67232 4.71555Z"
  //             fill=""
  //           />
  //         </svg>
  //       ),
  //       label: "Charts",
  //       route: "#",
  //       children: [
  //         { label: "Basic Chart", route: "/charts/basic-chart" },
  //       ],
  //     },
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M6.5 1.75C3.87665 1.75 1.75 3.87665 1.75 6.5C1.75 9.12335 3.87665 11.25 6.5 11.25C9.12335 11.25 11.25 9.12335 11.25 6.5C11.25 3.87665 9.12335 1.75 6.5 1.75ZM3.25 6.5C3.25 4.70507 4.70507 3.25 6.5 3.25C8.29493 3.25 9.75 4.70507 9.75 6.5C9.75 8.29493 8.29493 9.75 6.5 9.75C4.70507 9.75 3.25 8.29493 3.25 6.5Z"
  //             fill=""
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M17.5 12.75C14.8766 12.75 12.75 14.8766 12.75 17.5C12.75 20.1234 14.8766 22.25 17.5 22.25C20.1234 22.25 22.25 20.1234 22.25 17.5C22.25 14.8766 20.1234 12.75 17.5 12.75ZM14.25 17.5C14.25 15.7051 15.7051 14.25 17.5 14.25C19.2949 14.25 20.75 15.7051 20.75 17.5C20.75 19.2949 19.2949 20.75 17.5 20.75C15.7051 20.75 14.25 19.2949 14.25 17.5Z"
  //             fill=""
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M12.75 6.5C12.75 3.87665 14.8766 1.75 17.5 1.75C20.1234 1.75 22.25 3.87665 22.25 6.5C22.25 9.12335 20.1234 11.25 17.5 11.25C14.8766 11.25 12.75 9.12335 12.75 6.5ZM17.5 3.25C15.7051 3.25 14.25 4.70507 14.25 6.5C14.25 8.29493 15.7051 9.75 17.5 9.75C19.2949 9.75 20.75 8.29493 20.75 6.5C20.75 4.70507 19.2949 3.25 17.5 3.25Z"
  //             fill=""
  //           />
  //           <path
  //             fillRule="evenodd"
  //             clipRule="evenodd"
  //             d="M6.5 12.75C3.87665 12.75 1.75 14.8766 1.75 17.5C1.75 20.1234 3.87665 22.25 6.5 22.25C9.12335 22.25 11.25 20.1234 11.25 17.5C11.25 14.8766 9.12335 12.75 6.5 12.75ZM3.25 17.5C3.25 15.7051 4.70507 14.25 6.5 14.25C8.29493 14.25 9.75 15.7051 9.75 17.5C9.75 19.2949 8.29493 20.75 6.5 20.75C4.70507 20.75 3.25 19.2949 3.25 17.5Z"
  //             fill=""
  //           />
  //         </svg>
  //       ),
  //       label: "UI Elements",
  //       route: "#",
  //       children: [
  //         { label: "Alerts", route: "/ui-elements/alerts" },
  //         { label: "Buttons", route: "/ui-elements/buttons" },
  //       ],
  //     },
  //     {
  //       icon: (
  //         <svg
  //           className="fill-current"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M14.9453 1.25C13.5778 1.24998 12.4754 1.24996 11.6085 1.36652C10.7084 1.48754 9.95048 1.74643 9.34857 2.34835C8.82363 2.87328 8.55839 3.51836 8.41916 4.27635C8.28387 5.01291 8.25799 5.9143 8.25196 6.99583C8.24966 7.41003 8.58357 7.74768 8.99778 7.74999C9.41199 7.7523 9.74964 7.41838 9.75194 7.00418C9.75803 5.91068 9.78643 5.1356 9.89448 4.54735C9.99859 3.98054 10.1658 3.65246 10.4092 3.40901C10.686 3.13225 11.0746 2.9518 11.8083 2.85315C12.5637 2.75159 13.5648 2.75 15.0002 2.75H16.0002C17.4356 2.75 18.4367 2.75159 19.1921 2.85315C19.9259 2.9518 20.3144 3.13225 20.5912 3.40901C20.868 3.68577 21.0484 4.07435 21.1471 4.80812C21.2486 5.56347 21.2502 6.56459 21.2502 8V16C21.2502 17.4354 21.2486 18.4365 21.1471 19.1919C21.0484 19.9257 20.868 20.3142 20.5912 20.591C20.3144 20.8678 19.9259 21.0482 19.1921 21.1469C18.4367 21.2484 17.4356 21.25 16.0002 21.25H15.0002C13.5648 21.25 12.5637 21.2484 11.8083 21.1469C11.0746 21.0482 10.686 20.8678 10.4092 20.591C10.1658 20.3475 9.99859 20.0195 9.89448 19.4527C9.78643 18.8644 9.75803 18.0893 9.75194 16.9958C9.74964 16.5816 9.41199 16.2477 8.99778 16.25C8.58357 16.2523 8.24966 16.59 8.25196 17.0042C8.25799 18.0857 8.28387 18.9871 8.41916 19.7236C8.55839 20.4816 8.82363 21.1267 9.34857 21.6517C9.95048 22.2536 10.7084 22.5125 11.6085 22.6335C12.4754 22.75 13.5778 22.75 14.9453 22.75H16.0551C17.4227 22.75 18.525 22.75 19.392 22.6335C20.2921 22.5125 21.0499 22.2536 21.6519 21.6517C22.2538 21.0497 22.5127 20.2919 22.6337 19.3918C22.7503 18.5248 22.7502 17.4225 22.7502 16.0549V7.94513C22.7502 6.57754 22.7503 5.47522 22.6337 4.60825C22.5127 3.70814 22.2538 2.95027 21.6519 2.34835C21.0499 1.74643 20.2921 1.48754 19.392 1.36652C18.525 1.24996 17.4227 1.24998 16.0551 1.25H14.9453Z"
  //             fill=""
  //           />
  //           <path
  //             d="M2.00098 11.249C1.58676 11.249 1.25098 11.5848 1.25098 11.999C1.25098 12.4132 1.58676 12.749 2.00098 12.749L13.9735 12.749L12.0129 14.4296C11.6984 14.6991 11.662 15.1726 11.9315 15.4871C12.2011 15.8016 12.6746 15.838 12.9891 15.5685L16.4891 12.5685C16.6553 12.426 16.751 12.218 16.751 11.999C16.751 11.7801 16.6553 11.5721 16.4891 11.4296L12.9891 8.42958C12.6746 8.16002 12.2011 8.19644 11.9315 8.51093C11.662 8.82543 11.6984 9.2989 12.0129 9.56847L13.9735 11.249L2.00098 11.249Z"
  //             fill=""
  //           />
  //         </svg>
  //       ),
  //       label: "Authentication",
  //       route: "#",
  //       children: [
  //         { label: "Sign In", route: "/auth/signin" },
  //       ],
  //     },
  //   ],
  // },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const [pageName, setPageName] = useLocalStorage("selectedMenu", "trang chủ");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full duration-200 ease-linear"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 xl:py-10">
          <Link href="/">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {/* <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3> */}

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
