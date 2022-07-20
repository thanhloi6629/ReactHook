/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react';
const styles = {
    wrapper: css({
      width: '600px',
      margin:'0 auto',
      border: '1px solid #000000',
    }),
    div1: css({
        width: '198px',
        height: '200px',
        border: '1px solid #000000',
        borderTop: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        margin:'0 auto',
    }),
    div2: css({
        width: '200px',
        height: '200px',
        border: '1px solid #000000',
        borderRight: 'none',
        display: 'flex',
        justifyContent:'center',
        marginLeft: 'auto',
        alignItems:' center',

    }),
    div3: css({
        width: '200px',
        height: '200px',
        borderLeft: '1px solid #000000',
        display: 'flex',
        justifyContent:'center',
        marginLeft: 'auto',
        alignItems:' center',


    })
   
  };
// css bai tap 2 nằm trong App.css


function PhongVan() {

  return (
    <div>
        {/* Bài tập 1 */}
        <div className="wraper" css={css(styles.wrapper)}>
            <div className="div1" css={css(styles.div1)}>3</div>
            <div className="div2" css={css(styles.div2)}>2</div>
            <div className="div3" css={css(styles.div3)}>1</div>
        </div>

        {/* Bài tập 3 */}
        <div>
            <div className="container">
                <header>Header</header>
                <aside>Aside</aside>
                <section>Heading</section>
                <main>Right</main>
                <footer>Footer</footer>
            </div>
        </div>
    </div>
    
  )
}

export default PhongVan
