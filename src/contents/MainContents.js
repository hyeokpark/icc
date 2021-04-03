import '../App.css';
import { useState } from 'react';



function MainContents(props) {
    return (
        <>
            <div class="jzEppV"><label style={{ color: "#3c2212" }}>크리스천</label> <br /> <label style={{ color: "#8e4d2d" }}>연애</label><label style={{ color: "#3c2212" }}>준비학교</label></div>
            <button onClick={() => { props.onClick('love') }} class="ianmHN" style={{ backgroundColor: "#f399a5" }}>5가지 사랑의 언어 테스트</button>
            <button onClick={() => { props.onClick('apology') }} class="ianmHN" style={{ backgroundColor: "#7abdc4" }}>5가지 사과의 언어 테스트</button>
        </>
    );
}

export default MainContents;
