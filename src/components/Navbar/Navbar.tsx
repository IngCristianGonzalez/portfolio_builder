import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar(){

return(

<nav
className="
fixed
top-5
right-5
flex
gap-3
z-50
"
>

<LanguageSwitcher/>

<ThemeToggle/>

</nav>

)

}