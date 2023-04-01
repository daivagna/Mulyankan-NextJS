
// import { useState, useEffect } from 'react'
import FeaturedEventItem from "./FeaturedEventItem";
//import newData from 'data/EventsCarouselJson.json';

  function FeaturedEvents(posts:any){
    console.log("Priyanka");
     console.log(posts);
    return <>
        <div className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                <div className="col-lg-6 m-auto">
                    <h1 className="h1">Featured Events</h1>
                    <p>Featured Events will be shown here in this section</p>
                </div>
                </div>
                <div className="row">
                    {/* <FeaturedEventItem events = {posts} />  */}
                </div>
            </div>
        </div>
        
    </>
}
export async function getServerSideProps() {    
    debugger;
    console.log("D has added");
    const res = await fetch('https://mocki.io/v1/790d6ad3-55b7-4854-8124-a54872447215')
    const posts = await res.json()
    return {
      props: {posts}, // will be passed to the page component as props
    };
  }
export default FeaturedEvents;

