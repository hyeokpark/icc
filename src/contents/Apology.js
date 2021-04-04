import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ApologyConfig from '../config/ApologyConfig';
import LinearProgress from '@material-ui/core/LinearProgress';
import LoveResult from './ApologyResult';

function Apology(props) {
    const aCfg = useMemo(() => {
        return ApologyConfig;
    }, []);

    const [apologyCnt, setApologyCnt] = useState(0);
    const [apologyResult, setApologyResult] = useState({});
    const [result, setResult] = useState(null);

    const [q, setQ] = useState({ answer: { 'A': '', 'B': '', 'C': '', 'D': '', 'E': '' } });

    const [quest, setQuest] = useState(null);

    useEffect(() => {
        setQ(aCfg[apologyCnt].qes);
    }, [apologyCnt]);

    useEffect(() => {


        const jsx = [];
        let cnt = 0;
        const style = { height: '115px' };
        for (let key in q.answer) {
            cnt++
            jsx.push(
                <button key={cnt} onClick={handleClick} value={key} className="cdNgSy" style={cnt == 1 ? { ...style, marginTop: '20px' } : style}>
                    <div onClick={(event) => { handleClick(key); event.stopPropagation(); }} className="card__ButtonIndex-sc-1uagafc-4 bqQQkU">{cnt}</div>
                    <div onClick={(event) => { handleClick(key); event.stopPropagation(); }} className="card__ButtonText-sc-1uagafc-5 ltnna">{q.answer[key]}</div>
                </button>
            )

        }

        setQuest(jsx);
    }, [q])

    const handleClick = useCallback((event) => {
        window.scrollTo(0, 0);
        let value = null;
        const obj = { ...apologyResult };

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

        setApologyResult(obj);

        if (apologyCnt < aCfg.length - 1) {
            setApologyCnt(apologyCnt + 1);
        } else {
            setResult(obj);
        }
    }, [apologyCnt, apologyResult]);

    return (
        <>
            {!result && <><div style={{ marginBottom: '30px', width: '100%' }}>
                <div className="card__TitleLayer-sc-1uagafc-1 jvCKnu">
                    <div className="card__QuestionNumber-sc-1uagafc-2 hpxqhj">{apologyCnt + 1}.</div>
                    <div className="card__Question-sc-1uagafc-3 hDexSx">{q.title}</div>
                </div>
                <LinearProgress variant="determinate" value={apologyCnt / (aCfg.length - 1) * 100} />
                {quest}
            </div>
            </>
            }
            {result && <LoveResult result={result} />}

            <div className="jzEppV" style={{ fontSize: '14px', color: '#a2a2a2', marginTop: '100px' }}>Born to be Loved</div>
        </>
    );
}

export default Apology;
