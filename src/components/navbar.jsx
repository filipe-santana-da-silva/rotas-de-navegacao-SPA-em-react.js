import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import styles from './nav.module.css'
export default function Navbar() {
   
    return (
        <nav className={styles.nav}>
            
            <Link to="/"><img src='./favicon.png' alt=''/></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><CustomLink to='/contact'>Contato</CustomLink></li>
                <li className={styles.item}><CustomLink to='/company'>Empresa</CustomLink></li>
                <li className={styles.item}><CustomLink to='/newproject'>Novo Projeto</CustomLink></li>
                <li className={styles.item}><CustomLink to='/projects'>Projetos</CustomLink></li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive === to ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}