type UserTypes ={
    info: string
    messagesCount:number
    isLoggedIn:boolean
}

const Users = (props:UserTypes)=>{
    return(
        <div>
            {props.isLoggedIn ? `Welcome ${props.info}! You have ${props.messagesCount} message`:"Welcome Guest!"}
        </div>
    )
}
export default Users;