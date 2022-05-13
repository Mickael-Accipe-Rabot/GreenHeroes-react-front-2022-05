import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";

function MyProfile() {
    const [profiles, setProfiles] = useState({});
    

    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`/api/myprofile`, {withCredentials: true})
            .then(res => {
                console.log(res);
                return res.data;
            })
            .then(data => setProfiles(data))
            .catch(err => console.log(err));
    }, []);




    return (
        <div>
           <div className="">
            <Navbar />
            </div>
            <div className="">
                <img src={profiles.list_imageUrl} alt={profiles.first_name} />
            </div>
            <h1>{profiles.first_name}</h1>
        </div>
    );
};
export default MyProfile;