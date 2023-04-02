import Link from "next/link"
import { SetStateAction } from "react";
export interface GradlistingProps {
    setGradsDataWithFilters: SetStateAction<string>;
  }
function Gradfilters() {
  return (
    <div className="col-lg-3">
                <h1 className="h2 pb-4">Categories</h1>
                <ul className="list-unstyled templatemo-accordion">
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Interested In
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul id="collapseOne" className="collapse list-unstyled pl-3" >
                            <li><Link className="text-decoration-none" href="#">Frontend</Link></li>
                            <li><Link className="text-decoration-none" href="#">Backend</Link></li>
                            <li><Link className="text-decoration-none" href="#">QA</Link></li>
                            <li><Link className="text-decoration-none" href="#">DevOps</Link></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Like to work on
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul id="collapseTwo" className="collapse list-unstyled pl-3" >
                            <li><Link className="text-decoration-none" href="#">Sitecore</Link></li>
                            <li><Link className="text-decoration-none" href="#">Drupal</Link></li>
                            <li><Link className="text-decoration-none" href="#">Mobile</Link></li>
                            <li><Link className="text-decoration-none" href="#">Cloud enginnering</Link></li>
                            <li><Link className="text-decoration-none" href="#">Content Hub</Link></li>
                            <li><Link className="text-decoration-none" href="#">Order Cloud</Link></li>
                            <li><Link className="text-decoration-none" href="#">PHP</Link></li>
                        </ul>
                    </li>
                    <li className="pb-3">
                        <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                        Acadmic Learnings
                            <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </Link>
                        <ul id="collapseThree" className="collapse list-unstyled pl-3" >
                            <li><Link className="text-decoration-none" href="#">None</Link></li>
                            <li><Link className="text-decoration-none" href="#">C#</Link></li>
                            <li><Link className="text-decoration-none" href="#">Asp.net</Link></li>
                            <li><Link className="text-decoration-none" href="#">Database Management</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
  )
}

export default Gradfilters
