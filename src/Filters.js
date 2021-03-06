import React from 'react';
import filterIcon from './image/home/filter.svg';

export default class Filters extends React.Component {
    render() {
        return (
            <>
                <div className="filterblock">
                    <ul className="filtermenu">
                        <li id="filter"><img src={filterIcon} alt="FilterIcon" className="filterimg" />ฟิลเตอร์</li>
                        <li>งบประมาณ <div class="arrow-down"></div> </li>
                        <li>ประเภทรถ <div class="arrow-down"></div> </li>
                        <li>แบรนด์ <div class="arrow-down"></div> </li>
                    </ul>
                </div>
            </>
        );
    }
}

/* ประเภทรถ 1.Convertible 2.Coupe 3.MPV 4.Sedan 5.SUV 6.Pick-Up 7.Wagon/Hatchback */