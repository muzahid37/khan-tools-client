
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateProfile = () => {
   
    
const [user] = useAuthState(auth);
const onSubmit = (event) => {
    event.preventDefault();
    
    const profile = {
        address: event.target.address.value,
        education:event.target.education.value,
        phone:event.target.phone.value,
       }
       fetch('http://localhost:5000/profile',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(profile)
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
           
            
            
           })
       

}
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto my-12">
          <div className="card-body">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                className="input w-full max-w-xs"
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="email"
                name="email"
                disabled
                value={user?.email}
                placeholder="Email address"
              />
              
              <input
                className="input w-full max-w-xs"
                type="text"
                name="education"
                placeholder="Add your education"
              />
               <input
                className="input w-full max-w-xs"
                type="text"
                name="address"
                placeholder="Add your address"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="phone"
                placeholder="Add your phone number"
              />

              <input
                className="btn btn-secondary w-full max-w-xs"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
        </div>
    );
};

export default UpdateProfile;