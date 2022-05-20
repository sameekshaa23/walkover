import Button from "@component/buttons/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login(){
    return (
        <div>
            <Image 
            src="https://links.papareact.com/1ui"
            height="300"
            width="550"
            objectFit="contain"
            alt="my img"
            />
            <Button
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
            >Login</Button>
        </div>
    );
}

export default Login;