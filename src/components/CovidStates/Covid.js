import React, { useEffect, useState } from 'react';
import './Covid.css'

const Covid = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    // today's date
    today = dd + '-' + mm + '-' + yyyy;

    const [covid, setCovid] = useState([])
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/bangladesh')
            .then(res => res.json())
            .then(data => setCovid(data))
    }, [])
    return (
        <div>
            <div className="heading">
                <h1>Latest Covid Update in <span>{covid.country}</span></h1>
                <h3>Last Updated at {today}</h3>
            </div>
            <div className="container">
                <div className="class-2">
                    <h2>Total Active Case <br />{covid.active}
                    </h2>
                </div>
                <div className="class-3">
                    <h2>Total Critical Case <br />{covid.critical}
                    </h2>
                </div>
                <div className="class-1">
                    <h2>Total Deaths <br />
                        {covid.deaths}
                    </h2>
                </div>

                <div className="class-3">
                    <h2>Total Confirmed Case<br />{covid.cases}</h2>
                </div>
                <div className="class-1">
                    <h2>Total Test <br />
                        {covid.totalTests}
                    </h2>
                </div>

                <div className="class-2">
                    <h2>Total Recovered <br />
                        {covid.recovered}
                    </h2>
                </div>
            </div>
            <div className="container-b">
                <div className="class-4">
                    <h2>Cases Per One Million <br />
                        {covid.casesPerOneMillion}
                    </h2>
                </div>
                <div className="class-3">
                    <h2>Deaths Per One Million <br />
                        {covid.deathsPerOneMillion}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Covid;