import React from 'react'

const SongTable = () => {
    return (
        <div className="table" style={{ color: "white" }}>
            <div className="header row ">
                <div className="col-1" style={{ border: "1px solid green", width: "50px" }}>
                    <span>#</span>
                </div>
                <div className="col-4" >
                    <span>Title</span>
                </div>
                <div className="col-4" >
                    <span>Albumn</span>
                </div>
                <div className="col-2" >
                    <span>Date Added</span>
                </div>
                <div className="col-1" >
                    <span>Dura</span>
                </div>
            </div>
            <div className="row">
                <div className="col-1" style={{ width: "50px" }}>
                    <span>#</span>
                </div>
                <div className="col-4" >
                    <span>Title</span>
                </div>
                <div className="col-4" >
                    <span>Albumn</span>
                </div>
                <div className="col-2" >
                    <span>Date Added</span>
                </div>
                <div className="col-1" >
                    <span>Dura</span>
                </div>
            </div>
        </div>
    )
}
export default SongTable