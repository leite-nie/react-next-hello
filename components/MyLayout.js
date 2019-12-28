// 自动包含Header和Content的组件 
import Header from './Header'
import { createGlobalStyle } from 'styled-components';


// 全局样式
const GrobalStyle = createGlobalStyle `
html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .clearfix:after {visibility: hidden;display: block;font-size: 0;content: ".";clear: both;height: 0;}
    .clearfix {zoom: 1;}
`;


const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  }
  
  const Layout = (props) => (
    <div style={layoutStyle}>
      <GrobalStyle/>
      <Header />
      {props.children}
    </div>
  )
  
  export default Layout