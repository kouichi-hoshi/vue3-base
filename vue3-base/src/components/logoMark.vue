<template>
  <div class="logo-mark" :class="class">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 118 104"
      version="1.1"
      fill="#00adb5"
      id="svg_icon.secondary"
    >
      <g id="surface1">
        <path
          d="M37.9,0.4v18.8h9.4V0.4H37.9z M56.7,5.1v14.1H66V5.1H56.7z M5.1,23.9v42.2c0,12.9,10.5,23.4,23.4,23.4h46.9
		c12.9,0,23.4-10.5,23.4-23.4h4.7c7.7,0,14.1-6.4,14.1-14.1V23.9H5.1z M14.5,33.2h75v32.8c0,7.8-6.2,14.1-14.1,14.1H28.5
		c-7.8,0-14.1-6.2-14.1-14.1V33.2z M98.8,33.2h9.4V52c0,2.7-2,4.7-4.7,4.7h-4.7V33.2z M0.4,94.2v9.4h103.1v-9.4H0.4z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LogoMark',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>
