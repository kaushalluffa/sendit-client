export default function getCookie(name){
    const c = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
    return c ? c.pop() : "";
}