import Image from 'next/image'
import EventsData from "data/Events.json"
import React from 'react';
import Link from 'next/link';
const TrainingDetail = (props: any) => {
    debugger;
    let currentEvent = EventsData.filter((events) => events.ID == props.eventid);
    let currentEventItem = currentEvent[0];
    
  return (
    <>
  <div className="bg-light">
    <div className="container pb-5">
        <div className="row">
            <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                    <Image
                    className='card-img img-fluid'
                    src={currentEventItem?.Image_Url}
                    alt="Card image cap"
                    height={1000}
                    width={1090}
                    ></Image>
                </div>
                
            </div>
            <div className="col-lg-7 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h2">{currentEventItem?.Topic}</h1>
                        <p className="h3 py-2">{currentEventItem?.ShortDescription}</p>
                        <p className="py-2">
                            <span className="list-inline-item text-dark">{currentEventItem?.Trainer}</span>
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>{currentEventItem?.LongDescription}</h6>
                            </li>
                        </ul>

                        <h6>Hobbies:</h6>
                        <p>{currentEventItem?.Duration}</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>{currentEventItem?.Date}</h6>
                            </li>
                            
                        </ul>
                                  <p><Link href={"/enroll?tid=" + (currentEventItem.ID)} className="btn btn-success">Enroll now</Link></p>
                        {/* <h6>{currentGradItem?}</h6> */}
                       
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
    );
};
export default TrainingDetail;
