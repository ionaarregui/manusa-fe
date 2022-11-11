import styled from 'styled-components'

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba(0, 0, 0, 0.1);

  /* Tamaño del scroll */
  *::-webkit-scrollbar {
    width: 8px;
  }

  /* Estilos barra (thumb) de scroll */
  *::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Estilos track de scroll */
  *::-webkit-scrollbar-track {
    /* background: #e1e1e1; */
    border-radius: 4px;
  }

  *::-webkit-scrollbar-track:hover,
  *::-webkit-scrollbar-track:active {
    background: #0000004f;
  }
`
