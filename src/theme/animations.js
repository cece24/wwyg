import { css } from 'styled-components'

const fadeIn = css`
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const leftIn = css`
  @-webkit-keyframes leftIn {
    0% {
      -webkit-transform: translateX(-5rem);
      transform: translateX(-5rem);
    }

    to {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes leftIn {
    0% {
      -webkit-transform: translateX(-5rem);
      transform: translateX(-5rem);
    }

    to {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`

const raiseIn = css`
  @-webkit-keyframes raiseIn {
    0% {
      -webkit-transform: translateY(2rem);
      transform: translateY(2rem);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes raiseIn {
    0% {
      -webkit-transform: translateY(2rem);
      transform: translateY(2rem);
    }

    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const zoomIn = css`
  @-webkit-keyframes zoomIn {
    0% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes zoomIn {
    0% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

export { fadeIn, leftIn, raiseIn, zoomIn }
