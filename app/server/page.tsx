export default function Page() {
    async function create(formdata : FormData) {
        'use server'
        console.log("hello")
        const email = formdata.get('email')
        console.log(email)
    }
    return (
        <div>
            <form action={create}>
                <input type="email" name="email" />
                <textarea className="" name="email" id="email"></textarea>
                <button>Submit</button>
            </form>
      </div>  
);
}