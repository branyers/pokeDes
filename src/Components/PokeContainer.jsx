import React, { useEffect, useState } from 'react'
import { getPoke } from '../Services/Pokeapi'

const PokeContainer = () => {
    const { data, setData } = useState([])

    const getData = () => {
        getPoke().then((response) => {
            console.log(response.data)
        })
    }

    useEffect(() => {

        getData()
    }, [])


    return (
        <div className="background">

            <div className="card-container">

                <div className="card">

                    <div className="card-image">

                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="pilachu" />

                    </div>

                    <div className="card-text">

                        <span className="date date-1"> 1 days ago</span>
                        <h2><i className="fa fa-fire"></i>Pikachu</h2>
                        <p>Personalidad energica y optimista!!!</p>
                    </div>

                    <div className="card-stats card-1">
                        <div className="stat">
                            <div className="value">4m</div>
                            <div className="type">read</div>
                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">1998</div>
                            <div className="type">views</div>

                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">32</div>
                            <div className="type">comments</div>

                        </div>

                    </div>

                </div>


                <div className="card">

                    <div className="card-image">

                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="pilachu" />

                    </div>

                    <div className="card-text">

                        <span className="date date-2"> 1 days ago</span>
                        <h2><i className="fas fa-leaf"></i>Pikachu</h2>
                        <p>Personalidad energica y optimista!!!</p>
                    </div>

                    <div className="card-stats card-2">
                        <div className="stat">
                            <div className="value">4m</div>
                            <div className="type">read</div>
                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">1998</div>
                            <div className="type">views</div>

                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">32</div>
                            <div className="type">comments</div>

                        </div>

                    </div>

                </div>



                <div className="card">

                    <div className="card-image">

                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="pilachu" />

                    </div>

                    <div className="card-text">

                        <span className="date date-3"> 1 days ago</span>
                        <h2><i className="fas fa-tint"></i>Pikachu</h2>
                        <p>Personalidad energica y optimista!!!</p>
                    </div>

                    <div className="card-stats card-3">
                        <div className="stat">
                            <div className="value">4m</div>
                            <div className="type">read</div>
                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">1998</div>
                            <div className="type">views</div>

                        </div>

                        {/* <div className="border"></div> */}
                        <div className="stat">
                            <div className="value">32</div>
                            <div className="type">comments</div>

                        </div>

                    </div>

                </div>

            </div>




        </div>
    );


}
export default PokeContainer
