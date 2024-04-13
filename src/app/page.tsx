import  { UserButton, currentUser} from '@clerk/nextjs';


export default async function Page() {
  
let ClerkUserId = '';
let name = '';
let email = '';


const user = await currentUser();
if (user) {

ClerkUserId = user.id;
name = user.firstName + " " + user.lastName;
email = user.emailAddresses[0].emailAddress;
}


return ( 
  <div className='flex flex-col items-center justify-center h-screen gap-2'>

<h1 className='text-3xl text-gray-500 font-bold uppercase'>H1 Hotel</h1>

<h1> Clerk User ID : {ClerkUserId}</h1>
 <h1> Name : {name}</h1>
  <h1> Email : {email} </h1>
  <UserButton
  afterSignOutUrl='/sign-in' 
  />  
  </div>
)
}