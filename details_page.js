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
    // let collReq = ""
    // let user = {}
    // async function getUserCollection(){
    //     collReq = await getCollectionRequest(id)
    //     user = await getUserData(collReq._id)
    //     // console.log(user)
    // }getUserCollection()
    // const tableData = []
    useEffect(() => {
        async function getUserCollection(){
            // collReq = await getCollectionRequest(id)
            // const user = await getUserData(collReq._id)
            const user = await getUserData(id)
            // console.log(user)
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
        async function getRequest(){
            const response = await getCollectionRequest(id)
            // console.log(response)
            // tableData.push(...response.request)
            setCollectionRequest([...response.request])
            // console.log(tableData)
        }getRequest()
        // setCollectionRequest(collReq)
        // console.log(collectionRequest)
    }, [])
    

    // const table = []
    // useEffect(() => {
    //     async function getRequest(){
    //         const response = await getCollectionRequest(id)
    //         console.log(response)
    //         table.push(...response.request)
    //         console.log(table)
    //     }getRequest()
    // },[])
    // console.log(userDetails)
    // console.log(user)
    return(
        // <p>{id}</p>
        <>
            <hr/>
            <div>
                <p>name - {userDetails.name}</p>
                <p>gender - {userDetails.gender}</p>
                <p>age - {userDetails.age}</p>
                <p>address - {userDetails.address}</p>
                <p>contact - {userDetails.contact}</p>
                {/* <p>name - {user.name}</p>
                <p>gender - {user.gender}</p>
                <p>age - {user.age}</p>
                <p>address - {user.address}</p>
                <p>contact - {user.contact}</p> */}
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
                {collectionRequest.map((item) => (
                        <tr key = {item.medicineName}>
                            <td>{item.medicineName}</td>
                            <td>{item.weight}</td>
                            <td>{item.quantity}</td>
                            <td>{item.companyName}</td>   
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}