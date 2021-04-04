import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LoveResultConfig from '../config/LoveResultConfig';

import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryPolarAxis } from "victory";

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

            t.push({ title: loveResultConfig[key].title.split('(')[0], cnt: props.result[key] });
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


            <VictoryChart domainPadding={20} animate={{
                duration: 500
            }}>
                <VictoryAxis />
                <VictoryBar labels={({ datum }) => datum.cnt} data={totalArr} x="title" y="cnt" />
            </VictoryChart>
        </>
    );
}

export default LoveResult;
