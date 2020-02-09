import React from 'react';

import Header from './Header/Header';
import Row from './Row/Row';

import classes from './Table.module.css';

const Table = (props) => {

    return (
        <div className={classes.container} >
            <div className={classes.howTo}>
                * Click timestamps to hear samples *
            </div>
            <table>
                <Header
                    update_time={'Tuesday, January 18, 2020 00:37:00'}
                    short_date={"Tue, Jan 18"} />
                <tbody>
                    <Row
                        updateNumber={7}
                        message={'Departed Facility in VANCOUVER - CA'}
                        location={'VANCOUVER - CANADA'}
                        time={'14:32'}
                        clickHandler={() => props.timestampClickHandler("OK_BABY_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH - NKOW'}
                        showPlaying={props.playing[7]}
                    />
                    <Row
                        updateNumber={6}
                        message={'Clearance complete at VANCOUVER - CA'}
                        location={'VANCOUVER - CANADA'}
                        time={'02:39'}
                        clickHandler={() => props.timestampClickHandler("NEW_KIND_OF_WAR_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[6]}
                    />
                    <Row
                        updateNumber={5}
                        message={'Arrived at Sort Facility VANCOUVER - CA'}
                        location={'VANCOUVER - CANADA'}
                        time={'03:01'}
                        clickHandler={() => props.timestampClickHandler("MET_GALA_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[5]}
                    />
                </tbody>
                <Header
                    update_time={"Wednesday, January 15, 2020 00:37:00"}
                    short_date={"Wed, Jan 15"}
                />
                <tbody>
                    <Row
                        updateNumber={4}
                        message={'Departed Facilityin AUCKLAND - NZ'}
                        location={'AUCKLAND - NEW ZEALAND'}
                        time={'02:39'}
                        clickHandler={() => props.timestampClickHandler("MASK_OFF_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[4]}
                    />
                </tbody>
                <Header
                    update_time={"Tuesday, January 14, 2020 00:37:00"}
                    short_date={"Tue, Jan 14"}
                />
                <tbody>
                    <Row
                        updateNumber={3}
                        message={'Processed at AUCKLAND - NZ'}
                        location={'AUCKLAND - NEW ZEALAND'}
                        time={'03:51'}
                        clickHandler={() => props.timestampClickHandler("DRAMA_QUEEN_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[3]}
                    />
                    <Row
                        updateNumber={2}
                        message={'Arrived at Sort Facility AUCKLAND - NZ'}
                        location={'AUCKLAND - NEW ZEALAND'}
                        time={'02:20'}
                        clickHandler={() => props.timestampClickHandler("DARLING_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[2]}
                    />
                </tbody>
                <Header
                    update_time={"Monday, January 13, 2020 00:37:00"}
                    short_date={"Mon, Jan 13"}
                />
                <tbody>
                    <Row
                        updateNumber={1}
                        message={'Shipment information received'}
                        location={'HAMILTON - NEW ZEALAND'}
                        time={'02:44'}
                        clickHandler={() => props.timestampClickHandler("BE_FREE_YPS.m4a")}
                        description={'ALBUM-1030YBFLPH'}
                        showPlaying={props.playing[1]}
                    />
                </tbody>
            </table >
        </div >
    );
}

export default Table;