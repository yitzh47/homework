import React from 'react';
import { Link,  Route, Outlet, Navigate } from 'react-router-dom';
import SelectedTicker from './SelectedTicker';
import { useState, useEffect } from 'react';



export default function StockChooser() {

    const [selectedTicker, setselectedTicker] = useState('');

    useEffect(() => {

        console.log(selectedTicker)
    }, [selectedTicker]);

    return (
        <div>
                <label> Enter Stock ticker Symbol:
                <input id="stockOfChoice" name="selectedTicker" type="text" value={selectedTicker} onChange={(e) => setselectedTicker(e.target.value.toUpperCase())}/>
                <Link to={`/ticker/${selectedTicker}`}><button>Submit</button>
                    </Link>
                </label>

            <Outlet />
        </div>
    );


}
