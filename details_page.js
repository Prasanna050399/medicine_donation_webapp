import { Collection, PromiseProvider } from "mongoose";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectionRequest, getUserData } from "../services/UI_to_node";

// export default function DetailsPage(props){
export default function DetailsPage(){
    const {id} = useParams()
    const [collectionRequest, setCollectionRequest] = useState([])
    const [userDetails, setUserDetails] = useState('')
    // async function getUser(id){
    //     const temp = await getUserData(id)
    //     return temp
    // }
    let collReq = ""
    useEffect(() => {
        const tableData = []
        async function getUserCollection(){
            collReq = await getCollectionRequest(id)
            const user = await getUserData(collReq.userID)
            setUserDetails(user)
            // console.log("in useEffect before getcollectionrequest")
            // console.log(id)
            // const collReq = await getCollectionRequest(id)
            // tableData.push(collReq)
            // console.log(tableData)
            // setCollectionRequest([...tableData])
            // console.log(collectionRequest)
            // console.log(collReq)
            // props.setRequest(collReq)
            // console.log(collReq)
            // setCollectionRequest(collReq)
            // console.log("in useEffect after getcollectionrequest")
            // console.log(collectionRequest)
            // console.log('collection state : ',collectionRequest)
            // console.log("in useEffect before getUserdata")
            // const user = await getUserData(props.request.userID)
            // const user = await getUserData(collectionRequest.userID)
            // console.log(user)
            // setUserDetails(user)
            // console.log("in useEffect after userdata")
            // console.log('User state :  ',userDetails)
            // const user = getUser(collectionRequest.userID) 
            // setUserDetails(user)
        }getUserCollection()
        // setCollectionRequest(collReq)
        // console.log(collectionRequest)
    }, [])
    // console.log(userDetails)
    
    return(
        // <p>{id}</p>
        <>
            <div>
                <p>name - {userDetails.name}</p>
                <p>gender - {userDetails.gender}</p>
                <p>age - {userDetails.age}</p>
                <p>address - {userDetails.address}</p>
                <p>contact - {userDetails.contact}</p>
            </div>
            <hr/>
            <h4>Medicine Requests</h4>
            <table>
                <thead>
                    <tr>
                        <th>Medicine name</th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th>company Name</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </>
    )
}