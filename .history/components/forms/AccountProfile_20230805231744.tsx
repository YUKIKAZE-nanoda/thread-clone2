"us client"
import {From} from "@/components/ui/form";
interface Props{
    user:{
        id:string,
        objectId:string,
        username:string,
        name:string,
        bio:string,
        image:string,
    };
    btnTitle:string;
}
const AccountProfile = ({user,btnTitle}) => {
    return (
        <Form>

        </Form>
    )
}

export default AccountProfile