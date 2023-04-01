import Image from 'next/image'
import GradsData from "data/grads.json"
const GradDetail = (props: any) => {
    let currentGrad = GradsData.filter((grad) => grad.id == props.gradid);
    let currentGradItem = currentGrad[0];
    console.log("currentgrad",currentGrad);
  return (
    <>
  <div className="bg-light">
    <div className="container pb-5">
        <div className="row">
            <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                    <Image
                    className='card-img img-fluid'
                    src={currentGradItem?.image}
                    alt="Card image cap"
                    height={90}
                    width={90}
                    ></Image>
                </div>
                
            </div>
            <div className="col-lg-7 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h1 className="h2">{currentGradItem?.name}</h1>
                        <p className="h3 py-2">{currentGradItem?.qualification}</p>
                        <p className="py-2">
                            <span className="list-inline-item text-dark">{currentGradItem?.email}</span>
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>{currentGradItem?.interestedin}</h6>
                            </li>
                        </ul>

                        <h6>Hobbies:</h6>
                        <p>{currentGradItem?.hobbies}</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <h6>{currentGradItem?.reportingmanger}</h6>
                            </li>
                            
                        </ul>

                        <h6>{currentGradItem?.comments}</h6>
                       
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  </>
    );
};
export default GradDetail;