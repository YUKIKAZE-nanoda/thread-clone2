"us client"
interface Props{
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        
    }
}
const AccountProfile = ({user,btnTitle}) => {
    return (
        <div>
            Account Profile
        </div>
    )
}

export default AccountProfile