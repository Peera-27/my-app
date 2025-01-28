'use server'

export async function createemait(formdata: FormData) {
    console.log("hello")
    const email = formdata.get('email')
    console.log(email)
}
