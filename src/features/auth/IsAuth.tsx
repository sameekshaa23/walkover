import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IsAuthProps {}

const IsAuth: React.FC<IsAuthProps> = ({  }) => {
  const {data:session} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  return <>{}</>;
};

export default IsAuth;
