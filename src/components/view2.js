export default function View2() {    
    const getSessionData = () => {
      //fetching username from sesstion storage
      let names=JSON.parse(sessionStorage.getItem("name"));
      return names != null ? names.join('\n') : null;
    };
    
    return (
      <>
        { getSessionData()!=null && <pre>{getSessionData()}</pre>}
      </>
    )
}