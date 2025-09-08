import { useAuth0 } from "@auth0/auth0-react";
import Button from "../ui/Button";

const GoogleButton = () => {
    const { loginWithRedirect } = useAuth0();
    // const handleLogout = () => {
    //     logout({
    //         logoutParams: {
    //             returnTo: window.location.origin
    //         }
    //     });
    // };

    return <div>
            <Button size="small"
                onClick={() => loginWithRedirect()}
            >
                Signin
            </Button>
       
    </div >
};
export default GoogleButton;





// /* inspired from this svgbackgrounds.com/ */
// .button {
//     width: fit - content;
//     display: flex;
//     padding: 0.8em 1.1em;
//     gap: 0.4rem;
//     border: none;
//     font - weight: bold;
//     border - radius: 30px;
//     cursor: pointer;
//     text - shadow: 2px 2px 3px rgb(136 0 136 / 50 %);
//     background: linear - gradient(
//         15deg,
//       #880088,
//         #aa2068,
//         #cc3f47,
//         #de6f3d,
//         #f09f33,
//         #de6f3d,
//         #cc3f47,
//         #aa2068,
//       #880088
//     )
//     no - repeat;
//     background - size: 300 %;
//     background - position: left center;
//     transition: background 0.3s ease;
//     color: #fff;
// }

// .button:hover {
//     background - size: 320 %;
//     background - position: right center;
// }

