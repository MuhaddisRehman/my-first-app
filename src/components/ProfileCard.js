import React from 'react'

const ProfileCard = (props) => {
    return (
    <div style={{backgroundColor:"white", margin:"10px" }}>
        <div style={{display:"flex"}}>
            <img 
                src={props.img}  
                width="50px"
                alt="profile pic"
            />
            <div>
                <h2>{props.name}</h2>
                <h6>{props.title}</h6>
            </div>
        </div>
        <div>
            <p style={{fontSize: '10px', padding:'5px'}}>
                {props.description}
            </p>
        </div>
    </div>
    )
}

export default ProfileCard
