import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LoveConfig from '../config/LoveConfig';



function Love(props) {

    const lCfg = useMemo(() => {
        return LoveConfig;
    }, []);

    const [loveCnt, setLoveCnt] = useState(0);

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');

    useEffect(() => {
        setQ1(lCfg[loveCnt].qes1);
        setQ2(lCfg[loveCnt].qes2);
    }, [loveCnt]);

    const handleClick = useCallback(() => {
        if (loveCnt < lCfg.length) {
            setLoveCnt(loveCnt + 1);
        }
    }, [loveCnt]);

    return (
        <>
            <div style={{ marginBottom: '80px', width: '100%' }}>
                <button onClick={handleClick} value={q1.type} className="common__DefaultButton-tzij20-2 cdNgSy btn-on-click">
                    <div className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">A</div>
                    <div className="card__ButtonText-sc-1uagafc-5 ltnna">{q1.text}</div>
                </button>
                <button onClick={handleClick} value={q2.type} className="common__DefaultButton-tzij20-2 cdNgSy btn-on-click">
                    <div className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">B</div>
                    <div className="card__ButtonText-sc-1uagafc-5 ltnna">{q2.text}</div>
                </button>
            </div>

            <div className="jzEppV" style={{ fontSize: '14px', color: '#a2a2a2' }}>Born to be Loved</div>
        </>
    );
}

export default Love;
