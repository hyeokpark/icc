import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LoveResultConfig from '../config/LoveResultConfig';

function LoveResult(props) {
    const loveResultConfig = useMemo(() => {
        return LoveResultConfig;
    }, []);

    const [resultTitle, setResultTitle] = useState('');

    const [resultContents, setResultContents] = useState('');

    const [totalArr, setTotalArr] = useState([]);

    useEffect(() => {
        let max = 0;
        let result = '';

        const t = [];
        for (let key in props.result) {
            if (max < props.result[key]) {
                max = props.result[key];
                result = key;
            }

            t.push({ title: loveResultConfig[key].title, cnt: props.result[key] });
        }

        setResultTitle(loveResultConfig[result].title);

        setResultContents(loveResultConfig[result].contents);

        setTotalArr(t);
    }, []);

    return (
        <>
            <div className="jzEppV" style={{ fontSize: '20px', marginBottom: '10px' }}>
                당신의 사랑의 언어는?
            </div>
            <div className="jzEppV" style={{ fontSize: '24px', marginBottom: '10px', padding: '10px 10px', color: '#f399a5', fontWeight: 'bold' }}>
                {resultTitle}
            </div>
            <div className="jzEppV" style={{ fontSize: '15px', textAlign: 'left', padding: '10px 10px', marginBottom: '10px' }}>
                {resultContents}
            </div>

            {totalArr.map((a,idx) => {
                return <div key={idx} className="jzEppV" style={{ fontSize: '15px', textAlign: 'left', padding: '0px 10px', marginBottom: '0px' }}> {a.title + ':' + a.cnt + ' '}</div>;
            })}
        </>
    );
}

export default LoveResult;
