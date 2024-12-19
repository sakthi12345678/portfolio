import './pro.css';

// // tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideOut: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
        animation: {
          slideIn: 'slideIn 0.5s ease-out infinite',
          slideOut: 'slideOut 0.5s ease-in infinite',
        },
      },
    },
    plugins: [],
  }
  
 

// tailwind.config.js
// module.exports = {
//     theme: {
//       extend: {
//         keyframes: {
//           bounce: {
//             '0%': { transform: 'translateY(0)' },
//             '50%': { transform: 'translateY(-1rem)' },
//             '100%': { transform: 'translateY(0)' },
//           },
//           fadeIn: {
//             '0%': { opacity: '0' },
//             '100%': { opacity: '1' },
//           },
//         },
//         animation: {
//           bounce: 'bounce 1s ease-in-out infinite',
//           fadeIn: 'fadeIn 3s ease-out',
//         },
//       },
//     },
//     plugins: [],
//   }
  

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         'line-forward': {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(100%)' },
//         },
//       },
//       animation: {
//         'line-forward': 'line-forward 2s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// }
