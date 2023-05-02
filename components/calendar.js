import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function calendar() {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi();
          cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
        })();
      }, [])
      return <Cal calLink="afjstudios/quick-chat" style={{padding: "20px",width:"100%",height:"100%",overflow:"scroll"}} />;
  }