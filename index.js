const shareButttons = document.querySelectorAll('.tile-share-button')

async function copyText(e){
    //previnir de fazer o default que é ir para o site
    e.preventDefault()
    let link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
    } catch (error) {
        console.log(error);
    }
}


shareButttons.forEach(
    button => button.addEventListener('click', copyText)
)