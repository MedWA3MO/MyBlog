import React from "react"

const Team = ()=>{
    return (
        <>
            <div className="container row text-center">
                <div className="row">
                    <div className="col-md-5 m-3 card shadow p-5">
                      <img src="https://avatars.githubusercontent.com/u/95689141?v=4" className="card-img-top"/>
                      <h1 className="mt-3">
                        ali 
                      </h1>
                      <p className="mt-3">
                        designer 
                      </p>
                      <button className="btn btn-danger">
                            contact me
                      </button>
                    </div>
                    <div className="col-md-5 m-3 card shadow p-5">
                      <img src="https://avatars.githubusercontent.com/u/95689141?v=4" className="card-img-top"/>
                      <h1 className="mt-3">
                        simo 
                      </h1>
                      <p className="mt-3">
                        developer 
                      </p>
                      <button className="btn btn-danger">
                            contact me
                      </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team