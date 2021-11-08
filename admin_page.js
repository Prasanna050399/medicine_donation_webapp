import React, { useEffect, useState } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.development";
import { getActiveCollectionRequest, getCompleteCollectionRequest, getUserData, setReject } from "../services/UI_to_node";

import donate_img from './images/donate-image.png'
import { useParams , useHistory, Redirect} from "react-router-dom";
import { get } from "mongoose";
export default function AdminPage(){
    const history = useHistory()
    // const {id} = useParams()
    // console.log(id)
    // if(!id){
    //     //   <Redirect path />
    //     history.push(`/login-as-admin`)
    // }
    
    const [activeContent, setActiveContent] = useState([]) 
    const [content, setContent] = useState([])
    const [UserDetails, setUserDetails] = useState([])
    // const TableData = []
    // const TableData = {}
    // setInputData([...inputData, { medicineName: '', quantity: '',weight:'',companyName:'' }])
    
    async function getData(userID,Date,id){
        const userdata = await getUserData(userID)
        if(userdata){
            const temp = {
                SrNo : id,
                name : userdata.name,
                address : userdata.address,
                date : Date
            }
            // console.log(temp)
            return temp
        }
    }
    // useEffect(() => {
    //     async function getUserStates(){
    //         const activeData = await getActiveCollectionRequest()
    //         const data = await getCompleteCollectionRequest()
            
    //         setActiveContent(activeData)
    //         setContent(data)
    //     }getUserStates()
    // },[UserDetails])
    useEffect(() => {
        async function getRequests(){
            // console.log('before calling a function in getrequests')
            const activeData = await getActiveCollectionRequest()
            const data = await getCompleteCollectionRequest()
            
            setActiveContent(activeData) 
            setContent(data)
            
            // function updateState(newData){
            //     // console.log('newdata : ' + newData)
            //     // console.log("...UserDetails", ...UserDetails)
            //     // setUserDetails(prevState => {
            //     //     console.log('prevstate : ' + prevState)
            //     //     return {...prevState,newData}
            //     // })
            //     setUserDetails([...UserDetails,newData])
            // }
            // setUserDetails(userData)
            const TableData = []
            for(let i = 0; i<activeContent.length; i++){
                // console.log(activeContent[i].userID)
                
                TableData.push(await getData(activeContent[i].userID,activeContent[i].Date,activeContent[i]._id))
                // console.log(TableData)
                
                // TableData[i] = getData(activeContent[i].userID,activeContent[i].Date)
                // const temp = getData(activeContent[i].userID,activeContent[i].Date)
                // console.log(temp)
                
                // const temp = getData(activeContent[i].userID,activeContent[i].Date,i)
                // console.log(temp)
                // updateState(TableData)

            }
            // console.log(TableData)
            setUserDetails([...TableData])

        }getRequests()
    },[UserDetails])



    // const TableData = []
    // async function getTableData(){
    //         for(let i = 0; i<activeContent.length; i++){
    //             // console.log(activeContent[i].userID)
                
    //             TableData.push(await getData(activeContent[i].userID,activeContent[i].Date,activeContent[i]._id))
    //             // console.log(TableData)
                
    //             // TableData[i] = getData(activeContent[i].userID,activeContent[i].Date)
    //             // const temp = getData(activeContent[i].userID,activeContent[i].Date)
    //             // console.log(temp)
                
    //             // const temp = getData(activeContent[i].userID,activeContent[i].Date,i)
    //             // console.log(temp)
    //             // updateState(TableData)

    //         }
    //         console.log(TableData)
    //         setUserDetails([...TableData])
    // }getTableData()

    // console.log(UserDetails.length)
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
    // console.log(typeof(UserDetails))
    // console.log("Userdetails :", UserDetails)
    // console.log('approved = ',approved_req,' rejected = ',rejected_req)
    // console.log(TableData[0])

    async function updateCollectionRequest(requestID){
        // for(let i = 0; i < activeContent.length; i++)
        // {
        //     // console.log(activeContent[i]._id)
        //     if(activeContent[i]._id === userID){
        //         console.log(userID)
        //         const response = await setReject(userID)
        //         // setActiveContent(prevState => { 
        //         //     return {...prevState, active : false}
        //         // })
        //         console.log(activeContent)
        //         break
        //     }
        const response = await setReject(requestID)
        console.log(response)
        }
    
    function updateUserDetails(requestID){
        const tempArr = []
        for(let i = 0; i < activeContent.length; i++){
            if(activeContent[i]._id === requestID){
                continue
            }
            tempArr.push(activeContent[i])
        }
        setActiveContent([...tempArr])
    }
    
    const styles = {border: '2px solid black', margin : '10px',padding : '5px'}
    return(
        <div>
            {/* <img id = 'title_image' src = {donate_img} alt = 'image'/> */}
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
                    {UserDetails.map((item) => (
                        // const name = cont.name
                        // const date = cont.date
                        // const add = cont.address
                        // const med = cont.medname
                        <tr key = {item.SrNo}>
                            {/* {Object.values(item).map((val) => (<>
                                <td>{val}</td>
                                </>
                            ))} */}
                            {/* <td>{val.date}</td>
                            <td>{val.address}</td> */}
                            {/* <td>{cont.medname}</td> */}
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.address}</td>
                            <td><button onClick = {(event) =>{
                                event.preventDefault()
                                history.push(`/requestDetails/${item.SrNo}`)
                            }}>Details</button></td>
                            <td><button onClick = {()=>{
                                // console.log(item.name)
                                // console.log(item.date)
                                console.log(item.SrNo)
                                updateCollectionRequest(item.SrNo)
                                console.log("length of content",content.length, "length of active content",activeContent.length)
                                updateUserDetails(item.SrNo)
                            }}>Reject</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}