import React from 'react';
import * as Icons  from "react-bootstrap-icons"

function Facility() {
  const FacilityStyle = {
    height: '100px',
    width: '260px',
    backgroundColor:"white",
    alignItems:"center",
    opacity:"0.9",
    boxShadow:"10px 0px 10px 0xp"
  };

  return (
    <>
      <h2 className="text-center pt-2 pb-2 fs-1 fw-bold fst-italic">Popular Amenities Available At Workspace</h2>

      <div className="w-100 d-flex flex-wrap flex-row  gap-3 justify-content-around pt-3 pb-3 ">
        <div className="Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <Icons.CupHotFill className='fs-1 mt-2'/>
          </div>
          <p>Kitchen</p>
        </div>

        <div className="Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <Icons.Wifi className='fs-1 mt-2'/>
          </div>
          <p className='d-block'>Wifi</p>
        </div>

        <div className="Box Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <Icons.Water className='fs-1 mt-2'/>
          </div>
          <p>Pool</p>
        </div>

        <div className="Box Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <i className="bi bi-snow2"></i>
            <Icons.Snow2 className='fs-1 mt-2'/>
          </div>
          <p>Air conditioning</p>
        </div>
        <div className="Box Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <i className="bi bi-water"></i>
            <Icons.Book className='fs-1 mt-2'/>

          </div>
          <p>Library</p>
        </div>
        <div className="Box Box rounded-3 d-flex  flex-column text-center gap-3" style={FacilityStyle}>
          <div>
            <Icons.Water className='fs-1 mt-2'/>
          </div>
          <p>Ro Water</p>
        </div>
      </div>
    </>
  );
}

export default Facility;
