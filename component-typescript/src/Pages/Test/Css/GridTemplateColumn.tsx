/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css } from '@emotion/core';
import { backgroundColor, grayScale, utilityColor } from 'components/styles';

const style1 = css`
    .geeks {
        background-color:green;
        padding:30px;
        display: grid;
        grid-template-columns: auto auto 200px 150px;
        grid-gap: 10px;
    }
    .GFG {
        background-color: white;
        border: 1px solid white;
        font-size: 30px;
        text-align: center;
    }
`

const style2 = css`
    .geeks {
        background-color:red;
        padding:30px;
        display: grid;
        grid-template-columns: 
        min-content max-content 400px min-content;
        grid-gap: 10px;
    }
    .GFG {
        background-color: white;
        border: 1px solid white;
        font-size: 30px;
        text-align: center;
    }
`

const styles = {
    style1: css({
        backgroundColor: 'green',
        padding:'30px',
        display: 'grid',
        gridTemplateColumns:'auto auto 200px 150px',
        gridGap:'10px'
      
    }),
    style2: css({
        backgroundColor: 'red',
        padding:'30px',
        display: 'grid',
        gridTemplateColumns:'min-content max-content 400px min-content',
        gridGap:'10px'
    }),
}



function GridTemplateColumn() {
    return (
        <div>
            <div css={style1}>
                <div className="geeks">
                    <div className="GFG">A</div>
                    <div className="GFG">B</div> 
                    <div className="GFG">C</div>
                    <div className="GFG">D</div>
                    <div className="GFG">E</div>
                    <div className="GFG">F</div>
                    <div className="GFG">G</div> 
                    <div className="GFG">H</div>
                </div>
            </div>

            <div css={style2}>
                <div className="geeks">
                    <div className="GFG">A</div>
                    <div className="GFG">B</div> 
                    <div className="GFG">C</div>
                    <div className="GFG">D</div>
                    <div className="GFG">E</div>
                    <div className="GFG">F</div>
                    <div className="GFG">G</div> 
                    <div className="GFG">H</div>
                </div>
            </div>
        </div>
    
    )
}

export default GridTemplateColumn
