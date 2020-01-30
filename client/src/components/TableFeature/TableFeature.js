import React, { Component } from 'react';
import classes from './TableFeature.module.css';

class TableFeature extends Component {
    render() {
        return (
            <div className={classes.container} >
                <table>
                    <tr>
                        <th colspan='2'>Thursday, January 30, 2020</th>
                        <th>Location</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Delivered - Signed for by: RD3 Ham</td>
                        <td>Hamilton</td>
                        <td>14:02</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>With delivery courier</td>
                        <td>NZ REGIONAL SERVICES AREA - NEW ZEALAND</td>
                        <td>06:13</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th colspan='2'>Friday, January 24, 2020</th>
                        <th>Location</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Forwarded for delivery</td>
                        <td>NZ REGIONAL SERVICES AREA - NEW ZEALAND</td>
                        <td>12:38</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Arrived at Delivery Facility in NZ-NZ</td>
                        <td>NZ REGIONAL SERVICES AREA - NEW ZEALAND</td>
                        <td>11:35</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Shipment picked up</td>
                        <td>BERGAMO - ITALY</td>
                        <td>09:36</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TableFeature;