import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { VictoryAxis, VictoryBar, VictoryChart } from "victory";
import ApologyResultConfig from '../config/ApologyReusltConfig';

function ApologyResult(props) {
    const apologyResultConfig = useMemo(() => {
        return ApologyResultConfig;
    }, []);

    const [resultTitle, setResultTitle] = useState('');

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
        }

        setResultTitle(apologyResultConfig[result]);


        for (let key in apologyResultConfig) {
            let value = 0;
            if (props.result[key]) {
                value = props.result[key];
            }

            t.push({ title: apologyResultConfig[key], cnt: value });
        }

        setTotalArr(t);
    }, []);

    return (
        <>
            <div className="jzEppV" style={{ fontSize: '20px', marginBottom: '10px' }}>
                당신의 사과의 언어는?
            </div>
            <div className="jzEppV" style={{ fontSize: '30px', marginBottom: '10px', padding: '0px 10px', color: '#7abdc4', fontWeight: 'bold', marginBottom: '50px' }}>
                {resultTitle}
            </div>

            <VictoryChart domainPadding={20} animate={{
                duration: 500
            }}>
                <VictoryAxis style={{
                    axis: { stroke: "#595959" },
                    tickLabels: { fill: "#595959" }
                }} />
                <VictoryBar labels={({ datum }) => datum.cnt} data={totalArr} x="title" y="cnt" style={{
                    data: { fill: "#595959" }, labels: { fill: "#595959" }
                }} />
            </VictoryChart>
        </>
    );
}

export default ApologyResult;
