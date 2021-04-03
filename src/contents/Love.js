import '../App.css';
import { useState } from 'react';



function Love(props) {
    return (
        <div style={{marginBottom: '80px', width: '100%'}}>
            <button className="common__DefaultButton-tzij20-2 cdNgSy btn-on-click">
                <div className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">A</div>
                <div className="card__ButtonText-sc-1uagafc-5 ltnna">진심을 담은 카톡으로 대화를 신청한다</div>
            </button>
            <button className="common__DefaultButton-tzij20-2 cdNgSy btn-on-click">
                <div className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">B</div>
                <div className="card__ButtonText-sc-1uagafc-5 ltnna">일단 만나 얼굴보고 대화로 해결 한다</div>
            </button>
        </div>
    );
}

export default Love;
