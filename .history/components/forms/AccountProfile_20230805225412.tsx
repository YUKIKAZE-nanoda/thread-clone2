"us client"
interface Props{
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        bio:string,
        image:string,
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