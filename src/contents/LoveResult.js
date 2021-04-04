import '../App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import LoveResultConfig from '../config/LoveResultConfig';

function LoveResult(props) {
    const loveResultConfig = useMemo(() => {
        return LoveResultConfig;
    }, []);

    useEffect(() => {
        console.log(props.result);
        let max = 0;
        let result = '';
        for (let key in props.result) {
            if (max < props.result[key]) {
                max = props.result[key];
                result = key;
            }
        }

        console.log(loveResultConfig[result].title);
    }, []);

    return (
        <></>
    );
}

export default LoveResult;
