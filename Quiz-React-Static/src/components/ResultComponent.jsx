import React, { Component } from 'react'

export default class ResultComponent extends Component {
    render() {
        return (
            <div className='result-card'>
                <h1 className='text-center title-prime' style={{ color: "green" }}>Result</h1>
                <div className="result">

                    <div className="status">
                        <h3 className="text-center top-heading">You need more practice!</h3>
                        <h1 className='text-center' style={{ color: "blue" }}>Your Score is 20%</h1>

                        <table id='stats-table'>
                            <tr>
                                <td>Total number of questions</td>
                                <td className='text-right'>15</td>
                            </tr>
                            <tr>
                                <td>Number of attempted questions</td>
                                <td className='text-right'>9</td>
                            </tr>
                            <tr>
                                <td>Number of corrected questions</td>
                                <td className='text-right'>3</td>
                            </tr>
                            <tr>
                                <td>Number of wrong questions</td>
                                <td className='text-right'>6</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div id="result-button">
                    <button id='play-again-btn'>Play Again</button>
                    <button id='backto-home-btn'>Back To Home</button></div>

            </div>
        )
    }
}
