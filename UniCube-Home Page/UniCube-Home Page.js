const form=document.getElementById('college-form')
form.addEventListener('ask permission', permit )

async function permit(event){
    event.preventDefault()
    const clgcode= document.getElementById('college-code').value

    const result= await fetch('/api/register',
    {method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(clgcode)}).then((res)=>res.json())

    console.log(result)
}