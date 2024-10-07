export async function loadFragment(root:HTMLElement) {
    const template = root.getAttribute("data-fragment");
    const htmlUrl = `${template}/index.html`;
    const scriptUrl = `${template}/index.js`;


    try{
        const html = await window.fetch(htmlUrl).then((res) => res.text());
        root.innerHTML = html;

        const script = document.createElement("script");
        script.src = scriptUrl;
        root.appendChild(script);
    
    } catch(error) {
        root.innerHTML = `<div>error...</div>`;
    }
}