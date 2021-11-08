import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { getActiveCollectionRequest, getCompleteCollectionRequest, getUserData } from "../services/UI_to_node";

import donate_img from './images/donate-image.png'
// import { useParams , useHistory, Redirect} from "react-router-dom";
export default function AdminPage(){
    // const history = useHistory()
    // const {id} = useParams()
    // console.log(id)
    // if(!id){
    //     //   <Redirect path />
    //     history.push(`/login-as-admin`)
    // }
    
    async function getData(userID,Date){
        const userdata = await getUserData(userID)
        if(userdata){
            const temp = {
                name : userdata.name,
                address : userdata.name,
                date : Date
            }
            // console.log(temp)
            return temp
        }
    }
    const [activeContent, setActiveContent] = useState([]) 
    const [content, setContent] = useState([])
    // const [UserDetails, setUserDetails] = userState([])

    useEffect(() => {
        async function getRequests(){
            // console.log('before calling a function in getrequests')
            const activeData = await getActiveCollectionRequest()
            const data = await getCompleteCollectionRequest()
            // const userData = await getUserData()
            // console.log('after calling a function in getrequests')
            // const data = {name : 'abc'}
            // console.log(data)
            setActiveContent(activeData) 
            setContent(data)
            // setUserDetails(userData)
        }getRequests()
    },[])
    // console.log('Complete content includes ',content)
    // console.log('Active content includes ', activeContent)
    // console.log(content.length)
    let approved_req = 0
    let rejected_req = 0
    for(let i = 0; i<content.length;i++)
    {
        if(content[i].status === 'Approved')
        {
            approved_req += 1
        }
        if(content[i].status === 'Rejected')
        {
            rejected_req += 1 
        }
    }
    // const TableData = []
    // const TableData = {}

    for(let i = 0; i<activeContent.length; i++){
        // console.log(activeContent[i].userID)
        // TableData.push(getData(activeContent[i].userID,activeContent[i].Date))
        // console.log(TableData)
        // TableData[i] = getData(activeContent[i].userID,activeContent[i].Date)
        const temp = getData(activeContent[i].userID,activeContent[i].Date)
        console.log(temp)
    }
    // console.log('approved = ',approved_req,' rejected = ',rejected_req)
    // console.log(TableData[0])
    const styles = {border: '2px solid black', margin : '10px',padding : '5px'}
    return(
        <div>
            <img id = 'title_image' src = {donate_img} alt = 'image'/>
            <hr/>
            <div style = {styles}>
                <h4 align = 'center'>Total Requests</h4>
                <p>Number of requests : {content.length+activeContent.length}</p>
            </div>
            <div style = {styles}>
                <h4 align = 'center'>Approved</h4>
                <p>Number of approved requests : {approved_req}</p>
            </div>
            <div style = {styles}>
                <h4 align = 'center'>Rejected</h4>
                <p>Number of approved requests : {rejected_req}</p> 
            </div>
            
            {/* <input type = 'textarea' readOnly = 'true'/>
            <input type = 'textarea' readOnly = 'true'/>
            <hr/> */}
            <hr/>
            <h4>Requests</h4>
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Address</th>
                        {/* <th> <button></button></th> */}
                        <th> </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {activeContent.map((cont) => (
                        // const name = cont.name
                        // const date = cont.date
                        // const add = cont.address
                        // const med = cont.medname
                        <tr>
                            <td>{cont.name}</td>
                            <td>{cont.date}</td>
                            <td>{cont.address}</td>
                            {/* <td>{cont.medname}</td> */}
                            <td><button>Details</button></td>
                            <td><button onClick = {()=>{
                                console.log(cont.name)
                                console.log(cont.date)
                                console.log("Enter the rejection logic here")
                            }}>Reject</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}




// import React, { useEffect, useState } from "react";
// import { act } from "react-dom/test-utils";
// import { getActiveCollectionRequest, getCompleteCollectionRequest, getUserData } from "../services/UI_to_node";

// import donate_img from './images/donate-image.png'
// // import { useParams , useHistory, Redirect} from "react-router-dom";
// export default function AdminPage(){
//     // const history = useHistory()
//     // const {id} = useParams()
//     // console.log(id)
//     // if(!id){
//     //     //   <Redirect path />
//     //     history.push(`/login-as-admin`)
//     // }
    
//     const [activeContent, setActiveContent] = useState([]) 
//     const [content, setContent] = useState([])
//     // const [UserDetails, setUserDetails] = useState([])
//     const TableData = []
//     // const TableData = {}
    
//     async function getData(userID,Date){
//         const userdata = await getUserData(userID)
//         if(userdata){
//             const temp = {
//                 name : userdata.name,
//                 address : userdata.name,
//                 date : Date
//             }
//             // console.log(temp)
//             return temp
//         }
//     }
//     useEffect(() => {
//         async function getRequests(){
//             // console.log('before calling a function in getrequests')
//             const activeData = await getActiveCollectionRequest()
//             const data = await getCompleteCollectionRequest()
//             // const userData = await getUserData()
//             // console.log('after calling a function in getrequests')
//             // const data = {name : 'abc'}
//             // console.log(data)
//             setActiveContent(activeData) 
//             setContent(data)
//             // setUserDetails(userData)
//             for(let i = 0; i<activeContent.length; i++){
//                 // console.log(activeContent[i].userID)
//                 TableData.push(getData(activeContent[i].userID,activeContent[i].Date))
//                 console.log(TableData)
//                 // TableData[i] = getData(activeContent[i].userID,activeContent[i].Date)
//                 // const temp = getData(activeContent[i].userID,activeContent[i].Date)
//                 // console.log(temp)
//             }
//         }getRequests()
//     },[])
//     // console.log('Complete content includes ',content)
//     // console.log('Active content includes ', activeContent)
//     // console.log(content.length)
//     let approved_req = 0
//     let rejected_req = 0
//     for(let i = 0; i<content.length;i++)
//     {
//         if(content[i].status === 'Approved')
//         {
//             approved_req += 1
//         }
//         if(content[i].status === 'Rejected')
//         {
//             rejected_req += 1 
//         }
//     }

//     // console.log('approved = ',approved_req,' rejected = ',rejected_req)
//     // console.log(TableData[0])
//     const styles = {border: '2px solid black', margin : '10px',padding : '5px'}
//     return(
//         <div>
//             <img id = 'title_image' src = {donate_img} alt = 'image'/>
//             <hr/>
//             <div style = {styles}>
//                 <h4 align = 'center'>Total Requests</h4>
//                 <p>Number of requests : {content.length+activeContent.length}</p>
//             </div>
//             <div style = {styles}>
//                 <h4 align = 'center'>Approved</h4>
//                 <p>Number of approved requests : {approved_req}</p>
//             </div>
//             <div style = {styles}>
//                 <h4 align = 'center'>Rejected</h4>
//                 <p>Number of approved requests : {rejected_req}</p> 
//             </div>
            
//             {/* <input type = 'textarea' readOnly = 'true'/>
//             <input type = 'textarea' readOnly = 'true'/>
//             <hr/> */}
//             <hr/>
//             <h4>Requests</h4>
//             <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Date</th>
//                         <th>Address</th>
//                         {/* <th> <button></button></th> */}
//                         <th> </th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {TableData.map((item) => (
//                         // const name = cont.name
//                         // const date = cont.date
//                         // const add = cont.address
//                         // const med = cont.medname
//                         <tr>
//                             <td>{item.name}</td>
//                             <td>{item.date}</td>
//                             <td>{item.address}</td>
//                             {/* <td>{cont.medname}</td> */}
//                             <td><button>Details</button></td>
//                             <td><button onClick = {()=>{
//                                 console.log(item.name)
//                                 console.log(item.date)
//                                 console.log("Enter the rejection logic here")
//                             }}>Reject</button></td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }