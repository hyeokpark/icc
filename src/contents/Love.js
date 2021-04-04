import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LoveConfig from '../config/LoveConfig';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoveResult from './LoveResult';

function Love(props) {

    const lCfg = useMemo(() => {
        return LoveConfig;
    }, []);

    const [loveCnt, setLoveCnt] = useState(0);
    const [loveResult, setLoveResult] = useState({});
    const [result, setResult] = useState(null);

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');

    useEffect(() => {
        setQ1(lCfg[loveCnt].qes1);
        setQ2(lCfg[loveCnt].qes2);
    }, [loveCnt]);

    const handleClick = useCallback((event) => {
        let value = null;
        const obj = { ...loveResult };

        if (!event.target) {
            value = event;
        } else {
            value = event.target.value;
        }

        console.log(value);

        if (!obj[value]) {
            obj[value] = 1;
        } else {
            obj[value]++;
        }

        setLoveResult(obj);

        if (loveCnt < lCfg.length - 1) {
            setLoveCnt(loveCnt + 1);
        } else {
            setResult(obj);
        }
    }, [loveCnt, loveResult]);

    return (
        <>
            {!result && <><div style={{ marginBottom: '80px', width: '100%' }}>
                <button onClick={handleClick} value={q1.type} className="cdNgSy">
                    <div onClick={(event) => { handleClick(q1.type); event.stopPropagation(); }} className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">A</div>
                    <div onClick={(event) => { handleClick(q1.type); event.stopPropagation(); }} className="card__ButtonText-sc-1uagafc-5 ltnna">{q1.text}</div>
                </button>
                <button onClick={handleClick} value={q2.type} className="cdNgSy">
                    <div onClick={(event) => { handleClick(q2.type); event.stopPropagation(); }} className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">B</div>
                    <div onClick={(event) => { handleClick(q2.type); event.stopPropagation(); }} className="card__ButtonText-sc-1uagafc-5 ltnna">{q2.text}</div>
                </button>
            </div>
                <LinearProgress color="secondary" variant="determinate" value={loveCnt / (lCfg.length - 1) * 100} /></>
            }
            {result && <LoveResult result={result} />}

            <div className="jzEppV" style={{ fontSize: '14px', color: '#a2a2a2' }}>Born to be Loved</div>
        </>
    );
}

export default Love;
