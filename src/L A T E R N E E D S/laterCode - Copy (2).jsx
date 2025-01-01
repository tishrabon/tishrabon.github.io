@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  line-height: 1.5;
  font-weight: 400;

  /*  width: auto;*/
  background-color: #ffbf00;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /*  COLOR DEPT  */

  --darkbg: #353535;
  --lightbg: #ffffff;
  /*  --lightbg: #e0dfdf;*/

  --darkheader: #6d6d6d80;
  --lightheader: #cbd5e180;

  --darknavbg: #6d6d6d99;
  --lightnavbg: #cbd5e199;

  /*  - - - x - -  */

  --main: #ffbf00;
  --mainfont: #ffbf00;
  --mainbb: #feb204;
  --vsmain: #021526;
  --vsmainMid: #353535;

  /*  - - - x - -  */

  --lightmain: #94a3b8;
  --vslight: #ffffff;
  --lightfont: #64748b;
  --lightfont2: #475569;
  --lightbb: #e5e5e5;
  --lightbb2: #cccccc;

  /*  - - - x - -  */
}

@font-face {
  font-family: "courierPrime";
  src: url("/CourierPrime.ttf") format("truetype");
  font-display: swap;
}

.dark {
  font-family: "courierPrime", "Georgia", "serif", monospace;
  font-size: 15px;
  background-color: var(--darkbg);
  color: var(--mainfont);
  border-color: #ffbf00;
}
.light {
  font-family: "Poppins", "Segoe UI", sans-serif;
  font-size: 16px;
  background-color: var(--lightbg);
  /*  color: var(--lightmain);*/
  color: var(--lightfont);
  border-color: var(--lightmain);

}

/*body {
  margin: 0;
  width: 100vw;
  min-height: 100vh;
}*/

/* Global reset for margin and padding */
*,
*::before,
*::after {
  box-sizing: border-box; /* Makes padding and borders part of the element's width/height alt: 'content-box' */
  margin: 0;
  padding: 0;
}

/* Full screen width and height for html and body */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;

  word-wrap: break-word;
  overflow-wrap: anywhere;
}

.textbender {
  word-wrap: break-word;
  overflow-wrap: anywhere;  
}

.app-container {
  width: 100%;
}

.mainland {
  /*  background-color: green;*/
/*  max-width: 1000px;*/
  min-height: 300vh;
  width: 100%;
}

.page-container {
  width: 100%;
  /*  background-color: blue;*/
}

.verticalS {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.verticalC {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.horizontalS {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.horizontalC {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.horizontalUp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
}

.frostglass {
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}
