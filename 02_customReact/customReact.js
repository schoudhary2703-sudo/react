
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    if(reactElement.props){
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
}
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href:'https://www.google.com/search?q=sandeep+choudhary&sca_esv=b95d1611b6ab2c1b&sxsrf=APpeQnsG1zuReh75AN6xO5q7xLVn7QMi8w%3A1784115656651&ei=yHFXatynJ8WWseMP36L24Ak&biw=1536&bih=695&ved=0ahUKEwjcq8_fzNSVAxVFS2wGHV-RHZwQ4dUDCBI&uact=5&oq=sandeep+choudhary&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXNhbmRlZXAgY2hvdWRoYXJ5MgsQLhiRAhiABBiKBTIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhoQLhiRAhiABBiKBRiXBRjcBBjeBBjfBNgBAUjeGFDOAlj7FHABeAGQAQCYAdIBoAGPDqoBBTAuOC4yuAEDyAEA-AEBmAILoAK1D8ICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhhDGIAEGIoFGMgDGLAD2AEBwgITEC4YgAQYigUYQxjIAxiwA9gBAcICDRAuGEMYsQMYgAQYigXCAgoQABiABBiKBRhDwgINEAAYgAQYigUYQxixA8ICBRAuGIAEwgINEC4YgAQYigUYQxixA8ICHBAuGEMYsQMYgAQYigUYlwUY3AQY3gQY3wTYAQHCAgsQLhiABBiKBRiRAsICCxAAGIAEGIoFGJECwgILEC4YrwEYxwEYgATCAggQLhixAxiABMICChAuGIAEGBQYhwLCAhoQLhiABBiKBRiRAhiXBRjcBBjeBBjfBNgBAcICDhAuGJECGLEDGIAEGIoFwgILEC4YgAQYxwEYrwHCAgoQABiABBgCGMsBmAMAiAYBkAYTugYGCAEQARgJkgcFMS43LjOgB4C8AbIHBTAuNy4zuAepD8IHBzItMi44LjHIB48BgAgB&sclient=gws-wiz-serp',
        target:"_blank"
    },
    Children:'click me to check who is sandeep choudhary'

}
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer);