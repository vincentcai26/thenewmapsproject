import {useState,useEffect} from "react"
import options from "../services/datastoreOptions";
import Link from "next/link"

export default function Datastore(){
    return <div id="datastore">
        <div className="page-header">
            <h2>Datastore</h2>
            <p>Data to input into The New Maps Project's online visualizer. All are plain text files (.txt)</p> 
            <div className="background" style={{backgroundImage: 'url("/images/datastore.jpg")'}}></div>
        </div>
        <ul id="datastore-data">
            {options.map(d=>{
                return <li key={d.name}>
                    <div className="map-name">{d.name}</div>
                    <p className="map-districts">{d.districts}</p>
                    <p className="map-info">{d.info}</p>
                    <Link href={`https://firebasestorage.googleapis.com/v0/b/the-new-maps-project.appspot.com/o/allFiles%2F${d.fileName}?alt=media&token=6c22d4dd-b8c2-448f-b9ae-cba76098795e`}
                        className="filelink">File Link
                    </Link>
                </li>
            })}
        </ul>
    </div>
}