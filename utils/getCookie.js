export default function getCookie(name){
    const c = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
    console.log(c);
    return c ? c.pop() : "";
}