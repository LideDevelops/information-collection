import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState<any>(null);
  useEffect(() => {
    if(user === undefined) {
      return;
    }
    const getUserMetadata = async () => {
      const domain = "dev-w-a8nr3b.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(metadataResponse => metadataResponse.json())
        .then(user_metadata => setUserMetadata(user_metadata));
  
      } catch (e: any) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user, user?.sub]);


  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    <>
    {isAuthenticated && user !== undefined && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )}
    </>
  );
};

export default Profile;