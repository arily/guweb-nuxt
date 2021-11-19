module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hsl: {
          p1: 'hsl(var(--base-hue),100%,50%)',
          h1: 'hsl(var(--base-hue),100%,70%)',
          h2: 'hsl(var(--base-hue),50%,45%)',
          c1: 'hsl(var(--base-hue),40%,100%)',
          c2: 'hsl(var(--base-hue),40%,90%)',
          l1: 'hsl(var(--base-hue),40%,80%)',
          l2: 'hsl(var(--base-hue),40%,75%)',
          l3: 'hsl(var(--base-hue),40%,70%)',
          l4: 'hsl(var(--base-hue),40%,50%)',
          d1: 'hsl(var(--base-hue),20%,35%)',
          d2: 'hsl(var(--base-hue),20%,30%)',
          d3: 'hsl(var(--base-hue),20%,25%)',
          d4: 'hsl(var(--base-hue),20%,20%)',
          d5: 'hsl(var(--base-hue),20%,15%)',
          d6: 'hsl(var(--base-hue),20%,10%)',
          f1: 'hsl(var(--base-hue),10%,60%)',
          b1: 'hsl(var(--base-hue),10%,40%)',
          b2: 'hsl(var(--base-hue),10%,30%)',
          b3: 'hsl(var(--base-hue),10%,25%)',
          b4: 'hsl(var(--base-hue),10%,20%)',
          b5: 'hsl(var(--base-hue),10%,15%)',
          b6: 'hsl(var(--base-hue),10%,10%)'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
